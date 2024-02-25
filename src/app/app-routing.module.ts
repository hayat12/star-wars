import { NgModule } from '@angular/core';
import { NoPreloading, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'sw',
    children: [
      {
        path: "movies",
        loadChildren: ()=>import('src/app/movies/movies.module').then((m)=>m.MoviesModule),
      },
      {
        path: "**",
        redirectTo: '/movies'
      }
    ]
  },
  {
    path: "**",
    redirectTo: 'sw/movies'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
