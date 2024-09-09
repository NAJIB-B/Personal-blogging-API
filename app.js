const express = require("express");
const mongoose = require("mongoose");


const postRouter = require('./routes/postsRoute')

require("dotenv").config();
const app = express();

const DB =
  process.env.DATABASE.replace(
    "<password>",
    process.env.DATABASE_PASSWORD,
  );

mongoose.connect(DB).then(() => {
  console.log("DB connection successfull");
}).catch((err) => {
  console.log(err)
})

app.use(express.json())

app.use('/api/v1/posts', postRouter)

app.get('*', (req, res) => {
  res.status(404).send('Not found')
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
