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
    MediaPlayerState[MediaPlayerState["start"] = 0] = "start";
    MediaPlayerState[MediaPlayerState["play"] = 1] = "play";
    MediaPlayerState[MediaPlayerState["pause"] = 2] = "pause";
    MediaPlayerState[MediaPlayerState["stop"] = 3] = "stop";
    MediaPlayerState[MediaPlayerState["close"] = 4] = "close";
})(MediaPlayerState || (MediaPlayerState = {}));
var MediaStreamingServiceOriginal = /** @class */ (function (_super) {
    __extends(MediaStreamingServiceOriginal, _super);
    function MediaStreamingServiceOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaStreamingServiceOriginal.prototype.start = function (options, successCallback, errorCallback) { return cordova(this, "start", { "sync": true }, arguments); };
    MediaStreamingServiceOriginal.prototype.play = function (options, successCallback, errorCallback) { return cordova(this, "play", { "sync": true }, arguments); };
    MediaStreamingServiceOriginal.prototype.pause = function (successCallback, errorCallback) { return cordova(this, "pause", { "sync": true }, arguments); };
    MediaStreamingServiceOriginal.prototype.stop = function (successCallback, errorCallback) { return cordova(this, "stop", { "sync": true }, arguments); };
    MediaStreamingServiceOriginal.prototype.close = function (successCallback, errorCallback) { return cordova(this, "close", { "sync": true }, arguments); };
    MediaStreamingServiceOriginal.pluginName = "MediaStreamingService";
    MediaStreamingServiceOriginal.plugin = "cordova-plugin-media-streaming-service";
    MediaStreamingServiceOriginal.pluginRef = "cordova.plugins.mediaStreamingService";
    MediaStreamingServiceOriginal.repo = "https://github.com/paulkjoseph/cordova-plugin-media-streaming-service";
    MediaStreamingServiceOriginal.platforms = ["Android"];
    return MediaStreamingServiceOriginal;
}(IonicNativePlugin));
var MediaStreamingService = new MediaStreamingServiceOriginal();
export { MediaStreamingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21lZGlhLXN0cmVhbWluZy1zZXJ2aWNlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBa0J4RSxNQUFNLENBQU4sSUFBWSxnQkFFWDtBQUZELFdBQVksZ0JBQWdCO0lBQzFCLHlEQUFLLENBQUE7SUFBRSx1REFBSSxDQUFBO0lBQUUseURBQUssQ0FBQTtJQUFFLHVEQUFJLENBQUE7SUFBRSx5REFBSyxDQUFBO0FBQ2pDLENBQUMsRUFGVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBRTNCOztJQVUwQyx5Q0FBaUI7Ozs7SUFHMUQscUNBQUssYUFBQyxPQUEyQixFQUFFLGVBQTBCLEVBQUUsYUFBd0I7SUFHdkYsb0NBQUksYUFBQyxPQUEyQixFQUFFLGVBQTBCLEVBQUUsYUFBd0I7SUFHdEYscUNBQUssYUFBQyxlQUEwQixFQUFFLGFBQXdCO0lBRzFELG9DQUFJLGFBQUMsZUFBMEIsRUFBRSxhQUF3QjtJQUd6RCxxQ0FBSyxhQUFDLGVBQTBCLEVBQUUsYUFBd0I7Ozs7OztnQ0E5QzVEO0VBK0IyQyxpQkFBaUI7U0FBL0MscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFTdHJlYW0ge1xuICB1cmk6IHN0cmluZztcbiAgaWRlbnRpZmllcjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjb3Zlcjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhU3RyZWFtUmVxdWVzdCB7XG4gIGNoYW5uZWxJZDogc3RyaW5nO1xuICBjaGFubmVsTmFtZTogc3RyaW5nO1xuICBub3RpZmljYXRpb25JZDogc3RyaW5nO1xuICBtZWRpYVN0cmVhbXM6IE1lZGlhU3RyZWFtW10sXG4gIHNlbGVjdGVkSW5kZXg6IHN0cmluZztcbn1cblxuZXhwb3J0IGVudW0gTWVkaWFQbGF5ZXJTdGF0ZSB7XG4gIHN0YXJ0LCBwbGF5LCBwYXVzZSwgc3RvcCwgY2xvc2Vcbn1cblxuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdNZWRpYVN0cmVhbWluZ1NlcnZpY2UnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1tZWRpYS1zdHJlYW1pbmctc2VydmljZScsXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5tZWRpYVN0cmVhbWluZ1NlcnZpY2UnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3BhdWxram9zZXBoL2NvcmRvdmEtcGx1Z2luLW1lZGlhLXN0cmVhbWluZy1zZXJ2aWNlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZWRpYVN0cmVhbWluZ1NlcnZpY2UgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHN0YXJ0KG9wdGlvbnM6IE1lZGlhU3RyZWFtUmVxdWVzdCwgc3VjY2Vzc0NhbGxiYWNrPzogRnVuY3Rpb24sIGVycm9yQ2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQgeyB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHBsYXkob3B0aW9uczogTWVkaWFTdHJlYW1SZXF1ZXN0LCBzdWNjZXNzQ2FsbGJhY2s/OiBGdW5jdGlvbiwgZXJyb3JDYWxsYmFjaz86IEZ1bmN0aW9uKTogdm9pZCB7IH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcGF1c2Uoc3VjY2Vzc0NhbGxiYWNrPzogRnVuY3Rpb24sIGVycm9yQ2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQgeyB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHN0b3Aoc3VjY2Vzc0NhbGxiYWNrPzogRnVuY3Rpb24sIGVycm9yQ2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQgeyB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGNsb3NlKHN1Y2Nlc3NDYWxsYmFjaz86IEZ1bmN0aW9uLCBlcnJvckNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHsgfVxuXG59XG4iXX0=