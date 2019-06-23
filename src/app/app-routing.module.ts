import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimsCreateComponent } from './claims-create/claims-create.component';
import { ClaimsListComponent } from './claims-list/claims-list.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {GoogleMapComponent} from './google-map/google-map.component';
import { RegistrationComponent } from './registration/registration.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import { AdminGuard } from './admin.guard';
import {FacebookComponent} from './facebook/facebook.component';
const routes: Routes = [
 // { path: "", redirectTo: "/login", pathMatch: "full" },

  { path: 'create-claims', component: ClaimsCreateComponent },
  { path: 'dashboard', component: FacebookComponent },
  {path:'home',component:  HomeComponent },
  {path:'google-map',component: GoogleMapComponent },
  {path:'home',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
 // {path:'Users',component:UsersComponent,canActivate: [AuthGuard,AdminGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'claims-list', component: ClaimsListComponent , canActivate: [AuthGuard] //,
  
 // children: [
   // {
     //   path: 'update-claims',
       // component: ClaimsUpdateComponent
  //  },
//]



} ,
{
  path: 'vistors',
  loadChildren: './vistors/vistors.module#VistorsModule'
},
{
  path: 'visitore/:usrid',
  loadChildren: './visitore/visitore.module#VisitoreModule'
},
{
  path: 'visitora',
  loadChildren: './visitora/visitora.module#VisitoraModule'
},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'

   
},
{
  path: 'claims',
  loadChildren: './claims/claims.module#ClaimsModule'
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuard,
    AdminGuard
  ],
})
export class AppRoutingModule { }
