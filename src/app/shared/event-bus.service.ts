import { Injectable } from '@angular/core';
import { Subject,Subscription } from 'rxjs';
import { map,filter } from 'rxjs';
import { EventData } from './event';
@Injectable({
  providedIn: 'root'
})
export class EventBusService {
    private subject$ = new Subject<EventData>();

    emit(event: EventData) {
      this.subject$.next(event);
    }
  
    on(eventName: string, action: any): Subscription {
      return this.subject$.pipe(
        filter((e: EventData) => e.name === eventName),
        map((e: EventData) => e["value"])).subscribe(action);
    }
}
