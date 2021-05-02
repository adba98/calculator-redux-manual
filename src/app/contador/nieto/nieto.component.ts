import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/contador/app.reducers';
import { ResetAction } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styles: []
})
export class NietoComponent implements OnInit {

  contador: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador')
      .subscribe(contador => this.contador = contador);
  }

  reset() {
    const accion = new ResetAction();
    this.store.dispatch(accion);
  }

}
