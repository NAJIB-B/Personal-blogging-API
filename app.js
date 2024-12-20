const express = require("express");
const mongoose = require("mongoose");


const postRouter = require('./routes/postsRoute')
const userRouter = require("./routes/userRoute")

require("dotenv").config();
const app = express();

const DB =
  process.env.DATABASE.replace(
    "<password>",
    process.env.DATABASE_PASSWORD,
  );

mongoose.connect(DB).then(() => {
  console.log("DB connection successfull");
})

app.use(express.json())

app.use('/api/v1/posts', postRouter)
app.use('/api/v1/user', userRouter)

app.get('*', (req, res) => {
  res.status(404).send('Not found')
})

app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    status: error.status || 'error',
    message: error.message,
    code: error.statusCode || 500,
    error: error
  })
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
