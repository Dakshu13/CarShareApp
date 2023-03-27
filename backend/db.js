const mongoose = require('mongoose');

const mongoURI = 'mongodb://carapp:13032001@ac-9kw01rr-shard-00-00.l28m32k.mongodb.net:27017,ac-9kw01rr-shard-00-01.l28m32k.mongodb.net:27017,ac-9kw01rr-shard-00-02.l28m32k.mongodb.net:27017/carsharemern?ssl=true&replicaSet=atlas-ohbzdl-shard-0&authSource=admin&retryWrites=true&w=majority'
const mongoDB = async () => {
    await mongoose.connect(mongoURI, { UseNewUrlParser: true }, (err, result) => {
        if (err) console.log("---", err)
        else {
            console.log("connected");
            const fetched_data = mongoose.connection.db.collection("car_data");
            fetched_data.find({}).toArray(async function (err, data) {
                const car_Category = await mongoose.connection.db.collection("car_Category");
                car_Category.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.car_data = data;
                        global.car_Category= catData;
                    }
                })
            })
        }
        })
}
    


module.exports = mongoDB;