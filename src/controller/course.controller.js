import Course from "../domain/entities/courses.Entity.js"
import CustomerId from "../domain/value objects/customer/customerId/customerId.js"
import CustomerName from "../domain/value objects/customer/customerName/customerName.js"
import CustomerDescription from "../domain/value objects/customer/customerDescription/customerDescription.js"
import CustomerThumbnail from "../domain/value objects/customer/customerThumbnail/customerThumbnail.js"
import CustomerRate from "../domain/value objects/customer/customerRate/customerRate.js"
import CustomerSubscribers from "../domain/value objects/customer/customerSubscribers/customerSubscribers.js"
import CustomerDurationHours from "../domain/value objects/customer/customerDurationHours/customerDurationHours.js"
import axios from "axios"

export default class CourseController {
  async get(req, res, next) {
    try {
      const response = await axios.get("http://localhost:3000/courses")

      return res.status(200).send(response.data)
    } catch (error) {
      next(error)
    }
  }

  async post(req, res, next) {
    try {
      const {
        id,
        name,
        description,
        thumbnail,
        rate,
        subscribers,
        durationHours
      } = req.body

      const parseDatas = new Course(
        id,
        name,
        description,
        thumbnail,
        rate,
        subscribers,
        durationHours
      )

      await axios.post("http://localhost:3000/courses", parseDatas)

      return res.status(201).json({
        message: "Course successfully created!",
        course: parseDatas
      })
    } catch (error) {
      next(error)
    }
  }

  async patch(req, res, next) {
    try {
      const customerId = new CustomerId().validate(req.params.id)

      const allowedKeys = new Set([
        "rate",
        "description",
        "name",
        "thumbnail",
        "subscribers",
        "durationHours"
      ])

      const validatorMap = {
        rate: CustomerRate,
        name: CustomerName,
        description: CustomerDescription,
        thumbnail: CustomerThumbnail,
        subscribers: CustomerSubscribers,
        durationHours: CustomerDurationHours
      }

      const sanitized = Object.entries(req.body).reduce((acc, [key, value]) => {
        if (!allowedKeys.has(key)) {
          return acc
        }

        const Validator = validatorMap[key]
        if (!Validator) {
          return acc
        }

        acc[key] = new Validator().validate(value)

        return acc
      }, {})

      await axios.patch(
        `http://localhost:3000/courses/${customerId}`,
        sanitized
      )

      return res.status(200).json({
        message: "data modified successfully"
      })
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const customerId = new CustomerId().validate(req.params.id)

      await axios.delete(`http://localhost:3000/courses/${customerId}`)

      return res.status(200).json({
        message: "Course successfully deleted"
      })
    } catch (error) {
      next(error)
    }
  }
}
