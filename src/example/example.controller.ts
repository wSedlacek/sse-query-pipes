import { Controller, MessageEvent, Query, Sse } from '@nestjs/common';
import { interval, mapTo, Observable } from 'rxjs';

@Controller('example')
export class ExampleController {
  @Sse()
  public events(@Query('id') id: string): Observable<MessageEvent> {
    console.log(id);
    return interval(300).pipe(mapTo({ data: 'Example' }));
  }
}
