import { Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

/**
 * خدمة الثيم — وضع فاتح / داكن
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly theme = signal<Theme>('light');

  toggle(): void {
    const next: Theme = this.theme() === 'light' ? 'dark' : 'light';
    this.theme.set(next);
    this.apply(next);
  }

  init(): void {
    // إن وُجدت تفضيل محفوظ سابقاً في المتصفح
    const saved = localStorage.getItem('theme') as Theme | null;
    const theme = saved === 'dark' || saved === 'light' ? saved : 'light';
    this.theme.set(theme);
    this.apply(theme);
  }

  private apply(theme: Theme): void {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
}
