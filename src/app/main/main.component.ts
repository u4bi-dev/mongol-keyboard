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
      let audio = <HTMLAudioElement>document.querySelector(`audio[data-key="${e.keyCode}"]`);
      let key = document.querySelector(`div[data-key="${e.keyCode}"]`);
      if(!key) return;
     
      audio.currentTime = 0;
      audio.play();

      if(key.textContent != this.textArray[this.info.tick])key.classList.add('sendX');
      else{ 
        let word = document.getElementById('word'); 
        if(this.info.tick == this.textArray.length-1){
          this.info.tick=-1;
          this.info.wordLeft=0;
        }else{
          key.classList.add('sendO');
          this.info.wordLeft-=this.info.leftValue;
        }
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
    var unNum =num-1;
  
    for(let i=0; i<this.hintArray.length; i++){
      if(this.nodeTable.rows[0].cells[num].innerText == this.hintArray[i].innerText){
      
        if(this.info.temp != null)this.hintArray[this.info.temp].style.color='black';
        
        this.hintArray[i].style.color='red';
        this.info.temp=i;
      }
    }
    
    if(num != 0){
      this.nodeTable.rows[0].cells[unNum].style.border=this.style.un.border;
      this.nodeTable.rows[0].cells[unNum].style.boxShadow =this.style.un.boxShadow;
      this.nodeTable.rows[0].cells[unNum].style.fontSize =this.style.un.fontSize;
    }
    this.nodeTable.rows[0].cells[num].style.border=this.style.now.border;
    this.nodeTable.rows[0].cells[num].style.boxShadow =this.style.now.boxShadow;
    this.nodeTable.rows[0].cells[num].style.fontSize =this.style.now.fontSize;
  }
}
