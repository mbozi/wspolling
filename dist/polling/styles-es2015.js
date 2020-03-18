(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n/*------------------VARIABLES*/\n/*------------------STYLESHEETS*/\nbody {\n    margin: 0;\n    font-family: \"Arial\";\n    font-size: 0.875rem;\n    font-weight: 400;\n    text-align: left;\n    background-color: rgba(240, 230, 190, 1.0);\n    /*background-image:var(--site-background-image);*/\n    line-height: 1.7;\n    color: rgba(0,0,0,.7);\n    box-sizing: border-box;\n}\na {\n    text-decoration:none;\n    font-weight:600;\n    color:inherit;\n}\na:hover {\n        color: white;\n    }\n.nbar-brand {\n    color: rgba(240, 230, 190, 1.0);\n    text-decoration: none;\n    background-color: transparent;\n}\n.nbar-brand:hover {\n    color: white;\n}\n.nbar-link {\n    color: rgba(240, 230, 190, 1.0);\n    padding-left: 15px;\n    font-size: 12px;\n    line-height: 22px;\n    font-weight: 500;\n    text-transform: uppercase;\n    text-decoration: none;\n    cursor:pointer;\n}\n.nbar-link:hover {\n    color: white;\n}\n.nbar {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    background-color: #d08080;\n    padding: .5rem 1rem;\n    border-bottom-left-radius:15px;\n    border-bottom-right-radius:15px;\n    height:42px;\n}\n.nbar-collapse {\n    flex-basis: 100%;\n    flex-grow: 1;\n    align-items: center;\n    box-sizing: border-box;\n    display:none;\n}\n.pagetitle {\n    margin-top: 64px;\n    margin-bottom: 1em;\n}\n@media (max-width: 799.98px) {\n    .nbar-items {\n    display: flex;\n    flex-direction: column;\n    padding-left: 0;\n    margin-bottom: 0;\n    list-style: none;\n    flex-wrap: wrap;\n    background-color: #d08080;\n}\n    .nbar-toggler{\n        display:block;\n    }\n\n}\n@media (min-width: 800px) {\n    .coll {\n        flex-flow: row nowrap;\n        justify-content: flex-start;\n        border-radius: 15px;\n    }\n\n    .nbar-collapse {\n        display: flex !important;\n        flex-basis: auto;\n    }\n\n    .nbar-items {\n        display: flex;\n        flex-direction: row;\n        padding-left: 0;\n        margin-bottom: 0;\n        list-style: none;\n        flex-wrap: wrap;\n        box-sizing: border-box;\n        margin-left: auto !important;\n        margin-top:auto;\n    }\n\n    .nbar-link {\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    }\n\n    .nbar-toggler{\n        display:none;\n    }\n\n}\n.nbar-container {\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    margin-right: auto;\n    margin-left: auto;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-between;\n    -webkit-box-pack: justify;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.fixed-top {\n    position: fixed;\n    top: 0;\n    right: 0;\n    left: 0;\n    z-index: 1030;\n}\n.sr-only {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n}\n.navbar-toggler {\n    color: rgba(0,0,0,.5);\n    border-color: rgba(0,0,0,.1);\n    padding: 0.25rem 0.75rem;\n    font-size: 1.09375rem;\n    line-height: 1;\n    background-color: transparent;\n    border: 1px solid transparent;\n    border-radius: 0.25rem;\n}\nbutton, [type=\"button\"], [type=\"reset\"], [type=\"submit\"] {\n    -webkit-appearance: button;\n}\n.shadow {\n    box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.55) !important;\n}\n.nbar-brand {\n    display: inline-block;\n    padding-top: 0.3359375rem;\n    padding-bottom: 0.3359375rem;\n    margin-right: 1rem;\n    font-size: 1.09375rem;\n    line-height: inherit;\n    white-space: nowrap;\n    font-size: 14pt;\n}\n/*.nbar-item {\n    background-color: white;\n}*/\n.nbar-toggler {\n    padding: 0.25rem 0.75rem;\n    font-size: 1.09375rem;\n    line-height: 1;\n    background-color: transparent;\n    border: 1px solid transparent;\n    border-radius: 0.25rem;\n    color: rgba(0,0,0,.5);\n    border-color: rgba(0,0,0,0.1);\n}\n.collapse:matches(.show) {\n    display: block;\n}\n.collapse:not(.show) {\n    display: block;\n}\n.footr {\n    padding-top: 0px;\n    position: fixed;\n    bottom: 0;\n    z-index: 9;\n    width: 100%;\n    box-shadow:  0 -0.5rem 1rem rgba(0,0,0,0.55) !important;;\n    border-radius: 15px 15px 0px 0px;\n    background-color: #d08080;\n}\n.fcentre a {\n    text-align: center;\n    display: block;\n    width: 100%;\n    color: rgba(240, 230, 190, 1.0);\n    text-decoration: none;\n}\n.fcentre a:hover {\n    color: white;\n}\n.pHeader {\n    font-weight: 500;\n    font-size: 3em;\n    font-family:  Arial, serif;\n    letter-spacing: 0em;\n    line-height: 1.6em;\n    text-align: center;\n    text-shadow: 2px 2px 3px rgba(0,0,0,0.4);\n    color: #336600;\n}\n.pDesc {\n    font-size: 1.3em;\n    text-align: center;\n    text-shadow: 1px 1px 1px rgba(0,0,0,0.2);\n    color: #336600;\n}\n.fas.fa-feather {\n    font-size: 36px;\n}\n.bpContainer {\n    margin-bottom: 100px;\n    max-width: 1024px;\n    margin-left: auto;\n    margin-right: auto;\n}\npre {\n    display: block;\n    font-size:1.1em;\n    color: #202020;\n    background-color: #DDDDDD;\n    border-radius: 15px;\n    padding: 10px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,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c0I7SUFDdEIscUJBQXFCO0lBQ3JCLDZCQUE2QjtBQUNqQztBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCx1REFBdUQ7SUFDdkQsZ0NBQWdDO0lBQ2hDLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsK0JBQStCO0lBQy9CLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLGNBQWM7QUFDbEI7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuLyotLS0tLS0tLS0tLS0tLS0tLS1WQVJJQUJMRVMqL1xuXG4vKi0tLS0tLS0tLS0tLS0tLS0tLVNUWUxFU0hFRVRTKi9cbmJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyMzAsIDE5MCwgMS4wKTtcbiAgICAvKmJhY2tncm91bmQtaW1hZ2U6dmFyKC0tc2l0ZS1iYWNrZ3JvdW5kLWltYWdlKTsqL1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEge1xuICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbiAgICBjb2xvcjppbmhlcml0O1xufVxuXG4gICAgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbi5uYmFyLWJyYW5kIHtcbiAgICBjb2xvcjogcmdiYSgyNDAsIDIzMCwgMTkwLCAxLjApO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLm5iYXItYnJhbmQ6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5iYXItbGluayB7XG4gICAgY29sb3I6IHJnYmEoMjQwLCAyMzAsIDE5MCwgMS4wKTtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOnBvaW50ZXI7XG59XG5cbi5uYmFyLWxpbms6aG92ZXIge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5iYXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDA4MDgwO1xuICAgIHBhZGRpbmc6IC41cmVtIDFyZW07XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czoxNXB4O1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjE1cHg7XG4gICAgaGVpZ2h0OjQycHg7XG59XG5cbi5uYmFyLWNvbGxhcHNlIHtcbiAgICBmbGV4LWJhc2lzOiAxMDAlO1xuICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTpub25lO1xufVxuXG4ucGFnZXRpdGxlIHtcbiAgICBtYXJnaW4tdG9wOiA2NHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc5OS45OHB4KSB7XG4gICAgLm5iYXItaXRlbXMge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QwODA4MDtcbn1cbiAgICAubmJhci10b2dnbGVye1xuICAgICAgICBkaXNwbGF5OmJsb2NrO1xuICAgIH1cblxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgICAuY29sbCB7XG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogaG9yaXpvbnRhbDtcbiAgICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAgIC1tcy1mbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAgLXdlYmtpdC1ib3gtcGFjazogc3RhcnQ7XG4gICAgICAgIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgfVxuXG4gICAgLm5iYXItY29sbGFwc2Uge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveCAhaW1wb3J0YW50O1xuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZsZXgtYmFzaXM6IGF1dG87XG4gICAgfVxuXG4gICAgLm5iYXItaXRlbXMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IGhvcml6b250YWw7XG4gICAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6YXV0bztcbiAgICB9XG5cbiAgICAubmJhci1saW5rIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVyZW07XG4gICAgfVxuXG4gICAgLm5iYXItdG9nZ2xlcntcbiAgICAgICAgZGlzcGxheTpub25lO1xuICAgIH1cblxufVxuXG5cbi5uYmFyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLXdlYmtpdC1ib3gtcGFjazoganVzdGlmeTtcbiAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuLmZpeGVkLXRvcCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHotaW5kZXg6IDEwMzA7XG59XG5cbi5zci1vbmx5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDFweDtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBib3JkZXI6IDA7XG59XG5cbi5uYXZiYXItdG9nZ2xlciB7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwuMSk7XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4wOTM3NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG5idXR0b24sIFt0eXBlPVwiYnV0dG9uXCJdLCBbdHlwZT1cInJlc2V0XCJdLCBbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbi5zaGFkb3cge1xuICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gcmdiYSgwLDAsMCwwLjU1KSAhaW1wb3J0YW50O1xufVxuXG4ubmJhci1icmFuZCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBhZGRpbmctdG9wOiAwLjMzNTkzNzVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDAuMzM1OTM3NXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgZm9udC1zaXplOiAxLjA5Mzc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZm9udC1zaXplOiAxNHB0O1xufVxuXG4vKi5uYmFyLWl0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSovXG5cblxuLm5iYXItdG9nZ2xlciB7XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4wOTM3NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC41KTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcbn1cblxuLmNvbGxhcHNlOm1hdGNoZXMoLnNob3cpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNvbGxhcHNlOm5vdCguc2hvdykge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9vdHIge1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICB6LWluZGV4OiA5O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6ICAwIC0wLjVyZW0gMXJlbSByZ2JhKDAsMCwwLDAuNTUpICFpbXBvcnRhbnQ7O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwcHggMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMDgwODA7XG59XG5cbi5mY2VudHJlIGEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogcmdiYSgyNDAsIDIzMCwgMTkwLCAxLjApO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZjZW50cmUgYTpob3ZlciB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cbi5wSGVhZGVyIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIGZvbnQtZmFtaWx5OiAgQXJpYWwsIHNlcmlmO1xuICAgIGxldHRlci1zcGFjaW5nOiAwZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggcmdiYSgwLDAsMCwwLjQpO1xuICAgIGNvbG9yOiAjMzM2NjAwO1xufVxuXG5cbi5wRGVzYyB7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICBjb2xvcjogIzMzNjYwMDtcbn1cblxuLmZhcy5mYS1mZWF0aGVyIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG59XG5cbi5icENvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5wcmUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZToxLjFlbTtcbiAgICBjb2xvcjogIzIwMjAyMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREREREO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cblxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\ANGULAR\polling\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map