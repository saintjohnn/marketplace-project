class CustomerDescriptionError extends Error {
  constructor(message) {
    super(message)
    this.description = "CustomerDescriptionError"
    this.status = 400
  }
}

export default class CustomerDescription {
  validate(description) {
    if (!description && description !== 0) {
      throw new CustomerDescriptionError(
        `description is required, but received ${description}`
      )
    }
    if (typeof description !== "string") {
      throw new CustomerDescriptionError(
        `description must be a string, but received ${typeof description}`
      )
    }
    if (description.length < 5) {
      throw new CustomerDescriptionError(
        `description should have a length of at least 5, but received ${description.length} with description: ${description}`
      )
    }

    return description
  }
}
