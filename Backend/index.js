import express from "express"
import { configDotenv } from "dotenv";
import cors from "cors";

//Routes


configDotenv();
const app = express();

//middlewares
app.use(express.json());
app.use(cors());


app.get("/",(req,res)=>{
    res.send("DHA API !")
})

app.get("*",()=>{
    res.send("")
})

//Define routes



// Universal 404 handler for undefined routes
app.use((req, res, next) => {
    res.status(404).json({
      status: 'fail',
      message: `Cannot find ${req.originalUrl} on this server!`,
    });
  });
  
  // Universal error handler
  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const status = err.status || 'error';
  
    res.status(statusCode).json({
      status,
      message: err.message,
    });
  });

const PORT = process.env.PORT || 4001;
app.listen(PORT , ()=>{
    console.log(`Server is running at port Number ${PORT}`)
})