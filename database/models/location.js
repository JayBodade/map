const mongoose = require('mongoose');



const locationSchema = new mongoose.Schema({
    COUNTRY: { type: String },
  POSTAL_CODE: { type: String },
  CITY: { type: String },
  STATE: { type: String },
  SHORT_STATE: { type: String },
  COUNTY: { type: String },
  SHORT_COUNTY: { type: String },
  COMMUNITY: { type: String },
  SHORT_COMMUNITY: { type: String },
  LATITUDE: { type: Number },
  LONGITUDE: { type: Number },
  ACCURACY: { type: Number }
})

const locationModel = mongoose.model('location',locationSchema);




module.exports = locationModel;