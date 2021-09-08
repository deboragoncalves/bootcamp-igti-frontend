import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { RequestsComponent } from './requests/requests.component';

const routes: Routes = [
  {
    path: 'menu', component: MenuComponent
  },
  {
    path: '', redirectTo: 'menu', pathMatch: 'full'
  },
  {
    path: 'requests', component: RequestsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
