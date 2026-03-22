import { Directive, ElementRef, inject, input } from '@angular/core';
import { LogDirective } from './log.directive';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
  hostDirectives: [LogDirective],
})
export class SafeLinkDirective {
  queryParam = input('myapp', { alias: 'appSafeLink' });
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
  constructor() {
    console.log('Safe Link Directive is active!');
  }

  onConfirmLeavePage(event: MouseEvent) {
    const wantsToLeave = this.hostElementRef.nativeElement.href;
    if (wantsToLeave) {
      const address = (event.target as HTMLAnchorElement).href;
      this.hostElementRef.nativeElement.href =
        address + '?from=' + this.queryParam();
      return;
    }
    event.preventDefault();
  }
}
