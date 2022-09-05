import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { AboutUsComponent } from './about-us/about-us.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'characterInfo',component:CharacterInfoComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'alters/:name/:status/:gender/:image',component:CharacterInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
