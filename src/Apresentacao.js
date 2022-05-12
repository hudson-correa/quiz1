import Quiz from "./Quiz";

const Apresentacao = (props) => {

    const mudaTela = props.mudaTela

    return ( 
        <div>

            <p> Bem-vindo ao meu mundo </p>
            <p> Você está pronto para começar? </p>
            <button onClick={ () => mudaTela( <Quiz mudaTela={mudaTela} /> ) } > Começar </button>

        </div>
     );
}
 
export default Apresentacao ;