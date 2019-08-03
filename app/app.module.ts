import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './crud/input/input.component';
import { ListComponent } from './crud/list/list.component';
import { ViewComponent } from './crud/view/view.component';
import { EditComponent } from './crud/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ListComponent,
    ViewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
