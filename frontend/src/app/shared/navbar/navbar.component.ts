import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //Transfiere un componente a otro a traves de las rutas
  constructor(private _router: Router) { }

  ngOnInit(): void {
    
  }

  //Envia el query por las rutas
  searchTechnology(query: string) {
    this._router.navigate(["/search", query])
  }
}
