import "reflect-metadata"
import * as dotenv from 'dotenv';
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Todo } from "./entity/Todo"
dotenv.config();

export const AppDataSource = new DataSource({
    type: 'postgres', // *achar um jeito de passar por env sem dar erro de tipo
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT), // *achar um jeito de passar por env sem dar erro de tipo
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [User, Todo],
    migrations: [],
    subscribers: [],
});
