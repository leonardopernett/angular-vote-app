import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddLinkComponent} from './components/add-link/add-link.component'

const routes: Routes = [
  {
    path:'' , redirectTo:'links', pathMatch:'full'
  },
  {
   path:'links', component:AddLinkComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
