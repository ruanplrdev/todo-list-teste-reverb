import { TodoController } from "./controller/TodoController"

export const Routes = [{
    method: "get",
    route: "/todos",
    controller: TodoController,
    action: "all"
}, {
    method: "get",
    route: "/todo/:id",
    controller: TodoController,
    action: "one"
}, {
    method: "post",
    route: "/todo",
    controller: TodoController,
    action: "save"
}, {
    method: "delete",
    route: "/todo/:id",
    controller: TodoController,
    action: "remove"
}]