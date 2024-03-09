"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DummyCheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [planDetails, setPlanDetails] = useState({
    plan: "",
    price: "",
    userId: ""
  });

  useEffect(() => {
    setPlanDetails({
      plan: searchParams.get("plan") || "",
      price: searchParams.get("price") || "",
      userId: searchParams.get("userId") || ""
    });
  }, [searchParams]);

  const handlePayment = async () => {
    try {
      const response = await fetch("/api/dummy-payment/confirm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan: planDetails.plan,
          userId: planDetails.userId,
        }),
      });

      if (response.ok) {
        router.push("/settings?payment=success");
      }
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  if (!planDetails.plan || !planDetails.price) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="p-6">
          <p>Invalid checkout session</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-md p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center">Dummy Checkout</h1>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span>Plan:</span>
            <span className="font-medium">{planDetails.plan}</span>
          </div>
          <div className="flex justify-between">
            <span>Price:</span>
            <span className="font-medium">${planDetails.price}/month</span>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span>${planDetails.price}/month</span>
            </div>
          </div>
        </div>
        <Button 
          className="w-full" 
          size="lg"
          onClick={handlePayment}
        >
          Complete Purchase
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          This is a dummy checkout page for testing purposes.
          No actual payment will be processed.
        </p>
      </Card>
    </div>
  );
}
