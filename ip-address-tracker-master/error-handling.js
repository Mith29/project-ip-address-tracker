export class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
}

export class DataError extends Error {
  constructor(message) {
    super(message);
    this.name = "DataError";
  }
}