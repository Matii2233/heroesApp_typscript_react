import { FC } from "react"
import { IHeroes } from "../../../types/IHeroes"
import { Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import styles from './CardHero.module.css'

interface ICardHeroe {
  hero: IHeroes
}

export const CardHeroe: FC<ICardHeroe> = ({ hero }) => {
  const navigate = useNavigate()

  const handleNavigateHero = () => {
    navigate(`/hero/${hero.id}`)
  }

  return (
    <Card className={styles.card} onClick={handleNavigateHero}>
      <Card.Img variant="top" src={`/assets/heroes/${hero.id}.jpg`} />

      <Card.Body>
        <Card.Title>{hero.superhero}</Card.Title>

        <Card.Text>
          <p><b>Alter Ego: {hero.alter_ego}</b></p>
          <p><b>Publicadora: {hero.publisher}</b></p>
          <p><b>Primera Aparicion: {hero.first_appearance}</b></p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
