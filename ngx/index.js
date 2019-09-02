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
    MediaPlayerState[MediaPlayerState["start"] = 0] = "start";
    MediaPlayerState[MediaPlayerState["play"] = 1] = "play";
    MediaPlayerState[MediaPlayerState["pause"] = 2] = "pause";
    MediaPlayerState[MediaPlayerState["stop"] = 3] = "stop";
    MediaPlayerState[MediaPlayerState["close"] = 4] = "close";
})(MediaPlayerState || (MediaPlayerState = {}));
var MediaStreamingService = /** @class */ (function (_super) {
    __extends(MediaStreamingService, _super);
    function MediaStreamingService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaStreamingService.prototype.start = function (options, successCallback, errorCallback) { return cordova(this, "start", { "sync": true }, arguments); };
    MediaStreamingService.prototype.play = function (options, successCallback, errorCallback) { return cordova(this, "play", { "sync": true }, arguments); };
    MediaStreamingService.prototype.pause = function (successCallback, errorCallback) { return cordova(this, "pause", { "sync": true }, arguments); };
    MediaStreamingService.prototype.stop = function (successCallback, errorCallback) { return cordova(this, "stop", { "sync": true }, arguments); };
    MediaStreamingService.prototype.close = function (successCallback, errorCallback) { return cordova(this, "close", { "sync": true }, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21lZGlhLXN0cmVhbWluZy1zZXJ2aWNlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBa0J4RSxNQUFNLENBQU4sSUFBWSxnQkFFWDtBQUZELFdBQVksZ0JBQWdCO0lBQzFCLHlEQUFLLENBQUE7SUFBRSx1REFBSSxDQUFBO0lBQUUseURBQUssQ0FBQTtJQUFFLHVEQUFJLENBQUE7SUFBRSx5REFBSyxDQUFBO0FBQ2pDLENBQUMsRUFGVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBRTNCOztJQVUwQyx5Q0FBaUI7Ozs7SUFHMUQscUNBQUssYUFBQyxPQUEyQixFQUFFLGVBQTBCLEVBQUUsYUFBd0I7SUFHdkYsb0NBQUksYUFBQyxPQUEyQixFQUFFLGVBQTBCLEVBQUUsYUFBd0I7SUFHdEYscUNBQUssYUFBQyxlQUEwQixFQUFFLGFBQXdCO0lBRzFELG9DQUFJLGFBQUMsZUFBMEIsRUFBRSxhQUF3QjtJQUd6RCxxQ0FBSyxhQUFDLGVBQTBCLEVBQUUsYUFBd0I7Ozs7OztJQWYvQyxxQkFBcUI7UUFEakMsVUFBVSxFQUFFO09BQ0EscUJBQXFCO2dDQS9CbEM7RUErQjJDLGlCQUFpQjtTQUEvQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYVN0cmVhbSB7XG4gIHVyaTogc3RyaW5nO1xuICBpZGVudGlmaWVyOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGNvdmVyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFTdHJlYW1SZXF1ZXN0IHtcbiAgY2hhbm5lbElkOiBzdHJpbmc7XG4gIGNoYW5uZWxOYW1lOiBzdHJpbmc7XG4gIG5vdGlmaWNhdGlvbklkOiBzdHJpbmc7XG4gIG1lZGlhU3RyZWFtczogTWVkaWFTdHJlYW1bXSxcbiAgc2VsZWN0ZWRJbmRleDogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBNZWRpYVBsYXllclN0YXRlIHtcbiAgc3RhcnQsIHBsYXksIHBhdXNlLCBzdG9wLCBjbG9zZVxufVxuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ01lZGlhU3RyZWFtaW5nU2VydmljZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW1lZGlhLXN0cmVhbWluZy1zZXJ2aWNlJyxcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLm1lZGlhU3RyZWFtaW5nU2VydmljZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcGF1bGtqb3NlcGgvY29yZG92YS1wbHVnaW4tbWVkaWEtc3RyZWFtaW5nLXNlcnZpY2UnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lZGlhU3RyZWFtaW5nU2VydmljZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc3RhcnQob3B0aW9uczogTWVkaWFTdHJlYW1SZXF1ZXN0LCBzdWNjZXNzQ2FsbGJhY2s/OiBGdW5jdGlvbiwgZXJyb3JDYWxsYmFjaz86IEZ1bmN0aW9uKTogdm9pZCB7IH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcGxheShvcHRpb25zOiBNZWRpYVN0cmVhbVJlcXVlc3QsIHN1Y2Nlc3NDYWxsYmFjaz86IEZ1bmN0aW9uLCBlcnJvckNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHsgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBwYXVzZShzdWNjZXNzQ2FsbGJhY2s/OiBGdW5jdGlvbiwgZXJyb3JDYWxsYmFjaz86IEZ1bmN0aW9uKTogdm9pZCB7IH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc3RvcChzdWNjZXNzQ2FsbGJhY2s/OiBGdW5jdGlvbiwgZXJyb3JDYWxsYmFjaz86IEZ1bmN0aW9uKTogdm9pZCB7IH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY2xvc2Uoc3VjY2Vzc0NhbGxiYWNrPzogRnVuY3Rpb24sIGVycm9yQ2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQgeyB9XG5cbn1cbiJdfQ==