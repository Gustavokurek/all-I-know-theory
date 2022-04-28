type car = {
  brand: string;
  year: number;
};

type carro = {
  marca: car['brand'];
  ano: car['year'];
  nome: string;
};

const carro: car = {
  brand: 'BMW',
  year: 2022,
};
