import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { StoriesComponent } from './stories/stories.component';


const routes: Routes = [

  { path: '',
  pathMatch: 'full',
  component: AppComponent},
  {
    path: 'app-stories', 
    component: StoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
