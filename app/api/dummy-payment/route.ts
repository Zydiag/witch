import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { DummyPayment } from "@/lib/dummy-payment";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { price } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!price) {
      return new NextResponse("Price is required", { status: 400 });
    }

    const session = await DummyPayment.createCheckoutSession(price, userId);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.log("[DUMMY_PAYMENT_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
