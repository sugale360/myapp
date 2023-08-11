import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  displayValue="";
  disable = false;
  
  getData(val:string){
    console.warn(val)
    this.displayValue=val;
  }
  counter : number = 0;
  add(){
    this.counter +=1;
  }
  reduce(){
    this.counter -=1;
  }
  changeDisable(){
    this.disable ? this.disable=false : this.disable=true;
  }
  show=true;
  show1(){
this.show ? this.show=false : this.show=true;
  }
}
