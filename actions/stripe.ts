import { getStripe } from "@/lib/stripe-client";

export const createCheckoutSession = async (priceId: string) => {
  try {
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price: priceId,
      }),
    });

    const data = await response.json();

    if (!data.url) {
      throw new Error('Invalid response from server');
    }

    const stripe = await getStripe();
    const { error } = await stripe!.redirectToCheckout({
      sessionId: data.sessionId,
    });

    if (error) {
      throw new Error(error.message);
    }
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
