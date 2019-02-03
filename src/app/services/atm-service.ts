import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ATMService {

  private moneyWithdrawalRequest = new BehaviorSubject(0);
  withdrawalRequest = this.moneyWithdrawalRequest.asObservable();

  constructor() { }

  getMoney(moneyToWithDraw: number) {
    this.moneyWithdrawalRequest.next(moneyToWithDraw)
  }

}