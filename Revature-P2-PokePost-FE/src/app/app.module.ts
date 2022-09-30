import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ArtMiniComponent } from './components/art-mini/art-mini.component';
import { FanartComponent } from './components/fanart/fanart.component';
import { CommentComponent } from './components/comment/comment.component';
import { PokeMiniComponent } from './components/poke-mini/poke-mini.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { ArtFiltersComponent } from './components/art-filters/art-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    GalleryComponent,
    ArtMiniComponent,
    FanartComponent,
    CommentComponent,
    PokeMiniComponent,
    WishlistComponent,
    PokemonComponent,
    ArtFiltersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
