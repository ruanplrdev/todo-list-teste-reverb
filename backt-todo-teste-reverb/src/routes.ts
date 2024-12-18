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
    method: "put",
    route: "/todo/:id",
    controller: TodoController,
    action: "update"
}, {
    method: "delete",
    route: "/todo/:id",
    controller: TodoController,
    action: "remove"
}]