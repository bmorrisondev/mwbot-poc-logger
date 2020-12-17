class LoggerMiddleware {
  exec(message) {
    console.log(`${message.author.username} says '${message.content}'`)
  }
}

module.exports = LoggerMiddleware