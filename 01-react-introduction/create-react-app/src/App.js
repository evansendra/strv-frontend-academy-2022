import './App.css';

import {useState} from 'react';

function App() {
  const [users, setUsers] = useState([])

  function InputElement(props) {
    return (
      <>
        <label htmlFor={props.name}>{props.label}: </label>
        <input placeholder={`Enter a ${props.name}`} id={props.name} type="text" name={props.name} />
      </>
    )
  }

  const handleOnSubmit = event => {
    event.preventDefault();
    const formData = new FormData(event.target)
    const name = formData.get('name')
    const surname = formData.get('surname')
    const newUser = { id: name + surname, name, surname }

    setUsers(prevUsers => [...prevUsers, newUser])
  }

  function removeUser(id) {
    setUsers(prevUsers => {
      return prevUsers.filter(prevUser => prevUser.id !== id)
    })
  }

  const formElement = (
    <>
      <form onSubmit={handleOnSubmit}>
        <InputElement name="name" label="First Name" />
        <br/>
        <InputElement name="surname" label="Surname" />
        <br/>
        <br/>
        <button className="button">Click me</button>
      </form>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            <span>{`${user.name} ${user.surname}`}</span>
            <input defaultValue={user.surname} />
            <button onClick={() => removeUser(user.id)}>❌</button>
          </li>
        ))}
      </ol>
    </>
  )

  // const root = ReactDOM.createRoot(rootElement)
  // root.render(formElement)

  return formElement
}

export default App;
