import { NgModule } from '@angular/core'
import { HomeComponent } from './home.component'

const COMPONENTS = [HomeComponent]

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class HomeModule {}
