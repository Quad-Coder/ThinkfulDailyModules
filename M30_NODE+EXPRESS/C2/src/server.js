const { PORT = 5069 } = process.env

const app = require('./app')

app.listen(PORT, () => console.log('yo'))