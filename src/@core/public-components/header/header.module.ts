import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ResponsiveDirective } from '@core/directives'
import { HeaderComponent } from './header'
import { MobileHeaderComponent } from './mobile-header'
import { DesktopHeaderComponent } from './desktop-header'
import { HamburgerComponent } from './mobile-header/hamburger'

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, MobileHeaderComponent, DesktopHeaderComponent, ResponsiveDirective, HamburgerComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
