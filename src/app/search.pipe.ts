import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(cars, value){
    return cars.filter((p) => p.name.includes(value)); 
  }

}
