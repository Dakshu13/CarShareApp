const express = require('express')
const router = express.Router()

router.post('/CarData',(req,res)=>{
    try{
        console.log([global.car_data,global.car_Category])
        res.send([global.car_data])
    } catch (error) {
        console.error(error.message);
        res.send("Server Error")
    }
})

module.exports = router;