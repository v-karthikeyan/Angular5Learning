// Built in angular modules
import { Component, OnInit } from '@angular/core';

// Custom Services
import { GitHubUserService } from '../../services/git-hub-user.service';

// Kendo UI Components 
import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-kendo-uigrid',
  templateUrl: './kendo-uigrid.component.html',
  styleUrls: ['./kendo-uigrid.component.scss']
})

export class KendoUigridComponent implements OnInit {
  public gridView: GridDataResult;

  // Paging Settings
  public pageSize = 10;
  public skip = 0;

  // Sorting Settings
  public multiple = false;
  public allowUnsort = true;
  public sort: SortDescriptor[] = [{
    field: 'login',
    dir: 'asc'
  }];
  
  private items: Object[];

  // Constructor
  constructor(private gitHubService: GitHubUserService) { 
  }

  // Events
  ngOnInit() {
   this.getGitHubUsers();
  }

  getGitHubUsers() {
    return this.gitHubService.getGitHubUsers()
      .subscribe(
      users => {
        if (users){
          this.items = users;
          this.loadUsers();
        }
        return null;
      }, 
      error => console.log(`Retrieval error: ${error}`)
      )
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadUsers();
  }

  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadUsers();
  }

  // Helper Methods
  private loadUsers(): void {
    this.gridView = {
      data: orderBy(this.items, this.sort).slice(this.skip, this.skip + this.pageSize),
      total: this.items.length
    };
  }
}
