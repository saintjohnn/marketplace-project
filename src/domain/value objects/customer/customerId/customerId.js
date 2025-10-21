import { randomUUID } from "node:crypto"

class CustomerIdError extends Error {
  constructor(message) {
    super(message)
    this.name = "CustomerIdError"
    this.status = 400
  }
}

export default class CustomerId {
  validate(id = randomUUID()) {
    if (!id) {
      throw new CustomerIdError(`id is required, but received ${id}`)
    }

    if (typeof id !== "string") {
      throw new CustomerIdError(
        `id must be a string, but received ${typeof id}`
      )
    }

    if (id.length < 3) {
      throw new CustomerIdError(
        `id should have a length of at least 3, but received ${id.length} with id: ${id}`
      )
    }

    return id
  }
}
