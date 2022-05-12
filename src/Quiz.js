import Final from "./Final";
import React from 'react';


const Quiz = ( props ) => {

    const mudaTela = props.mudaTela

    const [ etapa, mudaEtapa ]= React.useState(0);

    const [ pontos, mudaPontos ] = React.useState(0);

    const perguntas =[ 

        { 

            pergunta: " Qual a cor do cavalo branco de Napoleão ",
            resposta:["Preto","Amaralelo","Branco","Azul","Roxo"],
            correta: [0]
        },
        { 

            pergunta: " Qual a cor do Sol? ",
            resposta: ["Preto","Amaralelo","Branco","Azul","Neon"],
            correta: [1]
        }

    ];

    const respostaCerta = (i) => {
        const resposta_correta = perguntas [ etapa ].correta;

        if( resposta_correta == i ){
            mudaPontos( pontos + 5 );
        }

        if( etapa + 1 < perguntas.length ){
            mudaEtapa( etapa + 1) 
        }else{
            mudaTela(<Final Mudatela={mudaTela} />)
        }

    }

    return ( 
        <div>

                        <p> Você tem {pontos} </p>
                        <h1> { perguntas [etapa].pergunta } </h1>      
                        <ul>
                            {

                                perguntas [ etapa ].resposta.map((r) =>{
                                    return <li onClick={ () => respostaCerta() }> {r} </li>
                                })
                            } 

                        </ul> 
                        
                    
   
        </div>
     );
}
 
export default Quiz;