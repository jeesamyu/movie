import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { NoteListComponent } from './pages/note-list/note-list.component';

const routes: Routes = [
  {path:'main' , component:MainComponent , children:[{path:'' , component:NoteListComponent}]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
