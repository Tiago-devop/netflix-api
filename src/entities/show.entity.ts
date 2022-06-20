import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import ShowCategory from "../enums/show-category.enum"
import { IShow } from "./entities.type"
import Episode from "./episode.entity"

@Entity('shows')
class Show implements IShow {
  @PrimaryGeneratedColumn()
  id: IShow["id"]

  @Column()
  title: IShow["title"]

  @Column({ length: 100 })
  director: IShow["director"]

  @Column({ length: 200 })
  actors: IShow["actors"]

  @Column({ type: 'longtext' })
  description: IShow["description"]

  @Column({ length: 200 })
  cover: IShow["cover"]

  @Column({ type: 'enum', default: ShowCategory.MOVIE, enum: ShowCategory })
  category: IShow["category"]

  @OneToMany(() => Episode, episode => episode.show, { eager: true })
  episodes: IShow["episodes"]
}

export default Show
