import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Inject } from '@angular/core';

import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { Product } from '../../models/product';
import { EditService } from '../../services/edit.service';

import { map } from 'rxjs/operators/map';

@Component({
  selector: 'app-kendo-uigrid',
  templateUrl: './kendo-uigrid.component.html',
  styleUrls: ['./kendo-uigrid.component.scss']
})

export class KendoUigridComponent implements OnInit {
  public view: Observable<GridDataResult>;
    public gridState: State = {
      sort: [],
      skip: 0,
      take: 10,
      // Initial filter descriptor
      // filter: {
      //   logic: 'and',
      //   filters: [{ field: 'UnitPrice', operator: 'contains', value: '2' }]
      // }

    };

    public editDataItem: Product;
    public isNew: boolean;
    private editService: EditService;

    constructor(@Inject(EditService) editServiceFactory: any) {
        this.editService = editServiceFactory();
    }

    public ngOnInit(): void {
        this.view = this.editService.pipe(map(data => process(data, this.gridState)));

        this.editService.read();
    }

    public onStateChange(state: State) {
        this.gridState = state;

        this.editService.read();
    }

    public addHandler() {
        this.editDataItem = new Product();
        this.isNew = true;
    }

    public editHandler({dataItem}) {
        this.editDataItem = dataItem;
        this.isNew = false;
    }

    public cancelHandler() {
        this.editDataItem = undefined;
    }

    public saveHandler(product: Product) {
        this.editService.save(product, this.isNew);

        this.editDataItem = undefined;
    }

    public removeHandler({dataItem}) {
        this.editService.remove(dataItem);
    }
}
