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
    MediaStreamingServiceOriginal.prototype.play = function (options, successCallback, errorCallback) { return cordova(this, "play", {}, arguments); };
    MediaStreamingServiceOriginal.prototype.pause = function (options, successCallback, errorCallback) { return cordova(this, "pause", {}, arguments); };
    MediaStreamingServiceOriginal.prototype.stop = function (options, successCallback, errorCallback) { return cordova(this, "stop", {}, arguments); };
    MediaStreamingServiceOriginal.pluginName = "MediaStreamingService";
    MediaStreamingServiceOriginal.plugin = "cordova-plugin-media-streaming-service";
    MediaStreamingServiceOriginal.pluginRef = "cordova.plugins.mediaStreamingService";
    MediaStreamingServiceOriginal.repo = "https://github.com/paulkjoseph/cordova-plugin-media-streaming-service";
    MediaStreamingServiceOriginal.platforms = ["Android"];
    return MediaStreamingServiceOriginal;
}(IonicNativePlugin));
var MediaStreamingService = new MediaStreamingServiceOriginal();
export { MediaStreamingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21lZGlhLXN0cmVhbWluZy1zZXJ2aWNlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBa0J4RSxNQUFNLENBQU4sSUFBWSxnQkFFWDtBQUZELFdBQVksZ0JBQWdCO0lBQ3hCLHVEQUFJLENBQUE7SUFBRSx5REFBSyxDQUFBO0lBQUUsdURBQUksQ0FBQTtJQUFFLHlEQUFLLENBQUE7QUFDNUIsQ0FBQyxFQUZXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFFM0I7O0lBVTBDLHlDQUFpQjs7OztJQUcxRCxxQ0FBSyxhQUFDLE9BQTJCLEVBQUUsZUFBMEIsRUFBRSxhQUF3QjtJQUd2RixvQ0FBSSxhQUFDLE9BQTJCLEVBQUUsZUFBMEIsRUFBRSxhQUF3QjtJQUd0RixxQ0FBSyxhQUFDLE9BQTJCLEVBQUUsZUFBMEIsRUFBRSxhQUF3QjtJQUd2RixvQ0FBSSxhQUFDLE9BQTJCLEVBQUUsZUFBMEIsRUFBRSxhQUF3Qjs7Ozs7O2dDQTNDeEY7RUErQjJDLGlCQUFpQjtTQUEvQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYVN0cmVhbSB7XG4gICAgdXJpOiBzdHJpbmc7XG4gICAgaWRlbnRpZmllcjogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBjb3Zlcjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhU3RyZWFtUmVxdWVzdCB7XG4gIGNoYW5uZWxJZDogc3RyaW5nO1xuICBjaGFubmVsTmFtZTogc3RyaW5nO1xuICBub3RpZmljYXRpb25JZDogc3RyaW5nO1xuICBtZWRpYVN0cmVhbXM6IE1lZGlhU3RyZWFtW10sXG4gIHNlbGVjdGVkSW5kZXg6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gTWVkaWFQbGF5ZXJTdGF0ZSB7XG4gICAgcGxheSwgcGF1c2UsIHN0b3AsIGNsb3NlXG59XG5cbkBQbHVnaW4oe1xuICAgIHBsdWdpbk5hbWU6ICdNZWRpYVN0cmVhbWluZ1NlcnZpY2UnLFxuICAgIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW1lZGlhLXN0cmVhbWluZy1zZXJ2aWNlJyxcbiAgICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMubWVkaWFTdHJlYW1pbmdTZXJ2aWNlJyxcbiAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3BhdWxram9zZXBoL2NvcmRvdmEtcGx1Z2luLW1lZGlhLXN0cmVhbWluZy1zZXJ2aWNlJyxcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lZGlhU3RyZWFtaW5nU2VydmljZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICBAQ29yZG92YSgpXG4gIHN0YXJ0KG9wdGlvbnM6IE1lZGlhU3RyZWFtUmVxdWVzdCwgc3VjY2Vzc0NhbGxiYWNrPzogRnVuY3Rpb24sIGVycm9yQ2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQge31cblxuICBAQ29yZG92YSgpXG4gIHBsYXkob3B0aW9uczogTWVkaWFTdHJlYW1SZXF1ZXN0LCBzdWNjZXNzQ2FsbGJhY2s/OiBGdW5jdGlvbiwgZXJyb3JDYWxsYmFjaz86IEZ1bmN0aW9uKTogdm9pZCB7fVxuXG4gIEBDb3Jkb3ZhKClcbiAgcGF1c2Uob3B0aW9uczogTWVkaWFTdHJlYW1SZXF1ZXN0LCBzdWNjZXNzQ2FsbGJhY2s/OiBGdW5jdGlvbiwgZXJyb3JDYWxsYmFjaz86IEZ1bmN0aW9uKTogdm9pZCB7fVxuXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcChvcHRpb25zOiBNZWRpYVN0cmVhbVJlcXVlc3QsIHN1Y2Nlc3NDYWxsYmFjaz86IEZ1bmN0aW9uLCBlcnJvckNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHt9XG5cbn1cbiJdfQ==