import express from "express"
import courseRouter from "./routes/course.js"
import Errors from "./middlewares/error.js"

const app = express()

app.use(express.json())

const errors = new Errors()

app.use("/courses", courseRouter)

app.use(errors.errorHandling)

const server = app.listen(3001, () => {
  const isListening = server.listening
  const address = server.address()

  console.log(isListening)
  console.log(address)
  console.log("server is running!")
})
