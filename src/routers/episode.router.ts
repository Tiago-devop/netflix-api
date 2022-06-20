import Router from "express"
import passport from "passport"

import { EpisodeController } from "../controllers"
import validationMiddleware from "../middlewares/validation.middleware"
import CreateEpisodeSchema from "../schemas/create-episode.schema"

const EpisodesRouter = Router()
const params = {
  session: false
}
const tokenAuth = 'jwt'

EpisodesRouter.post(
  "/episodes",
  passport.authenticate(tokenAuth, params),
  validationMiddleware(CreateEpisodeSchema),
  EpisodeController.create
)

export default EpisodesRouter
