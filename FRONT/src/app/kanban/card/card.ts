export interface Cards extends Array<Card> {}

export interface Card {
  id: number;
  titulo: string;
  conteudo: string;
  lista: string;
}
