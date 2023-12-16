const ProductList = ({ products }) => (
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          {product.nome} - ${product.preco}
        </li>
      ))}
    </ul>
  );
export default function Questao4() {
  const produtos = [
  {
    id: 1,
    nome: "Camiseta",
    preco: 10.99,
  },
  {
    id: 2,
    nome: "Calça",
    preco: 19.99,
  },
  {
    id: 3,
    nome: "Saia",
    preco: 19.99,
  },
];
  
 return (
        <div>
            <h1>Lista de Produtos</h1>
            <ProductList products={products} />
        </div>
    );
}
