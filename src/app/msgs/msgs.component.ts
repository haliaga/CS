import { Component, OnInit } from '@angular/core';
import {MsgService } from '../msg.service'

@Component({
  selector: 'app-msgs',
  templateUrl: './msgs.component.html',
  styleUrls: ['./msgs.component.css']
})
export class MsgsComponent implements OnInit {

  constructor(public msgService: MsgService) { }

  ngOnInit(): void {
  }

}
