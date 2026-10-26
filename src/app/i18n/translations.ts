/** ترجمات عربي / إنجليزي — كائن بسيط سهل القراءة */
export const TRANSLATIONS = {
  ar: {
    brand: 'ذهب عُمان',
    title: 'أسعار الذهب في عُمان',
    subtitle: 'عيار 18 فما فوق — بالريال العماني للجرام',
    filterAll: 'الكل',
    filterLabel: 'تصفية حسب العيار',
    karat: 'العيار',
    price: 'السعر / جرام',
    change: 'التغير اليوم',
    currency: 'ر.ع',
    updated: 'آخر تحديث',
    empty: 'لا توجد نتائج لهذا الفلتر',
    note: 'أسعار تجريبية للتعلّم — ليست أسعار سوق حية',
    light: 'فاتح',
    dark: 'داكن',
  },
  en: {
    brand: 'Gold Oman',
    title: 'Gold Prices in Oman',
    subtitle: 'Karat 18 and above — Omani Rial per gram',
    filterAll: 'All',
    filterLabel: 'Filter by karat',
    karat: 'Karat',
    price: 'Price / gram',
    change: "Today's change",
    currency: 'OMR',
    updated: 'Last updated',
    empty: 'No results for this filter',
    note: 'Demo prices for learning — not live market rates',
    light: 'Light',
    dark: 'Dark',
  },
};

export type Lang = 'ar' | 'en';
export type TranslationKey = keyof typeof TRANSLATIONS.ar;
