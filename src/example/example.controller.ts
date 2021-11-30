import { Controller, MessageEvent, Sse } from '@nestjs/common';
import { interval, mapTo, Observable } from 'rxjs';

@Controller('example')
export class ExampleController {
  @Sse()
  public events(): Observable<MessageEvent> {
    return interval(300).pipe(mapTo({ data: 'Example' }));
  }
}
