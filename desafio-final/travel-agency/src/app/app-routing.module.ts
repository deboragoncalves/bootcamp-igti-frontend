import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetTravelInformationsComponent } from './get-travel-informations/get-travel-informations.component';
import { ShowTravelInformationsComponent } from './show-travel-informations/show-travel-informations.component';

const routes: Routes = [
  {
    path: '',
    component: GetTravelInformationsComponent
  },
  {
    path: 'info',
    component: ShowTravelInformationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
