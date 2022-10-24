import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  // public  formData: FormGroup= new FormGroup({ 
  //   name: new FormControl(''),
  //   age: new FormControl('')
  formData = this.fb.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
}); 

  constructor( private common:CommonService, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.formdata.value);
    this.common.submitData(this.formData.value);

  }
  
}
