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
    play = 0,
    pause = 1,
    stop = 2,
    close = 3
}
export declare class MediaStreamingService extends IonicNativePlugin {
    start(options: MediaStreamRequest, successCallback?: Function, errorCallback?: Function): void;
    play(selectedIndex: string, successCallback?: Function, errorCallback?: Function): void;
    pause(successCallback?: Function, errorCallback?: Function): void;
    stop(successCallback?: Function, errorCallback?: Function): void;
}
