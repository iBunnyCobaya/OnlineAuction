import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const appRouters: Routes = [
  {path: '', redirectTo: 'form', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouters)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutersModule {
}
