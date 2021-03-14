import {NgModule} from '@angular/core';
import {LoginLayoutComponent} from './components/login-layout/login-layout.component';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  declarations: [
    LoginLayoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule {
}
