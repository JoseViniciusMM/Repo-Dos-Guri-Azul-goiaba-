let argumentos = process.argv.slice(2)

let dia = parseInt(argumentos[0])
let mes = parseInt(argumentos[1])
let ano = parseInt(argumentos[2])

// Verifica se o ano é bissexto
function eBissexto(ano) {
  return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

// Verifica se os valores são positivos
if (dia <= 0 || mes <= 0 || ano <= 0) {
  console.log("Data inválida: O dia, mês e ano devem ser valores positivos e diferentes de zero.");
  return;
}

// Mês entre 1 e 12
if (mes > 12) {
  console.log("Data inválida: O mês deve ser um valor entre 1 e 12.");
  return;
}

// Dia máximo de 31
if (dia > 31) {
  console.log("Data inválida: O dia deve ser um valor entre 1 e 31.");
  return;
}

// Verifica meses com 30 dias
const mesesCom30 = [4, 6, 9, 11];
if (mesesCom30.includes(mes) && dia > 30) {
  console.log("Data inválida: Este mês só pode ter até 30 dias.");
  return;
}

// Verifica fevereiro e ano bissexto
if (mes === 2) {
  const limite = eBissexto(ano) ? 29 : 28;
  if (dia > limite) {
    console.log(`Data inválida: Fevereiro no ano ${ano} só pode ter até ${limite} dias.`);
    return;
  }
}

// Cria objeto Date e imprime em formato ISO /pesquisei essa poha aqui no stackoverflow
const dataUTC = new Date(Date.UTC(ano, mes - 1, dia));
console.log("Data válida.");
console.log("Formato ISO 8601 (UTC):", dataUTC.toISOString()); 
