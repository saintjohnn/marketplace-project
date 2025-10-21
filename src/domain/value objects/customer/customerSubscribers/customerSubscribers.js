class CustomerSubscribersError extends Error {
  constructor(message) {
    super(message)
    this.name = "CustomerSubscribersError"
    this.status = 400
  }
}

export default class CustomerSubscribers {
  validate(subscribers = 0) {
    if (typeof subscribers !== "number") {
      throw new CustomerSubscribersError(
        `subscribers must be a number, but received ${typeof subscribers}`
      )
    }

    if (subscribers < 0) {
      throw new CustomerSubscribersError(
        `subscribers must be equal to or greater than 0, but received ${subscribers}`
      )
    }

    return subscribers
  }
}
