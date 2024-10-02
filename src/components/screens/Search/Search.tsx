import { useEffect, useState } from "react"
import { useForm } from "../../../hooks/useForm"
import { IHeroes } from "../../../types/IHeroes"
import { heroesData } from "../../../data/heroes"
import { Form, InputGroup } from "react-bootstrap"
import { CardHeroe } from "../../ui/CardHeroes/CardHeroe"
import styles from './Search.module.css'


export const Search = () => {
  const { values, handleChange } = useForm({
    search:''
  })
  const { search } = values

  const [heroes, setHeroes] = useState<IHeroes[]>([])
  useEffect(()=>{
    const filteredHeroes = heroesData.filter(
      (h)=>h.superhero.toLowerCase().trim().includes(search)
    )

    setHeroes(filteredHeroes)
  },[search])

  return (
    <div className={styles.containerSearch}>
      <div>
        <InputGroup className="mb-3" >
          <InputGroup.Text>Ingrese heroe</InputGroup.Text>
          
          <Form.Control type="text" name='search' onChange={handleChange} />
        </ InputGroup>
      </div>

      <div className={styles.containerListHeroes}>
        {
          heroes.length > 0 ?(
            <>
              {heroes.map((hero)=>(
                <div key={hero.id} style={ {width: '80%'} }>
                  <CardHeroe hero={hero} />
                </div>
              ))}
            </>
          ) : (
            <div>
              <h2>No Coincide La busqueda</h2>
            </div>
          )
        }
      </div>
    </div>
  )
}
