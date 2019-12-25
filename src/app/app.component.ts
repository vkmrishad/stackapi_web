import { Component } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
    selector: 'app',
    templateUrl: './app.component.html'
})
export class AppComponent {
    title = 'client';

    constructor(private ngxService: NgxUiLoaderService) { }

    ngOnInit() {
        this.ngxService.start();
    }

    ngAfterViewInit() {
        this.ngxService.stop();
    }

}