import { ErrorHandler } from '../handler/ErrorHandler';

export class Warning extends ErrorHandler {
  handle(request: string): string {
    if (request === 'warning') {
      return 'Warning! Variable undefined!';
    }
    return super.handle(request);
  }
}
