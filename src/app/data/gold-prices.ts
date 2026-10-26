import { GoldPrice } from '../models/gold-price';

/**
 * بيانات تجريبية لأسعار الذهب في عُمان (عيار 18 فما فوق)
 * الأسعار تقريبية للتعلم فقط — ليست أسعار حية
 */
export const GOLD_PRICES: GoldPrice[] = [
  { id: 1, karat: 18, pricePerGram: 23.45, changePercent: 0.35 },
  { id: 2, karat: 21, pricePerGram: 27.36, changePercent: 0.42 },
  { id: 3, karat: 22, pricePerGram: 28.66, changePercent: -0.18 },
  { id: 4, karat: 24, pricePerGram: 31.27, changePercent: 0.51 },
];
