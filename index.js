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
    MediaStreamingServiceOriginal.prototype.pause = function (options, successCallback, errorCallback) { return cordova(this, "pause", { "sync": true }, arguments); };
    MediaStreamingServiceOriginal.prototype.stop = function (options, successCallback, errorCallback) { return cordova(this, "stop", { "sync": true }, arguments); };
    MediaStreamingServiceOriginal.prototype.close = function (successCallback, errorCallback) { return cordova(this, "close", { "sync": true }, arguments); };
    MediaStreamingServiceOriginal.pluginName = "MediaStreamingService";
    MediaStreamingServiceOriginal.plugin = "cordova-plugin-media-streaming-service";
    MediaStreamingServiceOriginal.pluginRef = "cordova.plugins.mediaStreamingService";
    MediaStreamingServiceOriginal.repo = "https://github.com/lucasnpinheiro/cordova-plugin-media-streaming-service";
    MediaStreamingServiceOriginal.platforms = ["Android"];
    return MediaStreamingServiceOriginal;
}(IonicNativePlugin));
var MediaStreamingService = new MediaStreamingServiceOriginal();
export { MediaStreamingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21lZGlhLXN0cmVhbWluZy1zZXJ2aWNlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDO0FBa0J4RSxNQUFNLENBQU4sSUFBWSxnQkFFWDtBQUZELFdBQVksZ0JBQWdCO0lBQzFCLHlEQUFLLENBQUE7SUFBRSx1REFBSSxDQUFBO0lBQUUseURBQUssQ0FBQTtJQUFFLHVEQUFJLENBQUE7SUFBRSx5REFBSyxDQUFBO0FBQ2pDLENBQUMsRUFGVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBRTNCOztJQVUwQyx5Q0FBaUI7Ozs7SUFHMUQscUNBQUssYUFBQyxPQUEyQixFQUFFLGVBQTBCLEVBQUUsYUFBd0I7SUFHdkYsb0NBQUksYUFBQyxPQUEyQixFQUFFLGVBQTBCLEVBQUUsYUFBd0I7SUFHdEYscUNBQUssYUFBQyxPQUEyQixFQUFFLGVBQTBCLEVBQUUsYUFBd0I7SUFHdkYsb0NBQUksYUFBQyxPQUEyQixFQUFFLGVBQTBCLEVBQUUsYUFBd0I7SUFHdEYscUNBQUssYUFBQyxlQUEwQixFQUFFLGFBQXdCOzs7Ozs7Z0NBOUM1RDtFQStCMkMsaUJBQWlCO1NBQS9DLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhU3RyZWFtIHtcbiAgdXJpOiBzdHJpbmc7XG4gIGlkZW50aWZpZXI6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgY292ZXI6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYVN0cmVhbVJlcXVlc3Qge1xuICBjaGFubmVsSWQ6IHN0cmluZztcbiAgY2hhbm5lbE5hbWU6IHN0cmluZztcbiAgbm90aWZpY2F0aW9uSWQ6IHN0cmluZztcbiAgbWVkaWFTdHJlYW1zOiBNZWRpYVN0cmVhbVtdLFxuICBzZWxlY3RlZEluZGV4OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBlbnVtIE1lZGlhUGxheWVyU3RhdGUge1xuICBzdGFydCwgcGxheSwgcGF1c2UsIHN0b3AsIGNsb3NlXG59XG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTWVkaWFTdHJlYW1pbmdTZXJ2aWNlJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbWVkaWEtc3RyZWFtaW5nLXNlcnZpY2UnLFxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMubWVkaWFTdHJlYW1pbmdTZXJ2aWNlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wYXVsa2pvc2VwaC9jb3Jkb3ZhLXBsdWdpbi1tZWRpYS1zdHJlYW1pbmctc2VydmljZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVkaWFTdHJlYW1pbmdTZXJ2aWNlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzdGFydChvcHRpb25zOiBNZWRpYVN0cmVhbVJlcXVlc3QsIHN1Y2Nlc3NDYWxsYmFjaz86IEZ1bmN0aW9uLCBlcnJvckNhbGxiYWNrPzogRnVuY3Rpb24pOiB2b2lkIHsgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBwbGF5KG9wdGlvbnM6IE1lZGlhU3RyZWFtUmVxdWVzdCwgc3VjY2Vzc0NhbGxiYWNrPzogRnVuY3Rpb24sIGVycm9yQ2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQgeyB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHBhdXNlKG9wdGlvbnM6IE1lZGlhU3RyZWFtUmVxdWVzdCwgc3VjY2Vzc0NhbGxiYWNrPzogRnVuY3Rpb24sIGVycm9yQ2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQgeyB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHN0b3Aob3B0aW9uczogTWVkaWFTdHJlYW1SZXF1ZXN0LCBzdWNjZXNzQ2FsbGJhY2s/OiBGdW5jdGlvbiwgZXJyb3JDYWxsYmFjaz86IEZ1bmN0aW9uKTogdm9pZCB7IH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY2xvc2Uoc3VjY2Vzc0NhbGxiYWNrPzogRnVuY3Rpb24sIGVycm9yQ2FsbGJhY2s/OiBGdW5jdGlvbik6IHZvaWQgeyB9XG5cbn1cbiJdfQ==