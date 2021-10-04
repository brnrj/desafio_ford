const capitaisNorte = ['Porto Velho', 'Macapá', 'Manaus', 'Belém', 'Boa Vista', 'Palmas', 'Rio Branco'];
const capitaisSudeste = ['São Paulo', 'Belo Horizonte', 'Rio de Janeiro', 'Vitória'];
const capitaisNordeste = ['São Luís', 'Teresina', 'Fortaleza', 'Natal', 'João Pessoa', 'Recife', 'Maceió', 'Aracaju', 'Salvador'];
const capitaisSul = ['Porto Alegre','Florianópolis', 'Curitiba'];
const capitaisCentroOeste = ['Brasília', 'Goiânia', 'Cuiabá', 'Campo Grande'];

function rotaSulNorte(partida, destino, arraySul, arrayCentroOeste) {
  let passagemSul = 0;
  let passagemNorte = 0;
  if(partida === 'Porto Alegre'){
    passagemSul = arraySul.filter((element) => element !== partida).length;
  }
  else if(partida === 'Florianópolis'){
    passagemSul = 1
  }
  else if(partida === 'Curitiba'){
    passagemSul = 0
  }
  else if(['Boa Vista', 'Macapá', 'Rio Branco']. includes(destino)) {
    passagemNorte = 1;
  }
  //vamos levar em consideração que para chegar no norte temos q passar em metade dos estados da região centro-oeste

  const qtdEstados = arrayCentroOeste.length / 2;
  console.log(`Para irmos de ${partida} até ${destino} passaremos por pelo menos ${Math.trunc(passagemSul + qtdEstados + passagemNorte)} capitais`)
  return;
}
rotaSulNorte('Porto Alegre', 'Manaus', capitaisSul, capitaisNorte);

function rotaNordesteSudeste(partida, destino,) {
  let passagemNordeste = 0
  let passagemSudeste = 0;
  if(['Aracaju', 'Maceió', 'Teresina', 'Recife'].includes(partida)) {
    passagemNordeste = 1;
  }
  else if(['Fortaleza', 'São Luís', 'Joáo Pessoa'].includes(partida)){
    passagemNordeste = 2;
  } 
  else if(partida === 'Natal') {
    passagemNordeste = 3;
  } else {
    passagemNordeste = 0
  }
  if(['Rio de Janeiro', 'São Paulo'].includes(destino)){
    passagemSudeste = 1;
  }
  console.log(`Para irmos de ${partida} até ${destino} passaremos por pelo menos ${passagemNordeste + passagemSudeste} capitais`);
  return;
}
rotaNordesteSudeste('Natal', 'Rio de Janeiro');

function rotaCentroOesteNordeste(partida, destino) {
  let passagemCentroOeste = 0;
  let passagemNordeste = 0
  if(['Campo Grande', 'Cuiabá'].includes(partida)){
    passagemCentroOeste = 1;
  }
  if(['Aracaju', 'Maceió', 'Teresina', 'Recife'].includes(partida)) {
    passagemNordeste = 1;
  }
  else if(['Fortaleza', 'São Luís', 'João Pessoa'].includes(partida)){
    passagemNordeste = 2;
  } 
  else if(partida === 'Natal') {
    passagemNordeste = 3;
  } else {
    passagemNordeste = 0
  }
  console.log(`Para irmos de ${partida} até ${destino} passaremos pelo menos por ${passagemCentroOeste + passagemNordeste}`);
  return;
}