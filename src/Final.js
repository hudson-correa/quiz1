import Apresentacao from "./Apresentacao";
import React from 'react';


const Final = ( props ) => {
    
    const mudaTela = props.mudaTela 

    return ( 
        <div>

            <h1> Parábens </h1>
            <p> Você terminou o Quiz. </p>
            <button onClick={ () => props.mudaTela( <Apresentacao mudaTela={mudaTela} /> ) } > Retomar ao inicio </button>

        </div>


     );
}
 
export default Final;