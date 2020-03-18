import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let PollingService = class PollingService {
    constructor(http) {
        this.http = http;
        this.rootURL = "http://api.worksync.net/api";
    }
    GetPollsters() {
        this.http.get(this.rootURL + '/pollster')
            .toPromise().then(res => this.ListPollsters = res);
    }
};
PollingService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], PollingService);
export { PollingService };
//# sourceMappingURL=polling.service.js.map