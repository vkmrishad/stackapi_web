import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderConfig, NgxUiLoaderRouterModule } from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
    "bgsColor": "#007bff",
    "bgsOpacity": 0.5,
    "bgsPosition": "center-center",
    "bgsSize": 60,
    "bgsType": "ball-spin-clockwise",
    "blur": 10,
    "fgsColor": "#007bff",
    "fgsPosition": "center-center",
    "fgsSize": 60,
    "fgsType": "ball-spin-clockwise",
    "gap": 26,
    "logoPosition": "center-center",
    "logoSize": 120,
    "logoUrl": "",
    "masterLoaderId": "master",
    "overlayBorderRadius": "0",
    "overlayColor": "rgba(255,255,255,0.56)",
    "pbColor": "#007bff",
    "pbDirection": "ltr",
    "pbThickness": 5,
    "hasProgressBar": true,
    "text": "",
    "textColor": "#007bff",
    "textPosition": "center-center",
}


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        appRoutingModule,
        NgxPaginationModule,
        ReactiveFormsModule,
        NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
        NgxUiLoaderRouterModule,
        NgxUiLoaderHttpModule.forRoot({showForeground:true})
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }