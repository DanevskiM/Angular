import { Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appSafeLink]',
  standalone: true,
  host: {
    '(click)': 'onConfirmLeavePage($event)',
  },
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
