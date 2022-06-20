import { Request } from "express";
import HTTP_STATUS from "../enums/http-status.enum";
import logger from "../infrastructure/logger/logger";
import { CustomResponse } from "../interfaces/custom-response.interface";
import UserService from "../services/user.service";

const userService = new UserService();
const winstonLogger = logger({ controller: "UserController" });

class UserController {
  public static async create(request: Request, response: CustomResponse) {
    const { body } = request;
    const { errorHandler } = response;
    try {
      const { id, email } = await userService.create(body)

      response.status(HTTP_STATUS.CREATED).json({
        id,
        email
      })
    } catch (e) {
      winstonLogger.error(`Erro ao criar usuário! Dados: ${JSON.stringify(body)}`)

      errorHandler && errorHandler(e)
    }
  }
}

export default UserController
