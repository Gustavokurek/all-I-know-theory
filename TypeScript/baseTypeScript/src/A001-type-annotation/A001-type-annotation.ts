/* eslint-disable */

// tipos básicos (ocorre inferência de dados)
// só tipa quando não haver nenhuma inferência

let nome: string = 'Gustavo';
let idade: number = 15;
let adulto: boolean = false;
let emoji: symbol = Symbol('%');
// let big: bigint= 10n;

// arrays

let arrayOfNumbers: Array<number> =[1,5,6,7]
let arrayOfNumbers2: number[] =[1,5,6,7]
let arrayOfStrings: Array<number> =[1,5,6,7]
let arrayOfStrings2: string[] =['Gustavo', 'Matheus']

// objetos
// ?: quando valor for opcional
let dados: {Idade:number, Cidade: string, Casado?:boolean} = {
  Idade: 18,
  Cidade: 'Irati',
  Casado: false
}

// funções

function soma(x: number, y:number): number {
  return x+y
}

const subtração: (x:number, y: number) => number = (x, y)=> x-y

