import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { TopComponent } from './components/top/top.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HttpClientModule } from '@angular/common/http';
import { CarAddComponent } from './components/car-add/car-add.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarEditComponent } from './components/car-edit/car-edit.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    MenuComponent,
    HomeComponent,
    MaintenanceComponent,
    TopComponent,
    RegisterPageComponent,
    LoginPageComponent,
    AuthPageComponent,
    NotFoundPageComponent,
    CarAddComponent,
    CarDetailsComponent,
    CarEditComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
