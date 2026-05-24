// ===== STRIPE CHECKOUT MODULIS =====
// Simple client-side payment link redirect without backend API calls

class StripeCheckout {
  constructor() {
    // No backend or Stripe.js required for Stripe Payment Links
  }

  setupCheckoutButton(buttonSelector, paymentLink) {
    const button = document.querySelector(buttonSelector);
    if (!button) {
      console.warn(`⚠️ Mygtukas "${buttonSelector}" nerastas`);
      return;
    }

    button.addEventListener('click', (e) => {
      e.preventDefault();
      this.redirectToPaymentLink(button, paymentLink);
    });
  }

  redirectToPaymentLink(button, paymentLink) {
    if (!paymentLink || typeof paymentLink !== 'string') {
      console.error('❌ Stripe payment link nėra sukonfigūruotas');
      alert('Klaida: Stripe payment link nėra sukonfigūruotas');
      return;
    }

    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = '💳 Vykdoma...';

    window.location.href = paymentLink;

    setTimeout(() => {
      button.disabled = false;
      button.textContent = originalText;
    }, 2000);
  }
}

// Eksportavimas
window.StripeCheckout = StripeCheckout;
