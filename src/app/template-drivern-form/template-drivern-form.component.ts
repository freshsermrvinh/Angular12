import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-template-drivern-form',
  templateUrl: './template-drivern-form.component.html',
  styleUrls: ['./template-drivern-form.component.scss']
})
export class TemplateDrivernFormComponent implements OnInit {
  public name = '';

  constructor(private common: CommonService) { }

  ngOnInit(): void {
  }
  public submitForm():void{
    // console.log('submitForm name =' +  this.name);
   this.common.submitData({ name: this.name, age: 12 });
  }
}
