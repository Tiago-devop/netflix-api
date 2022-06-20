import { Request } from "express";
import HTTP_STATUS from "../enums/http-status.enum";
import { CustomResponse } from "../interfaces/custom-response.interface";
import EpisodeService from "../services/episode.service";

const episodeService = new EpisodeService()

class EpisodeController {
  public static async create(request: Request, response: CustomResponse) {
    const { errorHandler } = response
    try {
      const { body } = request;

      const createdEpisode = await episodeService.create(body)

      response
        .status(HTTP_STATUS.CREATED)
        .json(createdEpisode)
    } catch (e) {
      errorHandler && errorHandler(e)
    }
  }
}

export default EpisodeController
