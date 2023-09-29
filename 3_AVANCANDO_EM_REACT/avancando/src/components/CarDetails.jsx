const CarDetails = ({marca, km, cor}) => {
  return (
    <div>
        <ul>
            <h2>Detalhe do carro</h2>
            <li>Meu carro é da marca: {marca}</li>
            <li>Meu carro anda km: {km}</li>
            <li>Meu carro é da cor: {cor}</li>
        </ul>
    </div>
  )
}

export default CarDetails