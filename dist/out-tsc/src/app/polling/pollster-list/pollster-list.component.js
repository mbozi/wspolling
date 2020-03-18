import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PollsterListComponent = class PollsterListComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        this.service.GetPollsters();
        this.list = this.service.ListPollsters;
    }
};
PollsterListComponent = __decorate([
    Component({
        selector: 'app-pollster-list',
        templateUrl: './pollster-list.component.html',
        styleUrls: ['./pollster-list.component.css']
    })
], PollsterListComponent);
export { PollsterListComponent };
//# sourceMappingURL=pollster-list.component.js.map