import { ViewComponent } from './crud/view/view.component';
import { ListComponent } from './crud/list/list.component';
import { InputComponent } from './crud/input/input.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './crud/edit/edit.component';


const routes: Routes = [
  {path:'',component:InputComponent},
  {path:'list',component:ListComponent},
  {path:'view',component:ViewComponent},
  {path:'edit',component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
