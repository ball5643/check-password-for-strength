import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  color1: string = "";
  color2: string = "";
  color3: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onKey(event: any) {
    const inputValue = event.target.value;
    const inputLength = inputValue.length;

    const letters = /^[a-zA-Z]+$/
    const numbers = /[0-9]/;
    const symbols = /[$-/:-?{-~!"^_@`\[\]]/;
    const onlyLettersDigitsSymbols = /^[a-zA-Z0-9~_&*%@$]+$/

    console.log(inputValue);
    if (inputLength === 0) {
      this.color1 = "grey";
      this.color2 = "grey";
      this.color3 = "grey";
    }
    else if (inputLength < 8) {
      this.color1 = "red";
      this.color2 = "red";
      this.color3 = "red";
    }
    else if(letters.test(inputValue) || numbers.test(inputValue)) {
      this.color1 = "red";
      this.color2 = "grey";
      this.color3 = "grey";
    }
  }
}
