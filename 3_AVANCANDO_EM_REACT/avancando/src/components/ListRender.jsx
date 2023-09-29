import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Matheus", "Henrique", "Andre"])

    const [users, setUsers] = useState([
        {id: 1, name: "Henrique", age: 32},
        {id: 2, name: "Pedro", age: 30},
        {id: 3, name: "Lucas", age: 35},
    ])

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => 
        prevUsers.filter((user) => randomNumber !== user.id)
        );

    }

  return (
    <div>
        {/* 4 - render sem key, não fazer dessa forma */}
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        {/* 4 - render com key */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age} anos</li>
            ))}
        </ul>
        {/* 6 - previus state */}
        <button onClick={deleteRandom}>Delete randim user</button>
    </div>
  )
}

export default ListRender