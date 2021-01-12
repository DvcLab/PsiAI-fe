const Users = require('../resources/users')

module.exports = (app) => {
  // Log in a user with a username and password
  app.post('/api/session', (request, response) => {
    Users.authenticate(request.body)
      .then((user) => {
        response.json(user)
      })
      .catch((error) => {
        response.status(400).json({ message: error.message })
      })
  })

  // Register a user with a fullname, email and password
  app.post('/api/register', (request, response) => {
    Users.register(request.body)
      .then((user) => {
        response.json(user)
      })
      .catch((error) => {
        response.status(400).json({ message: error.message })
      })
  })

  // reset password
  app.post('/api/reset', (request, response) => {
    Users.reset(request.body)
      .then((data) => {
        response.json(data)
      })
      .catch((error) => {
        response.status(400).json({ message: error.message })
      })
  })

  // Get the user of a provided token, if valid
  app.get('/api/session', (request, response) => {
    const currentUser = Users.findBy('token', request.headers.authorization)

    if (!currentUser) {
      return response.status(401).json({
        message:
          'The token is either invalid or has expired. Please log in again.',
      })
    }

    response.json(currentUser)
  })
}
