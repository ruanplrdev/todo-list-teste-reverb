import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Todo } from "./entity/Todo"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "postgres",
    password: "postgresadmin",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [User, Todo],
    migrations: [],
    subscribers: [],
})
