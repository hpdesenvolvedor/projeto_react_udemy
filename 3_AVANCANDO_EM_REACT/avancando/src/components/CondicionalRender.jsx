const CondicionalRender = () => {
    const x = 5;

    const name = "Joao"

    return (
    
    <div>
        {/* 7 - render condicional*/}
        <h3>Isso será exibido</h3>
        {x && <p>Se x for true sim!</p>}
        {/* 8 - else*/}
        <h3>Render ternário</h3>
        {name === "Joao" ?(
            <div>
                <p>Olá João!</p>
            </div>
        ) : (
            <div>
               <p>Nome não encontrado!</p> 
            </div>
        )}
    </div>
  )
}

export default CondicionalRender