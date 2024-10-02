import { useEffect, useState } from "react"
import { IHeroes } from "../../../types/IHeroes"
import { useNavigate, useParams } from "react-router-dom"
import { heroesData } from "../../../data/heroes"
import styles from './HeroPage.module.css'
import { Button } from "react-bootstrap"

export const HeroPage = () => {
  // traer al heroe cuyo ID corresponda con el ID de la URL
  const [hero, setHero] = useState<IHeroes | null>(null)
  const {id} = useParams()

  const getHeroById = () => {
    const resultHero = heroesData.find((h) => h.id === id)
    resultHero ? setHero(resultHero) : setHero(null)
  }

  useEffect(() => {
    getHeroById()
  },[])

  // navegate para vovler atras
  const navigateBack = useNavigate()
  const handleNavigate = () => { navigateBack(-1) }
  

  return (
    <>
      {hero && (
        <div className={styles.containerHeroPage}>
          <div className={styles.containerImgHeroPage}>
            <img src={`/assets/heroes/${id}.jpg`} />
          </div>

          <div>
            <h3>{hero.superhero}</h3>

            <ul>
              <li>
                <b>Alter Ego: </b>{hero.alter_ego}
              </li>

              <li>
                <b>Publicadora: </b>{hero.publisher}
              </li>

              <li>
                <b>Pimeroa Aparicion: </b>{hero.first_appearance}
              </li>
            </ul>

            <Button variant="primary" onClick={handleNavigate}>
                Regresar
            </Button>
          </div>
        </div> 
      )}
    </>
  )
}