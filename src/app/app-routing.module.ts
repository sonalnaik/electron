import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {ContentComponent} from './content/content.component';
import { IndexComponent } from './index/index.component';
import { LogoutComponent } from './logout/logout.component';
import { StripeComponent } from './stripe/stripe.component';
import { LoginGuard } from './login.guard';
const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent  },
  { path: 'content', component: ContentComponent,canActivate: [LoginGuard] },
  { path: 'index/:id', component: IndexComponent,canActivate: [LoginGuard] },
  { path: 'logout',component:LogoutComponent,canActivate: [LoginGuard]},
  { path: 'stripe', component: StripeComponent  },    
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}