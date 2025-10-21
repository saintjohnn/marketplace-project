import CustomerName from "../value objects/customer/customerName/customerName.js"
import CustomerDescription from "../value objects/customer/customerDescription/customerDescription.js"
import CustomerThumbnail from "../value objects/customer/customerThumbnail/customerThumbnail.js"
import CustomerRate from "../value objects/customer/customerRate/customerRate.js"
import CustomerSubscribers from "../value objects/customer/customerSubscribers/customerSubscribers.js"
import CustomerId from "../value objects/customer/customerId/customerId.js"
import CustomerDurationHours from "../value objects/customer/customerDurationHours/customerDurationHours.js"

export default class Course {
  constructor(
    id,
    name,
    description,
    thumbnail,
    rate,
    subscribers,
    durationHours
  ) {
    this.id = new CustomerId().validate(id)
    this.name = new CustomerName().validate(name)
    this.description = new CustomerDescription().validate(description)
    this.thumbnail = new CustomerThumbnail().validate(thumbnail)
    this.rate = new CustomerRate().validate(rate)
    this.subscribers = new CustomerSubscribers().validate(subscribers)
    this.durationHours = new CustomerDurationHours().validate(durationHours)
  }
}
