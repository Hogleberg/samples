// Navigacijos juostos fono keitimas skrolinant
const navbar = document.querySelector('.navbar');

window.onscroll = function () {
    if (window.scrollY > 80) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.9)';
        navbar.style.boxShadow = 'none';
    }
}

// ===== STRIPE CHECKOUT INICIJALIZACIJA =====
document.addEventListener('DOMContentLoaded', function() {
    
    // Validuoti konfigraciją
    if (!validateStripeConfig()) {
        console.error('❌ Sukonfigūruok Stripe raktus config.js faile!');
        return;
    }
    
    // Naudoti StripeConfig iš config.js
    const STRIPE_KEY = StripeConfig.publishableKey;
    const PRODUCT_ID = StripeConfig.productId;
    
    // Patikrinti ar Stripe yra įkeltas
    if (typeof StripeCheckout === 'undefined') {
        console.warn('⚠️ StripeCheckout nėra sukrauta');
        return;
    }

    // Inicijalizuoti Stripe
    const stripeCheckout = new StripeCheckout(STRIPE_KEY);

    // Nustatyti testinio produkto mygtuką
    stripeCheckout.setupCheckoutButton('#stripe-checkout-btn', {
        productId: PRODUCT_ID,
        productName: 'TEST PRODUCT',
        productPrice: 2000, // 20.00 EUR centais
        quantity: 1,
        currency: 'eur'
    });

    console.log('✅ Stripe modul inicijalizuota sėkmingai');
});
