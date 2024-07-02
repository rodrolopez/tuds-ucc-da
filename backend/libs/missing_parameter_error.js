export class MissingParameterError extends Error {
  constructor(parameter) {
    super(`Missing parameter: ${parameter}`);
    this.name = 'MissingParameterError';
  }
}
  