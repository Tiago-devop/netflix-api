import Router from "express"
import passport from "passport"

import { ShowController } from "../controllers"
import validationMiddleware from "../middlewares/validation.middleware"
import createShowSchema from "../schemas/create-show.schema"

const showsRouter = Router()
const params = {
  session: false
}
const tokenAuth = 'jwt'
const urlShows = "/shows"

showsRouter.get(urlShows, passport.authenticate(tokenAuth, params), ShowController.list)

showsRouter.get(`${urlShows}:id`, ShowController.listOne)

showsRouter.delete(`${urlShows}:id`, ShowController.delete)

showsRouter.post(urlShows, validationMiddleware(createShowSchema), ShowController.create)

export default showsRouter
