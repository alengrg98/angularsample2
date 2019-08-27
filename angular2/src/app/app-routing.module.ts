import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { RemoveproductComponent } from './removeproduct/removeproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DataComponent } from './data/data.component';
const routes: Routes = [
  {path:"new",component:AddproductComponent},
  {path:"edit",component:EditproductComponent},
  {path:"",component:ViewproductComponent},
  {path:"delete",component:RemoveproductComponent},
  {path:"about",component:AboutusComponent},
  {path:"contact",component:ContactusComponent},
  {path:"data",component:DataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
