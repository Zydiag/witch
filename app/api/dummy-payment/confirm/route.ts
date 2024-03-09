import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { DummyPayment } from "@/lib/dummy-payment";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { plan } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!plan) {
      return new NextResponse("Plan is required", { status: 400 });
    }

    const result = await DummyPayment.confirmPayment(plan, userId);

    return NextResponse.json(result);
  } catch (error) {
    console.log("[DUMMY_PAYMENT_CONFIRM_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
