import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { UiKitModule } from '@core/ui-kit'
import { HeaderModule } from '@core/public-components/header'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    UiKitModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
