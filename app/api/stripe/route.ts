import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { price, quantity = 1 } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!price) {
      return new NextResponse("Price is required", { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/settings`,
      payment_method_types: ['card'],
      mode: 'payment',
      billing_address_collection: 'auto',
      customer_email: userId,
      line_items: [
        {
          price: price,
          quantity: quantity
        }
      ],
      metadata: {
        userId,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.log('[STRIPE_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
