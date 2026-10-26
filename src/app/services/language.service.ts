import { Injectable, signal } from '@angular/core';
import { Lang, TRANSLATIONS, TranslationKey } from '../i18n/translations';

/**
 * خدمة اللغة — تغيّر بين عربي وإنجليزي
 * signal = قيمة تتحدث لوحدها في الواجهة عند التغيير
 */
@Injectable({ providedIn: 'root' })
export class LanguageService {
  // اللغة الحالية (افتراضي: عربي)
  readonly lang = signal<Lang>('ar');

  /** تبديل اللغة */
  toggle(): void {
    const next: Lang = this.lang() === 'ar' ? 'en' : 'ar';
    this.lang.set(next);
    this.applyDirection(next);
  }

  /** ترجمة مفتاح واحد */
  t(key: TranslationKey): string {
    return TRANSLATIONS[this.lang()][key];
  }

  /** اتجاه الصفحة: عربي = يمين لليسار */
  private applyDirection(lang: Lang): void {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }

  /** استدعاء عند بدء التطبيق */
  init(): void {
    this.applyDirection(this.lang());
  }
}
