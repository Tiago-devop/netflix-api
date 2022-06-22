import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "./entities.type";
import Show from "./show.entity";

@Entity('users')
class User implements IUser {
  @PrimaryGeneratedColumn()
  id: IUser["id"]

  @Column({ length: 100, unique: true })
  email: IUser["email"]

  @Column({ length: 100 })
  password: IUser["password"]

  @ManyToMany(() => Show, { eager: true })
  @JoinTable()
  list: IUser["list"]
}

export default User
