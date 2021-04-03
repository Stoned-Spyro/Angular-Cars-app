import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Car } from 'src/app/models/Car';
import { CarsService } from 'src/app/services/cars.service';


@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.css']
})
export class MaintenanceComponent implements OnInit {

  constructor(private carsService: CarsService, private router: Router) { }

  cars: Car[] = [];
  searchStr='';

  ngOnInit(): void {
    this.carsService.getCars().subscribe((data) => {
      this.cars = data;
      // console.log(this.cars);
      
    })
  }

  showCarDetails(id) {
    this.router.navigate(['/auth/car-details', id]);
  }

  editCarsPage(id){
    this.router.navigate(['/auth/car-edit', id])
  }

  createCarPage(){
    this.router.navigate(['/auth/car-add'])
  }
  deleteCars(id){
    this.carsService.deleteCar(id).subscribe()
    window.location.reload();
  }
}
