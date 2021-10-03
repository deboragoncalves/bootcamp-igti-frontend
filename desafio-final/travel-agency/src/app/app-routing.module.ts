import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetTravelInformationsComponent } from './get-travel-informations/get-travel-informations.component';

const routes: Routes = [
  {
    path: '',
    component: GetTravelInformationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
