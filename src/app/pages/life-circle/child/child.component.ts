import {Component, Input, OnInit} from '@angular/core';

export interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() school: string;
  @Input() persons: Person[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
