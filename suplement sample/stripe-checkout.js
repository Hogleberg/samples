// ===== STRIPE CHECKOUT MODULIS =====
// Visa logika atskirta - be poveikio esamam kodu

class StripeCheckout {
  constructor(publishableKey) {
    this.publishableKey = publishableKey;
    this.stripe = null;
    this.elements = null;
    this.init();
  }

  init() {
    if (typeof Stripe === 'undefined') {
      console.error('❌ Stripe.js nėra įkeltas!');
      return false;
    }
    this.stripe = Stripe(this.publishableKey);
    console.log('✅ Stripe inicijalizuota');
    return true;
  }

  // Nustatyti mygtukui click event
  setupCheckoutButton(buttonSelector, productData) {
    const button = document.querySelector(buttonSelector);
    if (!button) {
      console.warn(`⚠️ Mygtukas "${buttonSelector}" nerastas`);
      return;
    }

    button.addEventListener('click', async (e) => {
      e.preventDefault();
      await this.handleCheckout(button, productData);
    });
  }

  // Pagrindinis checkout handler
  async handleCheckout(button, productData) {
    // Išjungti mygtuką
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = '💳 Kraunasi...';

    try {
      // 1. Sukurti checkout sesiją
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData)
      });

      const session = await response.json();

      if (!response.ok || !session.id) {
        throw new Error(session.error || 'Klaida kuriant sesiją');
      }

      // 2. Nusiųsti į Stripe Checkout
      const result = await this.stripe.redirectToCheckout({
        sessionId: session.id
      });

      if (result.error) {
        throw new Error(result.error.message);
      }

    } catch (error) {
      console.error('❌ Klaida:', error.message);
      alert('Klaida: ' + error.message);
      button.disabled = false;
      button.textContent = originalText;
    }
  }

  // Testinis mokėjimas be backend'o (tik demui)
  async testPayment(productData) {
    console.log('🧪 Testuojama sesiją:', productData);
    
    // Simulated session - tik demui!
    const mockSession = {
      id: 'cs_test_mock_' + Date.now(),
      success_url: window.location.href + '?success=true',
      cancel_url: window.location.href
    };

    console.log('✅ Mock sesija sukurta:', mockSession);
    return mockSession;
  }
}

// Eksportavimas
window.StripeCheckout = StripeCheckout;
