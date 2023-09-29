import './App.css'
import MyComponents from './components/MyComponents'
import Title from './components/Title';


function App() {
  // 4 - css inline dinamico
  const n = 15;

  // 5 - classes dinamicas
  const redTitle = true
  
  return (
    <div className='App'>
      {/* 1 - CSS Global */}
      <h1>CSS no React</h1>
      {/* 2 - css de componente */}
      <MyComponents />
      {/* 3 - inline style */}
      <p style={{color: "green", padding: "25px", borderTop: "1px solid #000"}}>Este elemento tem estilos inline</p>
      {/* 4 - inline style dinamico */}
      <h2 style={n > 10 ? {color: "purple"}: {color: "magenta"}}>
        css dinamico
      </h2>
      <h2 style={n > 20 ? {color: "purple"}: {color: "magenta"}}>
        css dinamico
      </h2>
      {/* 5 - classes dinamicas */}
      <h2 className={redTitle ? "red-title" : "title"}> Este título vai ter uma classe</h2>
      {/* 6 - css modules */}
      <Title />


    </div>

    
  )
}

export default App
