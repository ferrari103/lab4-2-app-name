import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  t1 = true;
  t2 = true;
  t3 = true;
  a; y; e;

  inputHandler(event: any): void{
    const value = event.target.value;
    console.log(value);
    this.title = value;
  }

  numbers(num: any): void {
    let b;
    const c: string = this.title;
    b = c + num;
    console.log(b);
    this.title = b;
  }

  operations(operate: any): void {
    let b: string;
    const c: string = this.title;
    b = c + operate;
    console.log(b);
    this.title = b;
  }

  equal(): void { // string
  let b: any;
  const c = this.title;
  let n: number;
    // tslint:disable-next-line:no-eval
  n = eval(c);
  b = c + ' = ' + n;

  this.title = b;
  // this.title = '';

    if (this.t1 === true) {
      document.getElementById('myDIV1').innerHTML = b;

      this.y = b;
      this.t1 = false;
    }else if (this.t2 === true) {
      document.getElementById('myDIV2').innerHTML = this.y;
      document.getElementById('myDIV1').innerHTML = b;

      this.e = this.y;
      this.a = b;
      this.t2 = false;
    }else if (this.t3 === true) {
      document.getElementById('myDIV3').innerHTML = this.e;
      document.getElementById('myDIV2').innerHTML = this.a;
      document.getElementById('myDIV1').innerHTML = b;

      this.e = this.a;
      this.a = b;
    }
  }
}
