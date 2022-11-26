import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/_models/Client';

@Component({
  selector: 'app-client-index',
  templateUrl: './client-index.component.html',
  styleUrls: ['./client-index.component.css']
})
export class ClientIndexComponent implements OnInit {

  clients:Client[]=[];


  constructor() { }

  ngOnInit(): void {
    console.log("Clients\n");
    this.clients.push( new Client(1,"Jan","Kowalski","Mickiewicza 3",997));
    this.clients.push( new Client(2,"Ala","MaKota","Sienkiewicza 10",123456789));
    console.log(this.clients);

  }

}
