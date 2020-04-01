import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { MenuComponent } from './navigation/menu/menu/menu.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { SidenavComponent } from './navigation/sidenav/sidenav/sidenav.component';
import { AgGridModule } from './ag-grid/ag-grid.module';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        TopMenuComponent,
        MenuComponent,
        CoursesCardListComponent,
        SidenavComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        AppRoutingModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        // AgGrid Tutorial
        AgGridModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
