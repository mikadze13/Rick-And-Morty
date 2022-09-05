import { Component, OnInit } from '@angular/core'; 
import { FilterserviceService } from '../filterservice.service';
import { RickproxyService } from '../rickproxy.service';
import { Filter } from './filter.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:RickproxyService,private filterserv:FilterserviceService) { }
  allCharacters:any[]=[]
  sliderCharacters:any[]=[]
  renderCharacters:any[]=[]
  ngOnInit(): void {
      this.http.getAllCharacters().subscribe((response:any)=>{
        this.renderCharacters=response
        this.allCharacters=response
        var rand=Math.floor(Math.random()*this.allCharacters.length-3)
        this.sliderCharacters=this.allCharacters.splice(rand,3)
        console.log(this.sliderCharacters)
      })
  } 
  onFilterChanged(event:Filter){
      this.renderCharacters=this.filterserv.getFilteredCharacters(this.allCharacters,event)
      console.log(this.renderCharacters)
  }
}
