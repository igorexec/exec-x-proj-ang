import { NgModule } from '@angular/core'
import { ButtonComponent } from './button'

const COMPONENTS = [
  ButtonComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class UiKitModule {}
