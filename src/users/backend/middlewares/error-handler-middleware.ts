import { Middleware } from "koa";
import httpStatus from "http-status";
import { ClientError } from "../errors/client-error";

export const errorHandlerMiddleware: Middleware = async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    if (!(error instanceof ClientError)) {
      ctx.status = httpStatus.INTERNAL_SERVER_ERROR;
      ctx.body = {
        error: "Internal Server Error",
      };
      return;
    }

    ctx.status = error.statusCode;
    ctx.body = {
      error: error.message,
    };
  }
};
