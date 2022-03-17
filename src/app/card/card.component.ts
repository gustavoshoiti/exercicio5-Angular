import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
 
  ngOnInit(): void {
    this.recover()
  }

  @ViewChild('inputAtividade')
  ipt!: ElementRef

  atividades: Array<string> = []
  adicionar(valor: string): void {
    this.atividades.push(valor)
    this.ipt.nativeElement.value = ''
    let arrayStr = JSON.stringify(this.atividades)
    localStorage.setItem('Dados array:', arrayStr)
    this.recover()

  }

  remover(z: string): void {
    this.atividades.splice(this.atividades.indexOf(z), 1)
    let arrStr = JSON.stringify(this.atividades)
    localStorage.setItem('Dados array:', arrStr)
    this.recover()
  }

  removerall(): void {
    this.atividades.length = 0
    let arrStr = JSON.stringify(this.atividades)
    localStorage.setItem('Dados array:', arrStr)
    this.recover()
  }

  recover(): void {
    let storage = localStorage.getItem('Dados array:')
    let arr = JSON.parse(storage || '[]')
    this.atividades = arr

  }
}

