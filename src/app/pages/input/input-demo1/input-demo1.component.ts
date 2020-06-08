import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-demo1',
  templateUrl: './input-demo1.component.html',
  styleUrls: ['./input-demo1.component.scss']
})
export class InputDemo1Component implements OnInit {
  values1 = '';
  values2 = '';
  values3 = '';
  values4 = '';
  values6 = '';
  values8 = '';

  constructor() {
  }

  ngOnInit(): void {
  }


  onKey1($event: any) {
    this.values1 += $event.target.value + '|';
  }

  onKey2($event: KeyboardEvent) {
    this.values2 += ($event.target as HTMLInputElement).value + '|';
  }

  onKey3($event: any) {
    this.values3 += $event.key + '|';
  }

  onKey4($event: any) {
    this.values4 = JSON.stringify($event);
    console.log($event);
  }

  onKey6(value: string) {
    this.values6 += value + '|';
  }

  update(value: string) {
    this.values8 = value;
  }
}
