import {Component, OnInit} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-cinema',
  standalone: true,
  imports: [],
  templateUrl: './cinema.component.html',
  styleUrl: './cinema.component.css'
})
export class CinemaComponent implements OnInit{
  //public villes;
  constructor(private http:HttpClientModule) {
  }
  ngOnInit() {
    //this.http.get("http://localhost:8080/villes")
      //.subscribe()



  }

}
