import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  heroes: Hero[]=[];

  selectedHero? : Hero;

  //why '?' is here?

  onSelect(hero : Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }
  
  /*onSelect(hero : Hero){
    this.selectedHero = hero;

    *Void
  }*/

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

}
