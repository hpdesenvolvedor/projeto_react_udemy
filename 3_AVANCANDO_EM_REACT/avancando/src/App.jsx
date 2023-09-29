import './App.css'

// 2 - Imagem em assets

import night from'./assets/night.jpg'

import CondicionalRender from './components/CondicionalRender'

// 3 - useState
import Data from'./components/Data'

// 4 - redenrização de lista
import ListRender from './components/ListRender'

// 5 - props
import ShowUserName from './components/ShowUserName'

// 9 - desestruturando props
import CarDetails from './components/CarDetails'

// 11 - renderização de listas com componentes
const cars = [
  { id:1, marca: "Ferrari", cor: "Amarelo", km: 0 },
  { id:2, marca: "kia", cor: "Branco", km: 200000 },
  { id:3, marca: "Renault", cor: "Azul", km: 32000 },
];

// 12 - Fragments
import Fragment from './components/Fragment'

// 13 - children
import Container from './components/Container'

// 14 - função em prop
import ExecuteFuntion from './components/ExecuteFuntion'

//15 state lift
import { useState } from 'react'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'



function App() {

  //14 - funcao em prop
  function showMessage() {
    console.log("Evento do componente pai")
  }

  // 15 - state lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <>
      <div className='App' style={{paddingBottom: "500px"}}>
          <h1>Avançando em React</h1>
          {/* 1 - imagem em public */}
          <img src="/img.jpg" alt="Imagem de uma rua vazia" />
          {/* 2 - imagem em assets*/}
          <img src={night} alt="Outra imagem" />
          {/* 3 - useState*/}
          <Data />
          {/* 4 - render de lista*/}
          <ListRender />
          {/* 7 - render condicional*/}
          <CondicionalRender />
          {/* 8 - recebendo props*/}
          <ShowUserName name="Henrique" />
          {/* 9 - desestruturando props*/}
          <CarDetails marca="Pegeot" modelo={208} cor="branco" />
          {/* 10 - reaproveitamento de componentes*/}
          <CarDetails marca="Pegeot" modelo={208} cor="branco" />
          <CarDetails marca="Hyndai" modelo="Hb20" cor="preto" />
          {/* 11 - renderização de lista com componentes*/}
          {cars.map((car) => (
            <CarDetails key={car.id} marca={car.marca} cor={car.cor} km={car.km} />
          ))};
          {/* 12 - fragments */}
          <Fragment />
          {/* 13 - children */}
          <Container>
            <p>Alguma coisa</p>
          </Container>
          {/* 13 - funções */}
          <ExecuteFuntion myFunction={showMessage} />
          {/* 15 - state lift */}
          <Message msg={message}/>
          <ChangeMessage handleMessage={handleMessage} />
          

          


      </div>
    </>
  )
}

export default App
