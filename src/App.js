import Apresentacao from "./Apresentacao";
import React from 'react';


function App() {

const[ tela, mudaTela ] = React.useState(null );
if( tela == null ){
  mudaTela(<Apresentacao mudaTela={mudaTela}/>)
}
  return (
    <div className="a" >
      <h1> QUIZ </h1>
      {tela}

    </div>
  );
}

export default App;
