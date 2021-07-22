import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSliderModule } from '@angular/material/slider';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VirtualScrollComponent } from './cdk/virtual-scroll/virtual-scroll/virtual-scroll.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SelectionListOptionComponent } from './components/mat-selection-list/selection-list-option/selection-list-option.component';
import { DragDropComponent } from './components/table/drag-drop/drag-drop.component';
import { MaterialDashboardComponent } from './schematic-examples/material-dashboard/material-dashboard.component';
import { MaterialTableComponent } from './schematic-examples/material-table/material-table.component';
@NgModule({
  declarations: [
    AppComponent,
    DragDropComponent,
    DialogComponent,
    MaterialDashboardComponent,
    MaterialTableComponent,
    VirtualScrollComponent,
    SelectionListOptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatTableModule,
    DragDropModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    LayoutModule,
    MatPaginatorModule,
    MatSortModule,
    ScrollingModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
