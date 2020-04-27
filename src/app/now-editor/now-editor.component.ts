import { Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-now-editor',
  templateUrl: './now-editor.component.html',
  styleUrls: ['./now-editor.component.css']
})
export class NowEditorComponent implements OnInit {
  nowForm = new FormControl('20200501');
  now:string = this.nowForm.value
  
  constructor() { }

  ngOnInit(): void {
  }
}
