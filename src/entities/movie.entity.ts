import { Entity } from "typeorm"
@Entity
class Movie {
  id: number
  title: string
}

export default Movie
