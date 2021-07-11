import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  on_scroll: Subject<string> = new Subject<string>();
  constructor() { }
  to(id: string) {
    this.on_scroll.next(id);
  }
}
