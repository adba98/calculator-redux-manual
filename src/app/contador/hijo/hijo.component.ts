import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { DividirAction, MultiplicarAction } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: []
})
export class HijoComponent implements OnInit {

  contador: number = 1;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador')
      .subscribe(contador => this.contador = contador);
  }

  multiplicar() {
    const accion = new MultiplicarAction(2);
    this.store.dispatch(accion);
  }

  dividir() {
    const accion = new DividirAction(2);
    this.store.dispatch(accion);
  }

}
