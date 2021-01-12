const _ = require('lodash')

module.exports = {
  all: [
    {
      id: 1,
      username: 'admin',
      password: 'password',
      name: 'Nik Patel',
      email: 'support@coderthemes.com',
    },
    {
      id: 2,
      username: 'user1',
      password: 'password',
      name: 'User One',
      email: 'support2@coderthemes.com',
    },
  ].map((user) => {
    return {
      ...user,
      token: `valid-token-for-${user.username}`,
    }
  }),
  authenticate({ username, password }) {
    return new Promise((resolve, reject) => {
      const matchedUser = this.all.find(
        (user) => user.username === username && user.password === password
      )
      if (matchedUser) {
        resolve(this.json(matchedUser))
      } else {
        reject(new Error('Invalid user credentials.'))
      }
    })
  },
  register({ fullname, email, password }) {
    return new Promise((resolve, reject) => {
      const matchedUser = this.all.find((user) => user.email === email)
      if (matchedUser) {
        reject(new Error('User already registered.'))
      } else {
        resolve(this.json({ fullname, email, password }))
      }
    })
  },
  reset({ email }) {
    return new Promise((resolve, reject) => {
      const matchedUser = this.all.find((user) => user.email === email)
      if (matchedUser) {
        resolve(
          this.json({
            message:
              'We have sent an email containing a link to reset password',
          })
        )
      } else {
        reject(
          new Error('We did not able to find the user matching with this email')
        )
      }
    })
  },
  findBy(propertyName, value) {
    const matchedUser = this.all.find((user) => user[propertyName] === value)
    return this.json(matchedUser)
  },
  json(user) {
    return user && _.omit(user, ['password'])
  },
}
