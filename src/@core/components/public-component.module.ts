import { NgModule } from '@angular/core'
import { HeaderComponent } from './header'

const COMPONENTS = [
  HeaderComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class PublicComponentsModule {}
