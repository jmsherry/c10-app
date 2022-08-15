import app from './app.js'

const {
  PORT=4000
} = process.env

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})