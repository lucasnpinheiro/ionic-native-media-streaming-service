import { IonicNativePlugin } from '@ionic-native/core';
export interface MediaStream {
    uri: string;
    identifier: string;
    title: string;
    description: string;
    cover: string;
}
export declare enum MediaPlayerState {
    play = 0,
    pause = 1,
    stop = 2,
    close = 3
}
export declare class MediaStreamingServiceOriginal extends IonicNativePlugin {
    start(channelId: string, channelName: string, notificationId: string, mediaStreams: MediaStream[], selectedIndex: string): Promise<any>;
    play(selectedIndex: string): Promise<any>;
    pause(): Promise<any>;
    stop(): Promise<any>;
}

export declare const MediaStreamingService: MediaStreamingServiceOriginal;