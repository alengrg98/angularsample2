import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {CalcService} from './calc.service';
import {MessageService} from './message.service';
import {ProductService} from './product.service';
/* import {StorageServiceModule} from 'angular-webstorage-service';
 */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { RemoveproductComponent } from './removeproduct/removeproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddproductComponent,
    ViewproductComponent,
    RemoveproductComponent,
    EditproductComponent,
    AboutusComponent,
    ContactusComponent,
    DataComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // StorageServiceModule
  ],
  providers: [CalcService,MessageService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
