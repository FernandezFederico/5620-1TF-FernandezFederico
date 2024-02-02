import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  // behaviorSubject es como un subject pero con un valor inicial indefinido
  // a diferencia de los subjects que inician como null
  private loadingTrigger$ = new BehaviorSubject<boolean>(false);

  // al ser privada no lo podia usar en app.component.ts
  //s crea un observable publico para poder usarlo en app.component
  public isLoading$ = this.loadingTrigger$.asObservable();
  // lo que permite usarlo sin acceder al next o complete

  setLoading(value: boolean): void {
      this.loadingTrigger$.next(value);
  }

  constructor() { }
}
