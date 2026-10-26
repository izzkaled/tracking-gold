/** شكل بيانات سعر الذهب — Interface بسيط */
export interface GoldPrice {
  id: number;
  karat: number;       // العيار: 18, 21, 22, 24
  pricePerGram: number; // السعر بالجرام (ريال عماني)
  changePercent: number; // نسبة التغير اليوم (%)
}
