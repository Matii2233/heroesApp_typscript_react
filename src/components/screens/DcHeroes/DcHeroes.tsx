import { useEffect, useState } from "react"
import { IHeroes } from "../../../types/IHeroes"
import { heroesData } from "../../../data/heroes"
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes"

export const DcHeroes = () => {
  const [heroes, setHeroes] = useState<IHeroes[]>([])
  const handleGetHeroeDc = () => {
    const dcHeroes = heroesData.filter((hero) => hero.publisher === 'DC Comics')
    setHeroes(dcHeroes)
  }

  useEffect(() => {
    handleGetHeroeDc()
  }, [])

  return <ListHeroes heroes={heroes} title="Heroes de DC Comics" />
}