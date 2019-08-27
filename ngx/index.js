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
    MediaStreamingService.prototype.play = function (selectedIndex, successCallback, errorCallback) { return cordova(this, "play", {}, arguments); };
    MediaStreamingService.prototype.pause = function (successCallback, errorCallback) { return cordova(this, "pause", {}, arguments); };
    MediaStreamingService.prototype.stop = function (successCallback, errorCallback) { return cordova(this, "stop", {}, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21lZGlhLXN0cmVhbWluZy1zZXJ2aWNlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBa0J4RSxNQUFNLENBQU4sSUFBWSxnQkFFWDtBQUZELFdBQVksZ0JBQWdCO0lBQ3hCLHVEQUFJLENBQUE7SUFBRSx5REFBSyxDQUFBO0lBQUUsdURBQUksQ0FBQTtJQUFFLHlEQUFLLENBQUE7QUFDNUIsQ0FBQyxFQUZXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFFM0I7O0lBVTBDLHlDQUFpQjs7OztJQUcxRCxxQ0FBSyxhQUFDLE9BQTJCLEVBQUUsZUFBMEIsRUFBRSxhQUF3QjtJQUd2RixvQ0FBSSxhQUFDLGFBQXFCLEVBQUUsZUFBMEIsRUFBRSxhQUF3QjtJQUdoRixxQ0FBSyxhQUFDLGVBQTBCLEVBQUUsYUFBd0I7SUFHMUQsb0NBQUksYUFBQyxlQUEwQixFQUFFLGFBQXdCOzs7Ozs7SUFaOUMscUJBQXFCO1FBRGpDLFVBQVUsRUFBRTtPQUNBLHFCQUFxQjtnQ0EvQmxDO0VBK0IyQyxpQkFBaUI7U0FBL0MscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFTdHJlYW0ge1xuICAgIHVyaTogc3RyaW5nO1xuICAgIGlkZW50aWZpZXI6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgY292ZXI6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYVN0cmVhbVJlcXVlc3Qge1xuICBjaGFubmVsSWQ6IHN0cmluZztcbiAgY2hhbm5lbE5hbWU6IHN0cmluZztcbiAgbm90aWZpY2F0aW9uSWQ6IHN0cmluZztcbiAgbWVkaWFTdHJlYW1zOiBNZWRpYVN0cmVhbVtdLFxuICBzZWxlY3RlZEluZGV4OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIE1lZGlhUGxheWVyU3RhdGUge1xuICAgIHBsYXksIHBhdXNlLCBzdG9wLCBjbG9zZVxufVxuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiAnTWVkaWFTdHJlYW1pbmdTZXJ2aWNlJyxcbiAgICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1tZWRpYS1zdHJlYW1pbmctc2VydmljZScsXG4gICAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLm1lZGlhU3RyZWFtaW5nU2VydmljZScsXG4gICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wYXVsa2pvc2VwaC9jb3Jkb3ZhLXBsdWdpbi1tZWRpYS1zdHJlYW1pbmctc2VydmljZScsXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZWRpYVN0cmVhbWluZ1NlcnZpY2UgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgQENvcmRvdmEoKVxuICBzdGFydChvcHRpb25zOiBNZWRpYVN0cmVhbVJlcXVlc3QsIHN1Y2Nlc3NDYWxsYmFjaz86IEZ1bmN0aW9uLCBlcnJvckNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHt9XG5cbiAgQENvcmRvdmEoKVxuICBwbGF5KHNlbGVjdGVkSW5kZXg6IHN0cmluZywgc3VjY2Vzc0NhbGxiYWNrPzogRnVuY3Rpb24sIGVycm9yQ2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge31cblxuICBAQ29yZG92YSgpXG4gIHBhdXNlKHN1Y2Nlc3NDYWxsYmFjaz86IEZ1bmN0aW9uLCBlcnJvckNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHt9XG5cbiAgQENvcmRvdmEoKVxuICBzdG9wKHN1Y2Nlc3NDYWxsYmFjaz86IEZ1bmN0aW9uLCBlcnJvckNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHt9XG5cbn1cbiJdfQ==