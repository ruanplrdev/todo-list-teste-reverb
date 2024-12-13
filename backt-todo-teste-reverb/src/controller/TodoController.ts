import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Todo } from "../entity/Todo"

export class TodoController {

    private todoRepository = AppDataSource.getRepository(Todo)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.todoRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const user = await this.todoRepository.findOne({
            where: { id }
        })

        if (!user) {
            return "unregistered user"
        }
        return user
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { title, description } = request.body;

        const user = Object.assign(new Todo(), {
            title,
            description,
        })

        return this.todoRepository.save(user)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let userToRemove = await this.todoRepository.findOneBy({ id })

        if (!userToRemove) {
            return "this user not exist"
        }

        await this.todoRepository.remove(userToRemove)

        return "user has been removed"
    }

}