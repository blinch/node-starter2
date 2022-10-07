import dotenv from 'dotenv'
import express from 'express'

dotenv.config()
const app = express()
app.use(express.json())


app.get('/', async (req, res) => {
  res.json({ message: "ok" });
})


const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`)
})