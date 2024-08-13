import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from '../store/reducers/user.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AddPostComponent } from './pages/add-post/add-post.component';
import { CustomerEffects } from '../store/effects/user.effects';


@NgModule({
  declarations: [
    HomeComponent,
    AddPostComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([CustomerEffects])
  ]
})
export class DashboardModule { }
