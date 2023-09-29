

const Events = () => {
{/* 7 - evento com função */}
    const suaFuncao = () => {
        console.log("Executou")
    }
{/* 8 - Função de renderização */}
    const estouTestantoCasa = (casa) => {
        if(casa) {
           return <h1>Tem casa!</h1>;
        }else {
            return <h1>Não tem casa</h1>
        }

    };

  return (

    <div>
        <div>
            <button onClick={() => console.log("Aqui está")}>Clique aqui</button>
        </div>
{/* 7 - evento com função */}
        <div>
            <button onClick={suaFuncao}>Clica com Função</button>
        </div>
{/* 8 - Função com render */}
        {estouTestantoCasa(true)}
        {estouTestantoCasa(false)}
    </div>
  )
}

export default Events