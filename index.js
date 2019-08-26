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
    MediaStreamingServiceOriginal.prototype.start = function (channelId, channelName, notificationId, mediaStreams, selectedIndex) { return cordova(this, "start", {}, arguments); };
    MediaStreamingServiceOriginal.prototype.play = function (selectedIndex) { return cordova(this, "play", {}, arguments); };
    MediaStreamingServiceOriginal.prototype.pause = function () { return cordova(this, "pause", {}, arguments); };
    MediaStreamingServiceOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    MediaStreamingServiceOriginal.pluginName = "MediaStreamingService";
    MediaStreamingServiceOriginal.plugin = "cordova-plugin-media-streaming-service";
    MediaStreamingServiceOriginal.pluginRef = "cordova.plugins.mediaStreamingService";
    MediaStreamingServiceOriginal.repo = "https://github.com/paulkjoseph/cordova-plugin-media-streaming-service";
    MediaStreamingServiceOriginal.platforms = ["Android"];
    return MediaStreamingServiceOriginal;
}(IonicNativePlugin));
var MediaStreamingService = new MediaStreamingServiceOriginal();
export { MediaStreamingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21lZGlhLXN0cmVhbWluZy1zZXJ2aWNlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBVXhFLE1BQU0sQ0FBTixJQUFZLGdCQUVYO0FBRkQsV0FBWSxnQkFBZ0I7SUFDeEIsdURBQUksQ0FBQTtJQUFFLHlEQUFLLENBQUE7SUFBRSx1REFBSSxDQUFBO0lBQUUseURBQUssQ0FBQTtBQUM1QixDQUFDLEVBRlcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQUUzQjs7SUFVMEMseUNBQWlCOzs7O0lBRzFELHFDQUFLLGFBQUMsU0FBaUIsRUFBRSxXQUFtQixFQUFFLGNBQXNCLEVBQUUsWUFBMkIsRUFBRSxhQUFxQjtJQUt4SCxvQ0FBSSxhQUFDLGFBQXFCO0lBSzFCLHFDQUFLO0lBS0wsb0NBQUk7Ozs7OztnQ0F6Q047RUF1QjJDLGlCQUFpQjtTQUEvQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYVN0cmVhbSB7XG4gICAgdXJpOiBzdHJpbmc7XG4gICAgaWRlbnRpZmllcjogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBjb3Zlcjogc3RyaW5nO1xufVxuXG5leHBvcnQgZW51bSBNZWRpYVBsYXllclN0YXRlIHtcbiAgICBwbGF5LCBwYXVzZSwgc3RvcCwgY2xvc2Vcbn1cblxuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogJ01lZGlhU3RyZWFtaW5nU2VydmljZScsXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbWVkaWEtc3RyZWFtaW5nLXNlcnZpY2UnLFxuICAgIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5tZWRpYVN0cmVhbWluZ1NlcnZpY2UnLFxuICAgIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcGF1bGtqb3NlcGgvY29yZG92YS1wbHVnaW4tbWVkaWEtc3RyZWFtaW5nLXNlcnZpY2UnLFxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVkaWFTdHJlYW1pbmdTZXJ2aWNlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIEBDb3Jkb3ZhKClcbiAgc3RhcnQoY2hhbm5lbElkOiBzdHJpbmcsIGNoYW5uZWxOYW1lOiBzdHJpbmcsIG5vdGlmaWNhdGlvbklkOiBzdHJpbmcsIG1lZGlhU3RyZWFtczogTWVkaWFTdHJlYW1bXSwgc2VsZWN0ZWRJbmRleDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHBsYXkoc2VsZWN0ZWRJbmRleDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHBhdXNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBzdG9wKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==