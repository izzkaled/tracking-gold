# ذهب عُمان — Gold Oman

موقع Angular بسيط لعرض أسعار الذهب في عُمان (عيار 18 فما فوق).

## الميزات

- أسعار عيار 18 / 21 / 22 / 24
- فلتر حسب العيار
- عربي ↔ إنجليزي (مع RTL / LTR)
- وضع فاتح ↔ داكن

## تشغيل المشروع

```bash
npm install
npm start
```

افتح: http://localhost:4200

## هيكل المشروع (للتفّهم)

```
src/app/
  models/gold-price.ts     ← شكل البيانات
  data/gold-prices.ts      ← الأسعار التجريبية
  i18n/translations.ts     ← نصوص عربي / إنجليزي
  services/
    language.service.ts    ← تبديل اللغة
    theme.service.ts       ← الوضع الداكن / الفاتح
  app.component.ts         ← المنطق الرئيسي + الفلتر
  app.component.html       ← الواجهة
  app.component.css        ← تنسيق الصفحة
```

> الأسعار تجريبية للتعلّم وليست أسعار سوق حية.
