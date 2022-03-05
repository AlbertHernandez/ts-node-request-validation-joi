import Joi from "joi";
import Koa from "koa";
import { Controller } from "./controller";
import { UserCreator } from "../../application/user-creator";
import { SchemasConfig } from "../middlewares/validate-schema";

export default class UsersPostController implements Controller {
  #userCreator;

  constructor(dependencies: { userCreator: UserCreator }) {
    this.#userCreator = dependencies.userCreator;
  }

  schema(): SchemasConfig {
    return {
      body: Joi.object({
        name: Joi.string().required(),
        age: Joi.number().required(),
      }),
    };
  }

  async run(ctx: Koa.Context) {
    const { name, age } = ctx.request.body as { name: string; age: number };

    const user = this.#userCreator.run(name, age);

    ctx.status = 201;
    ctx.body = user;
  }
}
