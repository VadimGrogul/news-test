import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./pages/login/login.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { NewsComponent } from "./pages/news/news.component";
import { AuthGuard } from "./auth.guard";
import { DataResolver } from "./services/data.resolver";


const routes: Routes = [
  {
    path: '', redirectTo: '/profile', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]
  },
  {
    path: 'news', component: NewsComponent, resolve: {newsData: DataResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
