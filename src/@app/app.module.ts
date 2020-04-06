import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { UiKitModule } from '@core/ui-kit'
import { PublicComponentsModule } from '@core/public-components'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicComponentsModule,
    UiKitModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
