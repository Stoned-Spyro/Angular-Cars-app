import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/Car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  cars: Car[] = []
  constructor(private carsService: CarsService) { 
  }

  ngOnInit(): void {
    for(var i=1; i<11;i++){
      this.carsService.getCar(i).subscribe((data) => {
        this.cars.push(data)
      })
    }
  }
}
