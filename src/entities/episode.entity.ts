import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IEpisode } from "./entities.type";
import Show from "./show.entity";

@Entity('episodes')
class Episode implements IEpisode {
  @PrimaryGeneratedColumn()
  id: IEpisode["id"];

  @Column()
  title: IEpisode["title"];

  @Column({ type: "text" })
  description: IEpisode["description"];

  @Column()
  cover: IEpisode["cover"];

  @Column()
  duration: IEpisode["duration"];

  @ManyToOne(() => Show, show => show.episodes)
  show: IEpisode["show"]
}

export default Episode
