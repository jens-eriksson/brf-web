import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './pages/home/home';


const routes: Routes = [
  { path: 'sign-in', component: SignInPage },
  { path: 'home', component: HomePage, canActivate: [AccessGuardProvider] },
  { path: 'kontakt', component: AboutPage, canActivate: [AccessGuardProvider] },
  { path: 'enhet/:id', component: UnitPage, canActivate: [AccessGuardProvider] },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
