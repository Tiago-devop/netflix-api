import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 49153,
  username: "root",
  password: "abcbanana",
  database: "netflix",
  entities: ["src/entities/*.entity.ts"],
  synchronize: true
})

async function databaseInitialize() {
  try {
    await AppDataSource.initialize()

    console.log("Banco de dados conectado")
  } catch (e: unknown) {
    console.error(e, "banco nao conectado")
  }
}

export default databaseInitialize
