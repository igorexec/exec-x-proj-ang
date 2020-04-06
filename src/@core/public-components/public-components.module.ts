import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ResponsiveDirective } from '@core/directives'
import { HeaderComponent } from './header'
import { MobileHeaderComponent } from './mobile-header'
import { DesktopHeaderComponent } from './desktop-header'

const COMPONENTS = [
  HeaderComponent,
  MobileHeaderComponent,
  DesktopHeaderComponent
]

const DIRECTIVES = [
  ResponsiveDirective
]

const EXPORT_COMPONENTS = [
  HeaderComponent
]

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS, ...DIRECTIVES],
  exports: [...EXPORT_COMPONENTS]
})
export class PublicComponentsModule {}
