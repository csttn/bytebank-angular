import { HttpClient } from '@angular/common/http';
import { ITransferencia } from './../models/transferencia.models';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  listaDeTransferencias: ITransferencia[] = [];

  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaDeTransferencias = [];
  }

  get transferencias(): ITransferencia[] {
    console.log('retornei a lista das tranferencias');
    return this.listaDeTransferencias;
  }

  todas(): Observable<ITransferencia[]> {
    return this.httpClient.get<ITransferencia[]>(this.url);
  }

  adicionar(transferencia: ITransferencia): Observable<ITransferencia> {
    return this.httpClient.post<ITransferencia>(
      this.url,
      this.hidratar(transferencia)
    );
  }

  private hidratar(transferencia: ITransferencia) {
    return {
      id: Math.random(),
      ...transferencia,
      data: new Date(),
    };
  }
}
