import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ElementiComponent} from './elementi/elementi.component';
import {HomeComponent} from './home/home.component';
import {PosComponent} from './pos/pos.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: []
  },
  {
    path: 'elementi',
    component: ElementiComponent,
    children: []
  },
  {
    path: 'pos',
    component: PosComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
