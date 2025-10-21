class CustomerNameError extends Error {
  constructor(message) {
    super(message)
    this.name = "CustomerNameError"
    this.status = 400
  }
}

export default class CustomerName {
  validate(name) {
    if (!name) {
      throw new CustomerNameError(`name is required, but received ${name}`)
    }
    if (typeof name !== "string") {
      throw new CustomerNameError(
        `name must be a string, but received ${typeof name}`
      )
    }
    if (name.length < 3) {
      throw new CustomerNameError(
        `name should have a length of at least 3, but received ${name.length} with name: ${name}`
      )
    }

    return name
  }
}
