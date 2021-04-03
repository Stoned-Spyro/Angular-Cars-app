import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/Car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private carsService: CarsService,
    private location: Location
    ) { }


    car: Car;

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.carsService.getCar(id).subscribe((car) => {
      this.car = car;
    })
  }

  goBack() {
    this.location.back();
  }

}
