import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Technology } from 'src/app/models/technology.model';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  //Variable pública te tipo Technology.
  public technologies: Technology[];

  //httpService, contiene las propiedades del servicio-Backend, asi como las propiedades públicas del objeto.
  constructor(public _httpService: HttpService) { }
  
  //Obtiene las tecnologias
  ngOnInit(): void {
    this._httpService
      .getTechnologies()
      .subscribe((technologies: Technology[]) => {
        this.technologies = technologies["data"]; //Trae la lista de technologias.
      });
  }

}
