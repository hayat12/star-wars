import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmComponent } from './film.component';
import { FILMS } from 'src/app/mock/films';
import { FilmsInterface } from '../../interfaces/films.interface';
import { RouterTestingModule } from '@angular/router/testing';

describe('FilmComponent', () => {
    let component: FilmComponent;
    let fixture: ComponentFixture<FilmComponent>;
    const filmMockData:FilmsInterface = FILMS.results[0];

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FilmComponent],
            imports: [RouterTestingModule]
        });

        fixture = TestBed.createComponent(FilmComponent);
        component = fixture.componentInstance;
        component.film = filmMockData;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should display the film correctly', () => {
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        const fileTitle = compiled.querySelector('#file-title').textContent;
        expect(fileTitle).toContain(filmMockData.title);
      });
});
