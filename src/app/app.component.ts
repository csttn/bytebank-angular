import { ITransferencia } from './models/transferencia.models';
import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hytebank';

  constructor(private service: TransferenciaService) {}
}
