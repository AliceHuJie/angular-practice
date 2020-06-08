import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-demo2',
  templateUrl: './input-demo2.component.html',
  styleUrls: ['./input-demo2.component.scss']
})
export class InputDemo2Component implements OnInit {
  dogs = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  addDog(value: string) {
    if (value) {
      this.dogs = [...this.dogs, value];
    }
  }
}
