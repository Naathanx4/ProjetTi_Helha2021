import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  form:FormGroup = this.fb.group({
    pseudo:this.fb.control("",Validators.required),
    password:this.fb.control("",Validators.required),
    comfirmPassword:this.fb.control("",Validators.required),
    mail:this.fb.control("",Validators.required),
    //Par défaut je mets la date d'aujourd'hui
    dateNaissance:this.fb.control(new Date().toISOString().substring(0,10),Validators.required)
  });

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  sendData() {
    console.log(this.form.value);
  }
}
