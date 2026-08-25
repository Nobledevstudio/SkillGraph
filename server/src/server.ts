import './config/env.ts'

import app from "./app.js"

const PORT = process.env.PORT || 4000

app.get('/',(req,res)=>{
    res.send("API working Perfectly")
})

app.listen(PORT, ()=>{
    console.log(`Server Started on PORT: ${PORT}`)
})

