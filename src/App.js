import React, { useState } from 'react';

const formatName = (usuario) => {
  return usuario.name+" "+usuario.surname;
}

const App = () => {

  const usuario = {
    name: "Misael",
    surname: "Duarte"
  }

  return(
    <>
      <div>Meu nome é {formatName(usuario)}</div>
    </>
  );
}

export default App;
