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

  constructor() {}

  ngOnInit() { 
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
      let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if(!key) return;

      if(key.textContent != this.textArray[this.info.tick])key.classList.add('sendX');
      else{
        key.classList.add('sendO');
    
        let word = document.getElementById('word');
        this.info.wordLeft-=this.info.leftValue;
        word.style.left=this.info.wordLeft+'px';
    
        this.info.tick++;
        this.quizLight(this.info.tick);
      }

    });

    window.addEventListener('keyup', (e) =>{
      let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if(!key) return;

      key.classList.remove('sendO');
      key.classList.remove('sendX');
    });

  }
  
  quizLight(num :number) : void{

  }
}
