import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {}
  
  public opened = false;
    public dataSaved = false;

    public close() {
      this.opened = false;
    }

    public open() {
      this.opened = true;
    }

    public login() {
        this.dataSaved = true;
        this.close();
    }
}
