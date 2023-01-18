import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path: '', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
{ path: 'header', loadChildren: () => import('./components/header/header.module').then(m => m.HeaderModule) }, 
{ path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
{ path: 'blogs', loadChildren: () => import('./components/blogs/blogs.module').then(m => m.BlogsModule) },
{ path: 'skills', loadChildren: () => import('./components/skills/skills.module').then(m => m.SkillsModule) },
{ path: 'contact', loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
