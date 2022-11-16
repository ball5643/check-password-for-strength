import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  color1: string = "grey";
  color2: string = "grey";
  color3: string = "grey";

  constructor() { }

  ngOnInit(): void {
  }

  onKey(event: any) {
    const inputValue = event.target.value;
    const inputLength = inputValue.length;

    //-------------FIRST CASE----------------------
    const letters = /^(?=.*[A-Za-z])[A-Za-z]{8,}$/
    const numbers = /^(?=.*\d)[\d]{8,}$/
    const symbols = /^(?=.*[@$!%*#?&])[@$!%*#?&]{8,}$/
    //-------------SECOND CASE---------------------
    const lettersDigits = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    const lettersSymbols = /^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z@$!%*#?&]{8,}$/
    const symbolsDigits = /^(?=.*\d)(?=.*[@$!%*#?&])[\d@$!%*#?&]{8,}$/
    //------------------------THIRD CASE------------------------------
    const lettersDigitsSymbols = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/

    console.log(inputValue);
    if (inputLength === 0) {
      this.color1 = "grey";
      this.color2 = "grey";
      this.color3 = "grey";
    }

    else if (
      inputValue.match(letters) ||
      inputValue.match(numbers) ||
      inputValue.match(symbols))
    {
      this.color1 = "red";
      this.color2 = "grey";
      this.color3 = "grey";
    }

    else if (
      inputValue.match(lettersDigits) ||
      inputValue.match(lettersSymbols) ||
      inputValue.match(symbolsDigits))
    {
      this.color1 = "yellow";
      this.color2 = "yellow";
      this.color3 = "grey";
    }

    else if (inputValue.match(lettersDigitsSymbols)) {
      this.color1 = "lime";
      this.color2 = "lime";
      this.color3 = "lime";
    }

    else if(inputLength < 8 && inputLength > 0) {
      this.color1 = "red";
      this.color2 = "red";
      this.color3 = "red";
    }
  }
}
