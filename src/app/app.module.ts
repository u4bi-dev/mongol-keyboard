import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RankViewComponent } from './main/rank-view/rank-view.component';
import { StatsViewComponent } from './main/stats-view/stats-view.component';
import { LsComponent } from './main/ls/ls.component';
import { GameMenuComponent } from './game-menu/game-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RankViewComponent,
    StatsViewComponent,
    LsComponent,
    GameMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
