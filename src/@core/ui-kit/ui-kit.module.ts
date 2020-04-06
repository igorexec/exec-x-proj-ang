import { NgModule } from '@angular/core'
import { ButtonComponent } from '@core/ui-kit/atoms'

const COMPONENTS = [
  ButtonComponent,
]

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class UiKitModule {}
