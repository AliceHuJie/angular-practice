import {Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit, OnChanges, OnDestroy {
  school: any;
  persons: any;
  logs: string[] = [];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    // tslint:disable-next-line:forin
    for (const propName in changes) {
      const chng = changes[propName];
      const cur = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.logs.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngOnInit(): void {
    this.school = 'init school name';
    this.persons = [];
    this.logs.push(`init`);
  }

  clear() {
    this.persons = [];
  }

  add(name: string, age: number) {
    this.persons.push({name, age});
  }

  ngOnDestroy(): void {
    this.logs.push(`destroy`);
  }
}
