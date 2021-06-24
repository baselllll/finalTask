const mongoose = require('../helpers/db_connection.js')
const express = require('express');
const User = require('../models/users.js');
var multer  = require('multer')
const {upload,uploadPhoto} = require('../helpers/upload')

const userRouter = express.Router();
userRouter.get('/all-user',(req,res,next)=>{
    User.find({}).then((data)=>{
        res.status(200).json(data)
    }).catch((err)=>{
        return next(new Error(err))
    }) 
})

userRouter.get('/all-user/:name',(req,res,next)=>{
    let name = req.params.name
    User.find({Name:name}).then((data)=>{
        res.status(200).json(data)
    }).catch((err)=>{
        return next(new Error(err))
    }) 
})

userRouter.post('/add-user',uploadPhoto,upload);
userRouter.put('/update-user/:id',(req,res,next)=>{
    let dataInserted = req.body
    let id = req.params.id
    User.findByIdAndUpdate(id,dataInserted).then(()=>{
        res.status(200).json({'success':"data is Updated"})
    }).catch((err)=>{
        return next(new Error(err))
    })
})
userRouter.delete('/delete-user/:id',(req,res,next)=>{
    let id = req.params.id
    User.findByIdAndDelete(id).then(()=>{
        res.status(200).json({'success':"data is deleted"})
    }).catch((err)=>{
        return next(new Error(err))
    })
})

userRouter.get('/get-user/:id',(req,res,next)=>{
    let id = req.params.id
    User.find({_id:id}).then((data)=>{
        res.status(200).json(data)
    }).catch((err)=>{
        return next(new Error(err))
    }) 
})
//userRouter.post('/upload',uploadPhoto,upload);
module.exports = userRouter;