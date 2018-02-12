import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { KendoUigridComponent } from './components/kendo-uigrid/kendo-uigrid.component';
import { AngularMeterialControlsComponent } from './components/angular-meterial-controls/angular-meterial-controls.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'kendoGrid', component: KendoUigridComponent },
            { path: '', redirectTo: 'kendoGrid', pathMatch: 'full' },
            { path: 'angularMeterial', component: AngularMeterialControlsComponent },
            { path: '**', component: PageNotFoundComponent }
        ]),
    ],
    providers: [ ],
    exports: [ RouterModule ]
})
export class AppRoutingModule { }