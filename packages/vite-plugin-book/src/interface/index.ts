/* Copyright 2021, vite-plugin-book by Mirone. */

export type FileInfo = {
    type: 'file';
    name: string;
    url: string;
};

export type DirInfo = {
    type: 'dir';
    name: string;
    url: string;
    list: ItemInfo[];
};

export type ItemInfo = FileInfo | DirInfo;

export type SideBarItem =
    | {
          type: 'file';
          url: string;
          index: number;
      }
    | {
          type: 'dir';
          url: string;
          index: number;
          list: SideBarItem[];
      };
export type BookConfig = {
    sidebar: SideBarItem[];
};

export interface WebSocketServerEvents {
    getConfig(): Promise<BookConfig>;
    writeConfig(config: BookConfig): Promise<void>;
    getFiles(): Promise<ItemInfo[]>;
    getFile(url: string): Promise<string>;
    writeFile(url: string, markdown: string): Promise<void>;
}

export type WebSocketClientEvents = {
    // add client events here
};
