declare module '@yuga-cb/ezdb' {
  export interface Ezdb {
    set(key: string, value: any): Promise<void>;
    get(key: string): Promise<any>;
  }

  export function createDB(): Ezdb;
}