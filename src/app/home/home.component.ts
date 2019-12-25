import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../_services/search.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    pager = {};
    pageOfItems = [];
    totalPages: Number;
    pageSize: Number;
    p: number = 1;
    filterForm: FormGroup;
    paramsInput: any;
    date = new Date();
    today = this.date.getFullYear() + '-' + (this.date.getMonth() + 1) + '-' + this.date.getDate();

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute,
        private _searchService: SearchService,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.filterForm = this.formBuilder.group({
            pageSize: 5,
            order: 'desc',
            sort: 'activity',
            tagged: '',
            q: '',
            title: '',
            body: '',
            fromdate: this.today,
            todate: this.today,
        });
        this.paramsInput = this.filterForm.value;
        this.paramsInput['page'] = 1;
        this.paramsInput['fromdate'] = this.getTimeStampFrom(this.today);
        this.paramsInput['todate'] = this.getTimeStampTo(this.today);
        this.route.queryParams.subscribe(x => this.loadPage());
    }

    private loadPage() {
        // get page of items from api
        this._searchService.getSearchDetails(this.paramsInput).subscribe(data => {
            this.p = data.page;
            this.pageSize = data.page_size;
            this.pageOfItems = data.items;
            this.totalPages = Number((data.total / data.page_size).toFixed())
        }, errors => {
            alert(errors.error.detail);
        });
    }

    pageChanged(event) {
        this.paramsInput['page'] = event;
        this.paramsInput['fromdate'] = this.getTimeStampFrom(this.filterForm.value['fromdate']);
        this.paramsInput['todate'] = this.getTimeStampTo(this.filterForm.value['todate']);
        this.loadPage();
    }

    getTimeStampFrom(date) {
        if (!isNaN(Number(date))) {
            return date;
        } else {
            date = new Date(date)
            let timeStamp = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
            return Math.floor(new Date(timeStamp).getTime()) / 1000;
        }

    }

    getTimeStampTo(date) {
        if (!isNaN(Number(date))) {
            return date;
        } else {
            date = new Date(date)
            let timeStamp = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() + ' ' + 23 + ":" + 59 + ":" + 59;
            return Math.floor(new Date(timeStamp).getTime()) / 1000;
        }
    }

    onSubmit() {
        if (this.filterForm.invalid) {
            return;
        }
        // display form values on success
        this.paramsInput = this.filterForm.value;
        this.paramsInput['fromdate'] = this.getTimeStampFrom(this.filterForm.value['fromdate']);
        this.paramsInput['todate'] = this.getTimeStampTo(this.filterForm.value['todate']);
        this.loadPage();
    }

    onReset() {
        this.ngOnInit();
    }
}
