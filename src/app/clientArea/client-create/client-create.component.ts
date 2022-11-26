import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client } from 'src/types/Client';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
  createForm!: FormGroup;

  constructor() {
    this.createForm= new FormGroup({
      name: new FormControl('',Validators.required),
      surname: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      pnumber: new FormControl('',[Validators.min(100000000),Validators.required])
    });
  }

  ngOnInit(): void {

  }
  onSubmit(){
    console.log(this.createForm.controls)
  }
  get name() { return this.createForm.get('name'); }
  get surname() { return this.createForm.get('surname'); }
  get address() { return this.createForm.get('address'); }
  get pnumber() { return this.createForm.get('pnumber'); }
}
