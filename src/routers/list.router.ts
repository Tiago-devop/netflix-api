import Router from "express"
import passport from "passport"
import ListController from "../controllers/list.controller"
import injectUser from "../middlewares/inject-user.middleware"

const ListRouter = Router()

const params = {
  session: false
}
const tokenAuth = 'jwt'
const urlList = "/list"

ListRouter.get(urlList, passport.authenticate(tokenAuth, params), injectUser, ListController.list)

ListRouter.post(urlList, passport.authenticate(tokenAuth, params), injectUser, ListController.add)

ListRouter.delete(`${urlList}:showId`, passport.authenticate(tokenAuth, params), injectUser, ListController.remove)

export default ListRouter
