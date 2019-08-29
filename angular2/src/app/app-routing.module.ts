import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { RemoveproductComponent } from './removeproduct/removeproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DataComponent } from './data/data.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [{path:"",component:LoginComponent},{path:"home",component:HomeComponent,children:
[
  {path:"new",component:AddproductComponent},
  {path:"edit/:id",component:EditproductComponent},
  {path:"view",component:ViewproductComponent},
  {path:"delete",component:RemoveproductComponent},
  {path:"about/:cname/:loc",component:AboutusComponent},
  {path:"contact",component:ContactusComponent},
  {path:"data",component:DataComponent}]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
