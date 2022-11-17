import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  easyColor: string = 'grey';
  mediumColor: string = 'grey';
  strongColor: string = 'grey';

  constructor() {}

  ngOnInit(): void {}

  onKey(event: any) {
    const inputValue = event.target.value;
    const inputLength = inputValue.length;

    const easyPassword = /^[a-z]+$|^\d+$|^[@$!%*#?&]+$/i;
    const mediumPassword = /^[a-z\d]+$|^[\d@$!%*#?&]+$|^[a-z@$!%*#?&]+$/i;
    const strongPassword = /^[A-Za-z\d@$!%*#?&]+$/i;

    if (inputLength === 0) {
      this.easyColor = 'grey';
      this.mediumColor = 'grey';
      this.strongColor = 'grey';
    } else if (inputValue.length < 8) {
      this.easyColor = 'red';
      this.mediumColor = 'red';
      this.strongColor = 'red';
    } else if (inputValue.match(easyPassword)) {
      this.easyColor = 'red';
      this.mediumColor = 'grey';
      this.strongColor = 'grey';
    } else if (inputValue.match(mediumPassword)) {
      this.easyColor = 'yellow';
      this.mediumColor = 'yellow';
      this.strongColor = 'grey';
    } else if (inputValue.match(strongPassword)) {
      this.easyColor = 'lime';
      this.mediumColor = 'lime';
      this.strongColor = 'lime';
    }
  }
}
