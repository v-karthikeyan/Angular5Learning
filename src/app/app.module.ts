import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Custom modules
import { AppRoutingModule } from './app-routing.module';

// Third party modules
// Kendo UI
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogModule, WindowModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';

// Angular Meterial
import { MatAutocompleteModule ,MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, 
        MatSliderModule, MatSlideToggleModule, MatStepperModule, MatDialogModule, MatButtonModule } from '@angular/material';

// Components
import { AppComponent } from './app.component';
import { KendoUigridComponent } from './components/kendo-uigrid/kendo-uigrid.component';
import { AngularMeterialControlsComponent , DialogOverviewExampleDialog} from './components/angular-meterial-controls/angular-meterial-controls.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

// Services
import { GitHubUserService } from './services/git-hub-user.service';


@NgModule({
  declarations: [
    AppComponent,
    KendoUigridComponent,
    AngularMeterialControlsComponent,
    DialogOverviewExampleDialog,
    PageNotFoundComponent
  ],
  entryComponents: [ DialogOverviewExampleDialog ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,ReactiveFormsModule,
    AppRoutingModule,
    GridModule,DialogModule,WindowModule,ButtonsModule,InputsModule,
    MatAutocompleteModule, MatCheckboxModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, 
    MatSliderModule, MatSlideToggleModule, MatStepperModule, MatDialogModule, MatButtonModule
  ],
  providers: [ GitHubUserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
