import { IonicNativePlugin } from '@ionic-native/core';
export interface MediaStream {
    uri: string;
    identifier: string;
    title: string;
    description: string;
    cover: string;
}
/**
 * @name Media Streaming Service
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { MediaStreamingService } from '@ionic-native/media-streaming-service';
 *
 *
 * constructor(private mediaStreamingService: MediaStreamingService) { }
 *
 * ...
 *
 *
 * this.mediaStreamingService.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class MediaStreamingService extends IonicNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    start(channelId: string, channelName: string, notificationId: string, mediaStreams: MediaStream[], selectedIndex: string): Promise<any>;
    play(selectedIndex: string): Promise<any>;
    pause(): Promise<any>;
    stop(): Promise<any>;
}
