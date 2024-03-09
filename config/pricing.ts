export const PLANS = {
  FREE: {
    name: 'Free',
    price: 0,
    features: [
      'Basic features',
      'Limited to 5 requests per day',
      'Standard support'
    ],
    limits: {
      requestsPerDay: 5,
    },
    stripeId: null // Free plan doesn't need a Stripe ID
  },
  PRO: {
    name: 'Pro',
    price: 10,
    features: [
      'All Free features',
      'Unlimited requests',
      'Priority support',
      'Advanced features'
    ],
    limits: {
      requestsPerDay: Infinity,
    },
    stripeId: 'dummy_pro_plan' // Dummy Stripe ID for testing
  },
  ENTERPRISE: {
    name: 'Enterprise',
    price: 25,
    features: [
      'All Pro features',
      'Custom solutions',
      'Dedicated support',
      'API access'
    ],
    limits: {
      requestsPerDay: Infinity,
    },
    stripeId: 'dummy_enterprise_plan' // Dummy Stripe ID for testing
  }
};
