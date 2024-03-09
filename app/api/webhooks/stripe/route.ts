import Stripe from 'stripe';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('Stripe-Signature') as string;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }

  const session = event.data.object as Stripe.Checkout.Session;

  if (event.type === 'checkout.session.completed') {
    // Handle successful payment here
    // You can update your database, send confirmation emails, etc.
    const userId = session?.metadata?.userId;

    if (userId) {
      // Update user subscription status or credits in your database
      // Example: await prisma.user.update({ where: { id: userId }, data: { ... } });
    }
  }

  return new NextResponse(null, { status: 200 });
}
