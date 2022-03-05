import Koa from "koa";
import { SchemasConfig } from "../middlewares/validate-schema";

export interface Controller {
  run(ctx: Koa.Context): Promise<void>;
  schema?(): SchemasConfig;
}
