import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BackdoorGuard } from '../guard/backdoor.guard';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    canActivate : [BackdoorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
