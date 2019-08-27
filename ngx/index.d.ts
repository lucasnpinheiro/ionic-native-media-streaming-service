import { IonicNativePlugin } from '@ionic-native/core';
export interface MediaStream {
    uri: string;
    identifier: string;
    title: string;
    description: string;
    cover: string;
}
export interface MediaStreamRequest {
    channelId: string;
    channelName: string;
    notificationId: string;
    mediaStreams: MediaStream[];
    selectedIndex: string;
}
export declare enum MediaPlayerState {
    start = 0,
    play = 1,
    pause = 2,
    stop = 3,
    close = 4
}
export declare class MediaStreamingService extends IonicNativePlugin {
    start(options: MediaStreamRequest, successCallback?: Function, errorCallback?: Function): void;
    play(options: MediaStreamRequest, successCallback?: Function, errorCallback?: Function): void;
    pause(options: MediaStreamRequest, successCallback?: Function, errorCallback?: Function): void;
    stop(options: MediaStreamRequest, successCallback?: Function, errorCallback?: Function): void;
    close(options: MediaStreamRequest, successCallback?: Function, errorCallback?: Function): void;
}
