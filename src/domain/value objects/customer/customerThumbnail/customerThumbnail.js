class CustomerThumbnailError extends Error {
  constructor(message) {
    super(message)
    this.name = "CustomerThumbnailError"
    this.status = 400
  }
}

export default class CustomerThumbnail {
  validate(thumbnail) {
    if (thumbnail !== undefined && typeof thumbnail !== "string") {
      throw new CustomerThumbnailError(
        `thumbnail must be a string or undefined, but received ${typeof thumbnail}`
      )
    }
    return thumbnail
  }
}
