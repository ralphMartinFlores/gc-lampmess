import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GroupInfoComponent } from './group-info/group-info.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  {
    path : 'home', 
    component : HomeComponent
  },
  {
    path : 'groupinfo', 
    component : GroupInfoComponent
  },
  {
    path : 'messages', 
    component : MessagesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
