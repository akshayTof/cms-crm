import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { LoginComponent } from './login/login.component';
import { StaticpageComponent } from './staticpage/staticpage.component';
import { ArtistComponent } from './artist/artist.component';
import { PartialsComponent } from './partials/partials.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './partials/footer/footer.component';
import { ArtistcrudComponent } from './artist/artistcrud/artistcrud.component';
import { Resolver } from './resolver';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    StaticpageComponent,
    ArtistComponent,
    PartialsComponent,
    SidebarComponent,
    AboutComponent,
    FooterComponent,
    ArtistcrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [Resolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
