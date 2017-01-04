import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  info : any;
  style : any;
  nodeTable : any;
  textArray : string[];

  constructor() {
    let text = 'asdfasdf';
    this.textArray = text.split("");

    this.info = {wordLeft:0,leftValue:150,tick:0,temp:null};
    this.style = {
      un:{border:'0',boxShadow:'none',fontSize:'5rem'},
      now:{border:'1px solid red',boxShadow:'0 0 50px 0 red',fontSize:'12rem'}
    };

    window.addEventListener('keydown', this.sendKey);
    window.addEventListener('keyup', this.outKey);
  }

  ngOnInit() { 
    console.log(this.textArray);
    console.log(this.info.leftValue);
    console.log(this.style.un.fontSize);
  }

  sendKey() : void{
    console.log('send');
  }
  
  outKey() : void{
    console.log('out');
  }
}
