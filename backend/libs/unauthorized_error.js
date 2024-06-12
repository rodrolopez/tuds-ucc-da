export class UnauthorizedError extends Error {
    constructor(message = 'Unauthorized') {
        super(message);
        this.name = this.constructor.name;
        this.statusCode = 401;
    }
}