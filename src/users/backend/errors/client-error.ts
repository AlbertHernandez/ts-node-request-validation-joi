export class ClientError extends Error {
  readonly statusCode;

  constructor({
    message,
    statusCode,
  }: {
    message: string;
    statusCode: number;
  }) {
    super(message);
    this.statusCode = statusCode;
  }
}
