import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { MovieState } from '../../store/movie.state';
import { filmsActions } from '../../store/films.actions';

@Component({
  selector: 'sw-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.sass']
})
export class CharacterComponent implements OnInit{
  data$ = this.store.select((state)=>state.movie.characterKeyFeature);
  constructor(private route:ActivatedRoute, private store:Store<{movie: MovieState}>){}
  ngOnInit(): void {
    this.route.params
    .subscribe({next: ({link})=>{
      this.store.dispatch(filmsActions.character({link}))
    }})
  }
}
