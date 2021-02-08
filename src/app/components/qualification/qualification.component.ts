import { Component, Input, OnInit } from '@angular/core';
import { Qualification } from '../../models/qualification';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.scss'],
})

export class QualificationComponent implements OnInit {
  @Input('qualification') qualification: Qualification;

  constructor() { }
  ngOnInit() {}
}
