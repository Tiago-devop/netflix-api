import Router from "express"

import { AuthController } from "../controllers"
import validationMiddleware from "../middlewares/validation.middleware"
import LoginSchema from "../schemas/login.schema"

const AuthRouter = Router()
const urlAuth = "/auth"

AuthRouter.post(urlAuth, validationMiddleware(LoginSchema), AuthController.login)

export default AuthRouter
