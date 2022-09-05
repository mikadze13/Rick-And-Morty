import { Component, EventEmitter, OnInit, Output } from '@angular/core'; 
import { Filter } from '../home/filter.model';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { } 
  @Output()
  filterData:EventEmitter<Filter>=new EventEmitter();
  filt:Filter=new Filter()

  ngOnInit(): void {

  }
  onFilterDataChanged(){
      this.filterData.emit(this.filt)
  }
   
}
