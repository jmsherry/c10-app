import express from "express";

const app = express();


// app.use((req, res, next) => {
//   console.log('hit')
//   next();
// })

app.use(express.json());
app.use(express.static("public"));

app.get("/api/v1/message", (req, res) => {
  return res.status(200).json("Special Message");
});

export default app;
