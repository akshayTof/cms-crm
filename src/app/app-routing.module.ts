import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './partials//header/header.component';
import { LoginComponent } from './login/login.component';
import { StaticpageComponent } from './staticpage/staticpage.component';
import { ArtistComponent } from './artist/artist.component';
import { PartialsComponent } from './partials/partials.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { ArtistcrudComponent } from './artist/artistcrud/artistcrud.component';
import { Resolver } from './resolver';

const routes: Routes = [
  {
    path: 'artist', component: ArtistComponent,
    children: [
      { path: 'about', component: ArtistComponent },
      { path: 'home', component: ArtistcrudComponent }
    ]
  },
  { path: 'home', component: ArtistcrudComponent },
  { path: 'login', component: LoginComponent },
  { path: 'check', component: PartialsComponent },
  { path: 'staticpage', component: StaticpageComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
