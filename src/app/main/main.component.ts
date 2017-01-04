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
  hintArray : any;
  textArray : string[];

  constructor() {
    let text = 'ӨСЬВЗАШЕЭНГЮЧРЁУҮЖЯХПЩЙИТЫФЦЛДОМБ';
    this.textArray = text.split("");

    this.info = {wordLeft:0,leftValue:150,tick:0,temp:null};
    this.style = {
      un:{border:'0',boxShadow:'none',fontSize:'5rem'},
      now:{border:'1px solid red',boxShadow:'0 0 50px 0 red',fontSize:'12rem'}
    };
    
    this.nodeTable = document.querySelector('table');
    this.hintArray = document.querySelectorAll('.key.letter');
    this.quizLight(this.info.tick);

    window.addEventListener('keydown', (e) =>{
      console.log('send');
      let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if(!key) return;

      console.log(key.textContent);
      console.log(this.info.tick);

    });

    window.addEventListener('keyup', (e) =>{
      console.log('out');
      let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if(!key) return;

      console.log(key);

      key.classList.remove('sendO');
      key.classList.remove('sendO');
    });
  }

  ngOnInit() { 
    console.log(this.textArray);
    console.log(this.info.leftValue);
    console.log(this.style.un.fontSize);
  }
  
  quizLight(num :number) : void{
    console.log(num);
    console.log(this.hintArray);
  }
}
