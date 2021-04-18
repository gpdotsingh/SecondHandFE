import { Pipe, PipeTransform } from '@angular/core';
import { CarDetails } from '../model/page';

@Pipe({
  name: 'carDetaiils'
})
export class CarDetaiilsPipe implements PipeTransform {

  transform(requestmap: any): CarDetails {
    var carDetails:CarDetails;
    carDetails=requestmap;
    return carDetails;
  }

}
