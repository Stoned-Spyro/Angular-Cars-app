import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/Car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private carsService: CarsService) { }

  cars: Car[] = [];

  ngOnInit(): void {
    this.carsService.getCars().subscribe((data) => {
      this.cars = data;
      // console.log(this.cars);
      
    })
  }
}
