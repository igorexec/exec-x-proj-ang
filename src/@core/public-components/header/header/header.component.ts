import { Component } from '@angular/core'

@Component({
  selector: 'arb-header',
  styleUrls: ['./header.component.scss'],
  template: `
    <header responsive #responsive="responsive">
      <arb-mobile-header *ngIf="responsive.isMobile; else desktopHeader"></arb-mobile-header>
      <ng-template #desktopHeader>
        <arb-desktop-header></arb-desktop-header>
      </ng-template>
    </header>
  `,
})
export class HeaderComponent {}
