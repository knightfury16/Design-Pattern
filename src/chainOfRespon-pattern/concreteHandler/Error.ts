import { ErrorHandler } from '../handler/ErrorHandler';

export class Error extends ErrorHandler {
  handle(request: string): string {
    if (request === 'error') {
      return 'Error on the code.Fix it!';
    }
    return super.handle(request);
  }
}
