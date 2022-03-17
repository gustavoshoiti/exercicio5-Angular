import { Directive, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive({
  selector: '[appTodoDirectiva]'
})
export class TodoDirectivaDirective {

  constructor(private snack: MatSnackBar) { }


  @HostListener('click', ['$event'])
  darOi(evento: any): void{
    this.snack.open('Você Limpou Tudo!', 'Ok', {duration: 5000})
    console.log(evento)
  }
}
