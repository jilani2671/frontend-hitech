import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubCatComponent } from './modules/components/sub-cat/sub-cat.component';
import { AboutComponent } from './modules/components/about/about.component';
import { MainComponent } from './modules/components/main/main.component';
import { ContactusComponent } from './modules/components/contactus/contactus.component';
import { GetquoteComponent } from './modules/components/getquote/getquote.component';


const routes: Routes = [
  {path:'',component: MainComponent},
  {path:'subcat',component: SubCatComponent},
  {path:'about',component: AboutComponent},
  {path:'contactus',component: ContactusComponent},
  {path:'getquote',component: GetquoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
