import Koa from "koa";
import { Controller } from "../controllers";
import { AwilixContainer } from "awilix";
import { validateSchema } from "../middlewares/validate-schema";

export const handleRequest =
  (controllerInstanceName: string) => async (ctx: Koa.Context) => {
    const scopedContainer: AwilixContainer = ctx.state.container;

    const controllerInstance = scopedContainer.resolve<Controller>(
      controllerInstanceName
    );

    if (controllerInstance.schema) {
      await validateSchema(controllerInstance.schema(), ctx);
    }

    await controllerInstance.run(ctx);
  };
