import { Injectable } from '@angular/core';

//angular should be able to inject dependencies of this class into it's constructor
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() { }
}
