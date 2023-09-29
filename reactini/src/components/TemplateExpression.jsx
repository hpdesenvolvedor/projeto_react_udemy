// 4- Template expression

const TemplateExpression = () => {

    const name = "Henrique"

    const data = {
        age: 20,
        job: "programador",
    }
  return (
    <>
    <p>A soma é {2 + 2}</p>
    <h3>Bem vindo {name}</h3>
    <p>Você tem {data.age} e sua profissao é {data.job}</p>
    </>
  )
}

export default TemplateExpression