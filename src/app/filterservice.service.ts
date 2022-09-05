import { Injectable, Input } from '@angular/core';
import { filter } from 'rxjs';
import { Filter } from './home/filter.model';


@Injectable({
  providedIn: 'root'
})
export class FilterserviceService {

  constructor() { }
  arr: any[] = []
  getFilteredCharacters(characters: any[], filt: Filter): any {
    if (filt.name.length == 0 && filt.gender == 'all') {
      return characters
    } else if (filt.gender == 'all') {
      return characters.filter(i => i.name.toLowerCase().search(filt.name) >= 0)
    } else if (filt.name == '') {
      return characters.filter(i => i.gender.toLowerCase() == filt.gender)
    } else {
      return characters.filter(i => i.gender.toLowerCase() == filt.gender).filter(i => i.name.toLowerCase().search(filt.name) >= 0)
    }
  }

}
