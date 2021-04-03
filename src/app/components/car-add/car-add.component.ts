import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarsService } from 'src/app/services/cars.service';
import { Car } from 'src/app/models/Car';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  constructor(private location: Location,private carsService: CarsService) { }

  cars: Car[] = [];

  ngOnInit(): void {
    this.carsService.getCars().subscribe((data) => {
      this.cars = data;
      // console.log(this.cars);
      
    })
  }
  goBack(){
    this.location.back();
  }
  
  addCar(carForm){
    var id = this.cars.length+1
    var name = carForm.value.name
    var model = carForm.value.model
    var price = Number(carForm.value.price)
    if(carForm.valid){
      this.carsService.addCar(id, name, model, price).subscribe()
      window.location.reload();
    }
  }  
}
