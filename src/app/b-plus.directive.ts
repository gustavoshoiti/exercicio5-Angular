import { Directive, HostListener } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive({
  selector: '[appBPlus]'
})
export class BPlusDirective {

  constructor(
    private snack: MatSnackBar,
  ) { }
  
  @HostListener('click', ['$event'])
  darOi(evento: any): void{
    this.snack.open('Você adicionou uma atividade!', 'Ok', {duration: 5000})
    console.log(evento)
  }
}
