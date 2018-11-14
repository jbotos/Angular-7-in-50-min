import { Component, OnInit } from '@angular/core';

// Import three different functions, FormBuilder, FormGroup, Validators
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // create three properties
  messageForm: FormGroup; 
  submitted = false;
  success = false; 

  // dependency injection of our form builder 
  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  onSubmit() {
    this.submitted = true; 
    if(this.messageForm.invalid) {
      // just return, do not allow any code after this point to execute
      return;
    }

    // this is where you would connect to a backend to send the email 
    this.success = true; 

  }
  ngOnInit() {
  }

}
