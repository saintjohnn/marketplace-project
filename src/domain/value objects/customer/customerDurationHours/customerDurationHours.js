class CustomerDurationHoursError extends Error {
  constructor(message) {
    super(message)
    this.name = "customerDurationHoursError"
    this.status = 400
  }
}

export default class CustomerDurationHours {
  validate(durationHours) {
    if (!durationHours && durationHours !== 0) {
      throw new CustomerDurationHoursError(
        `durationHours is required, but received ${durationHours}`
      )
    }

    if (durationHours <= 0) {
      throw new CustomerDurationHoursError(
        `duratinhours must be greater than 0, but received ${durationHours}`
      )
    }

    if (typeof durationHours !== "number") {
      throw new CustomerDurationHoursError(
        `durationHours must be a number, but received ${typeof durationHours}`
      )
    }

    return durationHours
  }
}
