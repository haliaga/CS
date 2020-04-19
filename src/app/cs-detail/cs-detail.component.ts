import { Component, OnInit,Input } from '@angular/core';
import { Company } from '../Company';


@Component({
  selector: 'app-cs-detail',
  templateUrl: './cs-detail.component.html',
  styleUrls: ['./cs-detail.component.css']
})
export class CsDetailComponent implements OnInit {
  @Input() company: Company;
  constructor() { }

  ngOnInit(): void {
  }

}
