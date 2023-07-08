import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryComponent } from './category/category.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: '', component: CategoriesComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'category', component: CategoryComponent},
]

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ECategoryModule { }
