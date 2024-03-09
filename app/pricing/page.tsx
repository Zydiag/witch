"use client";

import { PLANS } from "@/config/pricing";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function PricingPage() {
  const router = useRouter();

  const handleSubscription = async (plan: any) => {
    try {
      if (plan.stripeId) {
        const response = await fetch("/api/dummy-payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            price: plan.stripeId,
          }),
        });
        const data = await response.json();
        if (data.url) {
          router.push(data.url);
        }
      }
    } catch (error) {
      console.error("Subscription error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-8">Choose Your Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {Object.values(PLANS).map((plan) => (
          <Card key={plan.name} className="p-6">
            <div className="text-2xl font-bold mb-4">{plan.name}</div>
            <div className="text-3xl font-bold mb-6">
              ${plan.price}<span className="text-lg font-normal">/month</span>
            </div>
            <div className="space-y-4 mb-6">
              {plan.features.map((feature) => (
                <div key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Button
              className="w-full"
              variant={plan.name === "Pro" ? "default" : "outline"}
              onClick={() => handleSubscription(plan)}
            >
              {plan.price === 0 ? "Get Started" : "Subscribe"}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
