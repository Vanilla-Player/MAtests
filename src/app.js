

import express from "express";


const app = express();




// Middlewares
app.use(express.json());

// Routes

app.get("/get", (req, res) => {
  res.send("Get Request");
  
});

app.post("/post", (req, res)=>{
  const {number, number2} = req.body

  res.json({sum: number+number2})
 
})

export default app;
