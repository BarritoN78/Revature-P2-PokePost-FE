import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { FanartComponent } from './components/fanart/fanart.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "pokemon", component: PokemonComponent },
  { path: "fanart", component: GalleryComponent },
  { path: "fanart/:id", component: FanartComponent },
  { path: "user/:id", component: WishlistComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
