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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21lZGlhLXN0cmVhbWluZy1zZXJ2aWNlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLDhCQUEwRixNQUFNLG9CQUFvQixDQUFDOztJQXdDakYseUNBQWlCOzs7O0lBVTFELHFDQUFLLGFBQUMsU0FBaUIsRUFBRSxXQUFtQixFQUFFLGNBQXNCLEVBQUUsWUFBMkIsRUFBRSxhQUFxQjtJQUt4SCxvQ0FBSSxhQUFDLGFBQXFCO0lBSzFCLHFDQUFLO0lBS0wsb0NBQUk7Ozs7OztnQ0E3RU47RUFvRDJDLGlCQUFpQjtTQUEvQyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBNZWRpYVN0cmVhbSB7XG4gICAgdXJpOiBzdHJpbmc7XG4gICAgaWRlbnRpZmllcjogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICBjb3Zlcjogc3RyaW5nO1xuICB9XG5cbi8qKlxuICogQG5hbWUgTWVkaWEgU3RyZWFtaW5nIFNlcnZpY2VcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IE1lZGlhU3RyZWFtaW5nU2VydmljZSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbWVkaWEtc3RyZWFtaW5nLXNlcnZpY2UnO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lZGlhU3RyZWFtaW5nU2VydmljZTogTWVkaWFTdHJlYW1pbmdTZXJ2aWNlKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy5tZWRpYVN0cmVhbWluZ1NlcnZpY2UuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gICAgcGx1Z2luTmFtZTogJ01lZGlhU3RyZWFtaW5nU2VydmljZScsXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbWVkaWEtc3RyZWFtaW5nLXNlcnZpY2UnLFxuICAgIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5tZWRpYVN0cmVhbWluZ1NlcnZpY2UnLFxuICAgIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcGF1bGtqb3NlcGgvY29yZG92YS1wbHVnaW4tbWVkaWEtc3RyZWFtaW5nLXNlcnZpY2UnLFxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWVkaWFTdHJlYW1pbmdTZXJ2aWNlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGRvZXMgc29tZXRoaW5nXG4gICAqIEBwYXJhbSBhcmcxIHtzdHJpbmd9IFNvbWUgcGFyYW0gdG8gY29uZmlndXJlIHNvbWV0aGluZ1xuICAgKiBAcGFyYW0gYXJnMiB7bnVtYmVyfSBBbm90aGVyIHBhcmFtIHRvIGNvbmZpZ3VyZSBzb21ldGhpbmdcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcbiAgICovXG5cbiAgQENvcmRvdmEoKVxuICBzdGFydChjaGFubmVsSWQ6IHN0cmluZywgY2hhbm5lbE5hbWU6IHN0cmluZywgbm90aWZpY2F0aW9uSWQ6IHN0cmluZywgbWVkaWFTdHJlYW1zOiBNZWRpYVN0cmVhbVtdLCBzZWxlY3RlZEluZGV4OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgcGxheShzZWxlY3RlZEluZGV4OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKClcbiAgcGF1c2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSgpXG4gIHN0b3AoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxufVxuIl19