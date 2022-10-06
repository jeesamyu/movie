import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { NoteListComponent } from './pages/note-list/note-list.component';
import { MainComponent } from './pages/main/main.component';
import { CardListComponent } from './pages/card-list/card-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HighlightDirective,
    NoteListComponent,
    MainComponent,
    CardListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
