import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { RickproxyService } from '../rickproxy.service';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {  
  episodes:any[]=[]
  constructor(private rickproxy:RickproxyService,private activeRoute:ActivatedRoute) {} 
  ngOnInit(): void { 
    this.rickproxy.getAllEpisodes().subscribe((response:any)=>{
      this.rickproxy.getAllEpisodes().subscribe((response:any)=>{
        this.episodes=response
        console.log(this.episodes)
      })
    })
  }
}