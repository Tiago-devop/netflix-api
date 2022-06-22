import Router from "express"
import { UserController } from "../controllers"

import validationMiddleware from "../middlewares/validation.middleware"
import CreateUserSchema from "../schemas/create-user.schema"

const UserRouter = Router()
const urlUser = "/user"

UserRouter.post(urlUser, validationMiddleware(CreateUserSchema), UserController.create)

export default UserRouter
