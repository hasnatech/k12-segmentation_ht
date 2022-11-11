import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  menu = true;
  smallscreen = false;

  constructor() { }
}
