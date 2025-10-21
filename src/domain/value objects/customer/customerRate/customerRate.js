class CustomerRateError extends Error {
  constructor(message) {
    super(message)
    this.name = "CustomerRateError"
    this.status = 400
  }
}

export default class CustomerRate {
  validate(rate = null) {
    if (rate !== null && typeof rate !== "number") {
      throw new CustomerRateError(
        `rate must be a number or null, but received ${typeof rate}`
      )
    }

    if (rate < 0 || rate > 5) {
      throw new CustomerRateError(
        `rate should be in a range between 0 and 5, but received ${rate}`
      )
    }
    return rate
  }
}
