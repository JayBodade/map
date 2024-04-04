const express = require('express');
const fs = require('fs');
const cors = require('cors');







const app = express();

app.use(cors());
const connectTodDb = require('./database/init');
connectTodDb();
const locationModel = require('./database/models/location');

app.use(express.json());


app.get('/pincode',async (req,res)=>{
   try{
    let data = await locationModel.find({POSTAL_CODE:req.query.pincode,COUNTRY:req.query.country});
  return res.json(data);
   }catch(err){
    return res.json({error:err.message});
   }
})



// app.get('/countzip',async(req,res)=>{
//   try{
//     let data = await locationModel.find({COUNTRY:"US"});
//     const uniquePostalCodes = await locationModel.distinct('POSTAL_CODE', { COUNTRY: 'US' });
    
//     // console.log(unique.length);
//       console.log('Total count of unique postal codes:', uniquePostalCodes.length);
//     return res.json(data.length);

//   }catch(err){
//     return res.json({error:err.message});
//   }
  
// })



// app.get('/addrecords',async (req,res)=>{

//   try {
//     const csvFilePath = 'allCountriesCSV.csv';
//     const jsonArray = await csvtojson().fromFile(csvFilePath);


//     const batchSize = 100; // Adjust the batch size as needed
//     const numBatches = Math.ceil(jsonArray.length / batchSize);
//     // console.log(jsonArray[100]);
//     for (let i = 0; i < numBatches; i++) {
//         const startIdx = i * batchSize;
//         const endIdx = Math.min((i + 1) * batchSize, jsonArray.length);
//         const batch = jsonArray.slice(startIdx, endIdx);

//         await locationModel.insertMany(batch);

//         console.log(`Batch ${i + 1}/${numBatches} inserted`);
//     }


//   } catch (error) {
//     console.error('Error reading file synchronously:', error);
//   }
  
//   return res.json("added to database");


// })

app.get('/',(req,res)=>{
    return res.send("Hello body");
})





app.listen(80,()=>{
    console.log("serever running at http://localhost:80")
})  