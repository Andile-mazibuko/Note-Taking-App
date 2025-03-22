import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

const routes: Routes = [{path:'', component: WelcomePageComponent},{path: 'form', component: FormComponent},{path: 'list', component: ListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
