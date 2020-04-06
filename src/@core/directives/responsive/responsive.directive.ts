import { Directive, HostListener } from '@angular/core'
import { ScreenSizes } from '@design/export'

@Directive({
  selector: '[responsive]',
  exportAs: 'responsive',
})
export class ResponsiveDirective {
  @HostListener('window:resize')
  onResize() {}

  get isMobile() {
    return window.innerWidth < ScreenSizes.Large
  }
}
