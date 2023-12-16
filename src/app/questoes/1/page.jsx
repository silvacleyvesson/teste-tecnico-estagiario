const button =  {
	display: 'center',
	padding: '10px 20px',
	fontSize: '16px',
	cursor: 'pointer',
	textAlign: 'center',
	outline: 'none',
	color: '#ffffff',
	backgroundColor: '#ff0000',
	border: 'none',
	borderRadius: '16px',
	boxShadow: '0 3px #999',
   }  
export default function Questao1() {
  const botaoClicado=()=> {
		alert("Botao Clicado!");
	 }
	return (
		<>
			<div>
		    <button style={button} onClick={botaoClicado}>Clique Aqui!</button>
			</div>
		</>
	);
}
