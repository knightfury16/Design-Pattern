import { Handler } from './IHandler';

export abstract class ErrorHandler implements Handler {
  nextHandler: Handler;

  setNext(handler: Handler): Handler {
    this.nextHandler = handler;
    return handler;
  }

  handle(request: string): string {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }
    return 'Fatal Error';
  }
}
