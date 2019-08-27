var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova } from '@ionic-native/core';
export var MediaPlayerState;
(function (MediaPlayerState) {
    MediaPlayerState[MediaPlayerState["play"] = 0] = "play";
    MediaPlayerState[MediaPlayerState["pause"] = 1] = "pause";
    MediaPlayerState[MediaPlayerState["stop"] = 2] = "stop";
    MediaPlayerState[MediaPlayerState["close"] = 3] = "close";
})(MediaPlayerState || (MediaPlayerState = {}));
var MediaStreamingService = /** @class */ (function (_super) {
    __extends(MediaStreamingService, _super);
    function MediaStreamingService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaStreamingService.prototype.start = function (options, successCallback, errorCallback) { return cordova(this, "start", {}, arguments); };
    MediaStreamingService.prototype.play = function (options, successCallback, errorCallback) { return cordova(this, "play", {}, arguments); };
    MediaStreamingService.prototype.pause = function (options, successCallback, errorCallback) { return cordova(this, "pause", {}, arguments); };
    MediaStreamingService.prototype.stop = function (options, successCallback, errorCallback) { return cordova(this, "stop", {}, arguments); };
    MediaStreamingService.pluginName = "MediaStreamingService";
    MediaStreamingService.plugin = "cordova-plugin-media-streaming-service";
    MediaStreamingService.pluginRef = "cordova.plugins.mediaStreamingService";
    MediaStreamingService.repo = "https://github.com/paulkjoseph/cordova-plugin-media-streaming-service";
    MediaStreamingService.platforms = ["Android"];
    MediaStreamingService = __decorate([
        Injectable()
    ], MediaStreamingService);
    return MediaStreamingService;
}(IonicNativePlugin));
export { MediaStreamingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21lZGlhLXN0cmVhbWluZy1zZXJ2aWNlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBa0J4RSxNQUFNLENBQU4sSUFBWSxnQkFFWDtBQUZELFdBQVksZ0JBQWdCO0lBQ3hCLHVEQUFJLENBQUE7SUFBRSx5REFBSyxDQUFBO0lBQUUsdURBQUksQ0FBQTtJQUFFLHlEQUFLLENBQUE7QUFDNUIsQ0FBQyxFQUZXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFFM0I7O0lBVTBDLHlDQUFpQjs7OztJQUcxRCxxQ0FBSyxhQUFDLE9BQTJCLEVBQUUsZUFBMEIsRUFBRSxhQUF3QjtJQUd2RixvQ0FBSSxhQUFDLE9BQTJCLEVBQUUsZUFBMEIsRUFBRSxhQUF3QjtJQUd0RixxQ0FBSyxhQUFDLE9BQTJCLEVBQUUsZUFBMEIsRUFBRSxhQUF3QjtJQUd2RixvQ0FBSSxhQUFDLE9BQTJCLEVBQUUsZUFBMEIsRUFBRSxhQUF3Qjs7Ozs7O0lBWjNFLHFCQUFxQjtRQURqQyxVQUFVLEVBQUU7T0FDQSxxQkFBcUI7Z0NBL0JsQztFQStCMkMsaUJBQWlCO1NBQS9DLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhU3RyZWFtIHtcbiAgICB1cmk6IHN0cmluZztcbiAgICBpZGVudGlmaWVyOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGNvdmVyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFTdHJlYW1SZXF1ZXN0IHtcbiAgY2hhbm5lbElkOiBzdHJpbmc7XG4gIGNoYW5uZWxOYW1lOiBzdHJpbmc7XG4gIG5vdGlmaWNhdGlvbklkOiBzdHJpbmc7XG4gIG1lZGlhU3RyZWFtczogTWVkaWFTdHJlYW1bXSxcbiAgc2VsZWN0ZWRJbmRleDogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBNZWRpYVBsYXllclN0YXRlIHtcbiAgICBwbGF5LCBwYXVzZSwgc3RvcCwgY2xvc2Vcbn1cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogJ01lZGlhU3RyZWFtaW5nU2VydmljZScsXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbWVkaWEtc3RyZWFtaW5nLXNlcnZpY2UnLFxuICAgIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5tZWRpYVN0cmVhbWluZ1NlcnZpY2UnLFxuICAgIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcGF1bGtqb3NlcGgvY29yZG92YS1wbHVnaW4tbWVkaWEtc3RyZWFtaW5nLXNlcnZpY2UnLFxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVkaWFTdHJlYW1pbmdTZXJ2aWNlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnQob3B0aW9uczogTWVkaWFTdHJlYW1SZXF1ZXN0LCBzdWNjZXNzQ2FsbGJhY2s/OiBGdW5jdGlvbiwgZXJyb3JDYWxsYmFjaz86IEZ1bmN0aW9uKTogdm9pZCB7fVxuXG4gIEBDb3Jkb3ZhKClcbiAgcGxheShvcHRpb25zOiBNZWRpYVN0cmVhbVJlcXVlc3QsIHN1Y2Nlc3NDYWxsYmFjaz86IEZ1bmN0aW9uLCBlcnJvckNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHt9XG5cbiAgQENvcmRvdmEoKVxuICBwYXVzZShvcHRpb25zOiBNZWRpYVN0cmVhbVJlcXVlc3QsIHN1Y2Nlc3NDYWxsYmFjaz86IEZ1bmN0aW9uLCBlcnJvckNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHt9XG5cbiAgQENvcmRvdmEoKVxuICBzdG9wKG9wdGlvbnM6IE1lZGlhU3RyZWFtUmVxdWVzdCwgc3VjY2Vzc0NhbGxiYWNrPzogRnVuY3Rpb24sIGVycm9yQ2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge31cblxufVxuIl19