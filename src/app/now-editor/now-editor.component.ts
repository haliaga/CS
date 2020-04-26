import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-now-editor',
  templateUrl: './now-editor.component.html',
  styleUrls: ['./now-editor.component.css']
})
export class NowEditorComponent implements OnInit {
  now = new FormControl('20200501');
  
  @Output() evEmitt = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(){
    this.evEmitt.emit(this.now.value);
  }

}
