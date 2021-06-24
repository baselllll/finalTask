const express = require('express')
const morgan = require('morgan')
const cors = require('cors');//to aviod CROS
const app = express()
const port = 3333
const userRouter = require('./routers/user.js')
// body parser
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(morgan('tiny'))

app.use('/assets/images', express.static('./public/images'))

//routes
app.use('/api/user',userRouter)

//error message
app.use((err,req,res,next)=>{
    res.status(404).json({'msg':err})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

