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
import { IonicNativePlugin, cordova } from '@ionic-native/core';
export var MediaPlayerState;
(function (MediaPlayerState) {
    MediaPlayerState[MediaPlayerState["play"] = 0] = "play";
    MediaPlayerState[MediaPlayerState["pause"] = 1] = "pause";
    MediaPlayerState[MediaPlayerState["stop"] = 2] = "stop";
    MediaPlayerState[MediaPlayerState["close"] = 3] = "close";
})(MediaPlayerState || (MediaPlayerState = {}));
var MediaStreamingServiceOriginal = /** @class */ (function (_super) {
    __extends(MediaStreamingServiceOriginal, _super);
    function MediaStreamingServiceOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaStreamingServiceOriginal.prototype.start = function (options, successCallback, errorCallback) { return cordova(this, "start", {}, arguments); };
    MediaStreamingServiceOriginal.prototype.play = function (selectedIndex, successCallback, errorCallback) { return cordova(this, "play", {}, arguments); };
    MediaStreamingServiceOriginal.prototype.pause = function (successCallback, errorCallback) { return cordova(this, "pause", {}, arguments); };
    MediaStreamingServiceOriginal.prototype.stop = function (successCallback, errorCallback) { return cordova(this, "stop", {}, arguments); };
    MediaStreamingServiceOriginal.pluginName = "MediaStreamingService";
    MediaStreamingServiceOriginal.plugin = "cordova-plugin-media-streaming-service";
    MediaStreamingServiceOriginal.pluginRef = "cordova.plugins.mediaStreamingService";
    MediaStreamingServiceOriginal.repo = "https://github.com/paulkjoseph/cordova-plugin-media-streaming-service";
    MediaStreamingServiceOriginal.platforms = ["Android"];
    return MediaStreamingServiceOriginal;
}(IonicNativePlugin));
var MediaStreamingService = new MediaStreamingServiceOriginal();
export { MediaStreamingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21lZGlhLXN0cmVhbWluZy1zZXJ2aWNlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBa0J4RSxNQUFNLENBQU4sSUFBWSxnQkFFWDtBQUZELFdBQVksZ0JBQWdCO0lBQ3hCLHVEQUFJLENBQUE7SUFBRSx5REFBSyxDQUFBO0lBQUUsdURBQUksQ0FBQTtJQUFFLHlEQUFLLENBQUE7QUFDNUIsQ0FBQyxFQUZXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFFM0I7O0lBVTBDLHlDQUFpQjs7OztJQUcxRCxxQ0FBSyxhQUFDLE9BQTRCLEVBQUUsZUFBMEIsRUFBRSxhQUF3QjtJQUt4RixvQ0FBSSxhQUFDLGFBQXFCLEVBQUUsZUFBMEIsRUFBRSxhQUF3QjtJQUtoRixxQ0FBSyxhQUFDLGVBQTBCLEVBQUUsYUFBd0I7SUFLMUQsb0NBQUksYUFBQyxlQUEwQixFQUFFLGFBQXdCOzs7Ozs7Z0NBakQzRDtFQStCMkMsaUJBQWlCO1NBQS9DLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhU3RyZWFtIHtcbiAgICB1cmk6IHN0cmluZztcbiAgICBpZGVudGlmaWVyOiBzdHJpbmc7XG4gICAgdGl0bGU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGNvdmVyOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBNZWRpYVN0cmVhbVJlcXVlc3Qge1xuICBjaGFubmVsSWQ6IHN0cmluZztcbiAgY2hhbm5lbE5hbWU6IHN0cmluZztcbiAgbm90aWZpY2F0aW9uSWQ6IHN0cmluZztcbiAgbWVkaWFTdHJlYW1zOiBNZWRpYVN0cmVhbVtdLFxuICBzZWxlY3RlZEluZGV4OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIE1lZGlhUGxheWVyU3RhdGUge1xuICAgIHBsYXksIHBhdXNlLCBzdG9wLCBjbG9zZVxufVxuXG5AUGx1Z2luKHtcbiAgICBwbHVnaW5OYW1lOiAnTWVkaWFTdHJlYW1pbmdTZXJ2aWNlJyxcbiAgICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1tZWRpYS1zdHJlYW1pbmctc2VydmljZScsXG4gICAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLm1lZGlhU3RyZWFtaW5nU2VydmljZScsXG4gICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wYXVsa2pvc2VwaC9jb3Jkb3ZhLXBsdWdpbi1tZWRpYS1zdHJlYW1pbmctc2VydmljZScsXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZWRpYVN0cmVhbWluZ1NlcnZpY2UgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgQENvcmRvdmEoKVxuICBzdGFydChvcHRpb25zPzogTWVkaWFTdHJlYW1SZXF1ZXN0LCBzdWNjZXNzQ2FsbGJhY2s/OiBGdW5jdGlvbiwgZXJyb3JDYWxsYmFjaz86IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHBsYXkoc2VsZWN0ZWRJbmRleDogc3RyaW5nLCBzdWNjZXNzQ2FsbGJhY2s/OiBGdW5jdGlvbiwgZXJyb3JDYWxsYmFjaz86IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHBhdXNlKHN1Y2Nlc3NDYWxsYmFjaz86IEZ1bmN0aW9uLCBlcnJvckNhbGxiYWNrPzogRnVuY3Rpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcChzdWNjZXNzQ2FsbGJhY2s/OiBGdW5jdGlvbiwgZXJyb3JDYWxsYmFjaz86IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19