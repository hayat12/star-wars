import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FilmsInterface } from '../../interfaces/films.interface';

@Component({
  selector: 'sw-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmComponent {
  @Input({required: true}) film!: FilmsInterface;

}
