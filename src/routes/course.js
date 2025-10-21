import { Router } from "express"
import CourseController from "../controller/course.controller.js"

const courseRouter = Router()
const courseController = new CourseController()

courseRouter
  .get("/", courseController.get)
  .post("/", courseController.post)
  .patch("/:id", courseController.patch)
  .delete("/:id", courseController.delete)

export default courseRouter
