// ===== STRIPE CONFIGURATION =====
// SAUGI KONFIGURACIJA - RAKTAMS

const StripeConfig = {
  // Publishable Key (VIEŠAS - frontend'e)
  publishableKey: 'pk_test_51TaaMzAnUiJBTgzLLuS2ZlB6SoV31i7yeJ1nUsSBcyD4xp6PlTK7HaQw9qy24wW4wesiQBoWzAKIq7jJ2gxnvG5j00mukkkq56',
  
  // Product ID
  productId: 'prod_UZjssQbkHrvXaN',
  
  // Secret Key (TIKTAI Backend'e!)
  // ⚠️ TAI NIEKADA NAUDOTIS FRONTEND'E!
  // Naudok tiktai API route'uose (Node.js, Python, etc.)

  
  // Environment
  environment: 'test',
  
  // Redirect URLs
  successUrl: window.location.href + '?success=true',
  cancelUrl: window.location.href + '?canceled=true',
};

// Validacija
function validateStripeConfig() {
  const missingKeys = [];
  
  if (StripeConfig.publishableKey.includes('IRASYK')) {
    missingKeys.push('publishableKey');
  }
  
  if (StripeConfig.productId.includes('prod_') && StripeConfig.productId.includes('IRASYK')) {
    missingKeys.push('productId');
  }
  
  if (missingKeys.length > 0) {
    console.warn('⚠️ Nepilnos Stripe konfigracijos:', missingKeys);
    return false;
  }
  
  console.log('✅ Stripe konfiguracija tinkama');
  return true;
}

// Exportavimas
window.StripeConfig = StripeConfig;
window.validateStripeConfig = validateStripeConfig;
