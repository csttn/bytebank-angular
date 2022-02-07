import { TransferenciaService } from './../services/transferencia.service';
import { ITransferencia } from './../models/transferencia.models';
import { Component, EventEmitter, Output } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'nova-tranferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number = 0;
  destino: string = '';

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    this.service
      .adicionar({
        valor: this.valor,
        destino: this.destino,
      })
      .subscribe({
        next: (transferencia) => {
          this.limparCampos();
          this.router.navigateByUrl('extrato');
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  limparCampos() {
    this.valor = 0;
    this.destino = '';
  }
}
