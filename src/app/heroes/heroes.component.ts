import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  heroes = HEROES;

  selectedHero? : Hero;

  //why '?' is here?

  onSelect(hero : Hero): void{
    this.selectedHero = hero;
  }
  
  /*onSelect(hero : Hero){
    this.selectedHero = hero;
  }*/

}
