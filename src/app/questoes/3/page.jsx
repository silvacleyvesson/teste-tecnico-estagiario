export default function Questao3() {
    
  function somaDeNumerosPares(arr) {
        return arr.reduce((soma, numero) => (numero % 2 === 0 ? soma + numero : soma), 0);
      }
      let numerosInteiros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      let soma = somaDeNumerosPares(numerosInteiros);

      return (
        <>
          <h1>Questão 3</h1>
          <p>Soma: {soma}</p>
        </>
      );
}
