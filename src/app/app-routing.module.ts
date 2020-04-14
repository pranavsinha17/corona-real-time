import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StateWiseStatComponent } from './state-wise-stat/state-wise-stat.component';
import { AppComponent } from './app.component';
import { IndiaStatsComponent } from './india-stats/india-stats.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FaqComponentComponent } from './faq-component/faq-component.component';


const routes: Routes = [
  {
    path:"state-wise-search",component:StateWiseStatComponent
  },
  {
    path:"home",component:IndiaStatsComponent

  },
  {
    path:"about-me",component:AboutMeComponent
  },
  {
    path:"faq",component:FaqComponentComponent
  }
  , {
    path:'',redirectTo:'/home',pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
