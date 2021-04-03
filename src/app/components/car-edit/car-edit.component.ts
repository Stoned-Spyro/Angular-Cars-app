import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/Car';
import { CarsService } from 'src/app/services/cars.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private location: Location, private carsService: CarsService,) { }

  car:Car

  id

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.carsService.getCar(this.id).subscribe((car) => {
      this.car = car;
    })
  }

  goBack() {
    this.location.back();
  }
  editCar(changeForm){
    var name=changeForm.value.name
    var model=changeForm.value.model
    var price=changeForm.value.price
    if(changeForm.valid){
      this.carsService.updateCar(this.id, name, model, price).subscribe()
      window.location.reload();
    }
  }
}
