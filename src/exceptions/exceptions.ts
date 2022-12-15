export class CustomdException extends Error {
    constructor(public message: string = 'n/a') {
      super(message);
      this.name = `Custom Exception: ${message}`;
      this.stack = (<any>new Error()).stack;
  
      Object.setPrototypeOf(this, CustomdException.prototype);
    }
  }