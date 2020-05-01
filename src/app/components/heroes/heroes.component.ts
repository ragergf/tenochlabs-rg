import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;

  constructor( private _heroesService: HeroesService,
               private router: Router,
               private activatedRoute: ActivatedRoute
               ) {
    this.activatedRoute.params.subscribe( params => {
      this.termino = undefined;
      this.termino = params[ 'termino' ];
      console.log(params[ 'termino' ]);

      if (this.termino === undefined)
      {
        this.heroes = this._heroesService.getHeroes();
      } else {
        this.heroes = this._heroesService.buscarHeroe(this.termino);
      }  

    } );

  }

  ngOnInit() {
  }

  verHeroe(idx: number){
    this.router.navigate(['/heroe', idx]);
  }

}
