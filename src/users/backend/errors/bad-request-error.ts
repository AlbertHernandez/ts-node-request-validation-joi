import { ClientError } from "./client-error";
import httpStatus from "http-status";

export class BadRequestError extends ClientError {
  constructor({ message }: { message: string }) {
    super({ message, statusCode: httpStatus.BAD_REQUEST });
  }
}
