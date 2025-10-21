export default class Errors {
  errorHandling(err, req, res, next) {
    if (err.status === 400) {
      return res.status(err.status).json({
        message: err.message
      })
    }

    if (err.status === 404) {
      return res.status(err.status).json({
        message: "course does not exist"
      })
    }

    return res.status(500).send("Error 500: internal server error")
  }
}
