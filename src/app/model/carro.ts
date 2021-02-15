export enum CarroCor {
  Branco = 'Branco',
  Cinza = 'Cinza',
  Preto = 'Preto',
  Prata = 'Prata',
  Vermelho = 'Vermelho',
  Azul = 'Azul',
  Verde = 'Verde',
  Amarelo = 'Amarelo',
}

export class Carro {
  modelo: string;
  cor: CarroCor;
  anoLancamento: number;
  preco: number;
  reservados: number;
  quantidade: number;

  constructor(
    modelo: string,
    cor: CarroCor,
    anoLancamento: number,
    preco: number,
    quantidade: number,
  ) {
    this.modelo = modelo;
    this.cor = cor;
    this.anoLancamento = anoLancamento;
    this.preco = preco;
    this.quantidade = quantidade;
    this.reservados = 0;
  }
}