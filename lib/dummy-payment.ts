import { PLANS } from "@/config/pricing";

export class DummyPayment {
  static async createCheckoutSession(priceId: string, userId: string) {
    // Simulate payment processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Find the plan that matches the priceId
    const plan = Object.values(PLANS).find(p => p.stripeId === priceId);
    
    if (!plan) {
      throw new Error("Invalid plan selected");
    }

    // Return a dummy success URL
    return {
      url: `/dummy-checkout?plan=${plan.name}&price=${plan.price}&userId=${userId}`
    };
  }

  static async confirmPayment(planName: string, userId: string) {
    // Simulate payment confirmation delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      success: true,
      planName,
      userId,
      timestamp: new Date().toISOString()
    };
  }
}
