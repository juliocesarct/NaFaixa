import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { Courtesy } from '../model/courtesy';
import { CourtesyService } from '../services/courtesy.service';

@Component({
  selector: 'app-courtesy-list',
  templateUrl: './courtesy-list.component.html',
  styleUrls: ['./courtesy-list.component.scss']
})
export class CourtesyListComponent implements OnInit {

  courtesies$!: Observable<Courtesy[]>;

  constructor( private courtesyService: CourtesyService ) {}

  ngOnInit(): void {
    this.courtesies$ = this.courtesyService.getCourtesy().pipe( tap( dados => console.log(dados) )) ;
    //this.courtesyService.getcourtesy().subscribe( dados => this.courtesy = dados  )
  }

}
