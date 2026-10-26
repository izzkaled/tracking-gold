import { Component, OnInit, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GOLD_PRICES } from './data/gold-prices';
import { GoldPrice } from './models/gold-price';
import { LanguageService } from './services/language.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  /** كل الأسعار (عيار 18+) */
  readonly allPrices: GoldPrice[] = GOLD_PRICES;

  /** العيارات المتاحة للفلتر */
  readonly karats = [18, 21, 22, 24];

  /** الفلتر الحالي: null = عرض الكل */
  readonly selectedKarat = signal<number | null>(null);

  /** الأسعار بعد الفلتر — يُحسب تلقائياً عند تغيير الفلتر */
  readonly filteredPrices = computed(() => {
    const karat = this.selectedKarat();
    if (karat === null) {
      return this.allPrices;
    }
    return this.allPrices.filter((p) => p.karat === karat);
  });

  /** تاريخ اليوم للعرض */
  readonly today = new Date();

  constructor(
    readonly lang: LanguageService,
    readonly theme: ThemeService
  ) {}

  ngOnInit(): void {
    this.lang.init();
    this.theme.init();
  }

  /** اختيار عيار للفلتر */
  setFilter(karat: number | null): void {
    this.selectedKarat.set(karat);
  }

  /** هل الفلتر نشط؟ */
  isActive(karat: number | null): boolean {
    return this.selectedKarat() === karat;
  }
}
