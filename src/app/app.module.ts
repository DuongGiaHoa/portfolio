import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContainerComponent } from './components/container/container.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillComponent } from './pages/skill/skill.component';
import { WorkComponent } from './pages/work/work.component';
import { TetrisComponent } from './components/tetris/tetris.component';
import { TetrisCoreModule } from 'ngx-tetris';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContainerComponent,
    HomeComponent,
    AboutComponent,
    SkillComponent,
    WorkComponent,
    ContactComponent,
    TetrisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TetrisCoreModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [ MatFormFieldModule, MatInputModule ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
