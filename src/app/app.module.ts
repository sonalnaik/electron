import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './/app-routing.module';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { IndexComponent } from './index/index.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginGuard } from './login.guard';
import { StripeComponent } from './stripe/stripe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LoginComponent,
    IndexComponent,
    LogoutComponent,
    StripeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [LoginService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
