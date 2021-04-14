import { Component } from '@angular/core';
import { LoadModulesService } from './load-modules.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lazy-loading-via-service';
  constructor(private loadModuleService: LoadModulesService) {}
  loadModule() {
    console.log('loading module chunk file');
    this.loadModuleService
      .loadJs('customers-customers-module-es2015.js')
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
