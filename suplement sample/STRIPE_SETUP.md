# 🔐 STRIPE SETUP - INSTRUKCIJOS

## 📝 Kur Įdėti Raktus?

Jūs turite **TRI VIETAS** kur dėti raktus:

### 1️⃣ **config.js** (PAGRINDINĖ VIETA - Frontend)
Failo vieta: `/suplement sample/config.js`

```javascript
const StripeConfig = {
  publishableKey: 'pk_test_IRASYK_SAV_PUBLISHABLE_KEY_CIA',  // ← ČIAIASDĖK
  secretKey: 'sk_test_IRASYK_SAV_SECRET_KEY_CIA',            // ← IR ČIA
  productId: 'prod_UZjssQbkHrvXaN',  // ✅ Jau yra!
};
```

### 2️⃣ **.env.local** (Lokali konfiguracija - nedalintis!)
Failo vieta: `/suplement sample/.env.local`

```env
STRIPE_PUBLISHABLE_KEY=pk_test_IRASYK_SAVO_KEY
STRIPE_SECRET_KEY=sk_test_IRASYK_SAVO_KEY
STRIPE_PRODUCT_ID=prod_UZjssQbkHrvXaN
```

### 3️⃣ **Backend Server** (Kai bus Node.js/Python)
Secret key TIKTAI čia! Niekada frontend'e!

---

## 🔑 Gauti Raktus iš Stripe

1. Eik: https://dashboard.stripe.com
2. Pasirink **"Test Mode"** (viršuje dešinėje)
3. Meniune spausk **"Developers"**
4. Pasirink **"API keys"**

**Iš ten skopiavyk:**
- `pk_test_...` → **Publishable Key**
- `sk_test_...` → **Secret Key** ⚠️ (SLAPTAS!)

---

## ✅ ŽINGSNIAI:

1. **Atidaryk `config.js`** failą
2. **Pakeisk šias eilutes:**
   ```javascript
   publishableKey: 'pk_test_IRASYK_SAV_PUBLISHABLE_KEY_CIA', // ← ČIADĖK
   secretKey: 'sk_test_IRASYK_SAV_SECRET_KEY_CIA', // ← ČIADĖK
   ```
3. Įklijuok savo raktus iš Stripe Dashboard
4. **Išsaugok failą** (Ctrl+S)
5. Atidaryk puslapi ir testuok! 🎉

---

## 🧪 Testuoti Mokėjimą

Kai spaudai **"💳 Testinis Mokėjimas"** - naudok:

```
Kortele: 4242 4242 4242 4242
Galioja: 12/26
CVC: 424
```

---

## ⚠️ SVARBU - Saugumas!

✅ **Publishable Key** - OK frontend'e  
❌ **Secret Key** - NIEKADA frontend'e! Tiktai backend'e!  
❌ **.env.local** - NIEKADA push'inti į Git!

---

## 🆘 Klaidų Išsprendimas

**Klaida:** "Publishable Key invalid"
→ Tiksliai skopiavai key'ą iš Dashboard?

**Klaida:** "Product not found"  
→ Ar product ID `prod_UZjssQbkHrvXaN` egzistuoja Stripe?

---

**SEKIS! 🚀 Kai viski nustatai - sakyk man, o aš padaryšiu backend'o sesijos kūrimą!**
