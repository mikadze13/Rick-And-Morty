import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Info } from '../info.model';
import { RickproxyService } from '../rickproxy.service';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrls: ['./character-info.component.css']
})
export class CharacterInfoComponent implements OnInit {

  sliderCharacters:any[]=[]
  alterEgos:any[]=[]
  constructor(private rickproxy:RickproxyService,private activeRoute:ActivatedRoute) {} 
  ngOnInit(): void {
    this.rickproxy.getAllCharacters().subscribe((response:any)=>{
      this.activeRoute.queryParams.subscribe((params:any)=>{
        var name=params['name']
        var status=params['status']
        this.rickproxy.getAllCharactersAlterEgos(name,status).subscribe((response:any)=>{
          this.alterEgos=response
          console.log(this.alterEgos)
        })
      })
    })
  }

}
