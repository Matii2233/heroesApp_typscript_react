import { Button, Form } from "react-bootstrap"
import styles from './Login.module.css'
import { FormEvent, useState } from "react"
import { useForm } from "../../../hooks/useForm"
import { useAppDispatch } from "../../../hooks/redux"
import { setLogin, setLogout } from "../../../redux/slices/auth"
import { useNavigate } from "react-router-dom"

export const Login = () => {
  const [typePassword, setTypePassword] = useState(false)

  const {values, handleChange} = useForm({ user:'', password:'' })
  const { user, password } = values
  
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const response = await fetch("/user.json")
    const userData = await response.json()
    const userFound = userData.users.find(
      (users: {username: string; password: string}) =>
        users.username === user && users.password === password
    )

    if (userFound) {
      dispatch(setLogin(user))
      navigate("/")
    } else {
      alert('Usuario o contraseña incorrectos')
    }
  }

  return (
    <div className={styles.containerLogin}>
      <div className={styles.containerForm}>

        <span className="material-symbols-outlined"
          style={{ fontSize: '3rem', marginBottom: '1rem' }}>account_circle
        </span>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Usuario</Form.Label>
            <Form.Control name='user' type="text" placeholder="Usuario" value={user}
            onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control name='password' placeholder="Password" value={password}
            type={typePassword ? 'text' : 'password'}
            onChange={handleChange}
            />
            <Form.Check type="switch" id="showPassword" onChange={()=>setTypePassword(!typePassword)} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Button type="submit" variant="primary">Iniciar Sesion</Button>{' '}
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}
