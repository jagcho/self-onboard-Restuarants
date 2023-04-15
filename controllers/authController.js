import merchantModel from "../models/merchantModel.js";

export const registerController = async (req, res) => {
  try {
    const { restaurantName,contactName,Pincode,location,website,Phone,averageDailyTransactions} = req.body;
    //validations
    if (!restaurantName) {
      return res.send({ message: "resturantName is Required" });
    }
    if (!contactName) {
      return res.send({ message: "contactName is Required" });
    }
    if (!Pincode) {
      return res.send({ message: "Pincode is Required" });
    }
    if(!Pincode.match(/^[0-9]{6}$/)){
      return res.send({message:"Enter Valid Pincode"})
    }
    if (!location) {
      return res.send({ message: "location  is Required" });
    }
    if (!Phone) {
      return res.send({ message: "Phone is Required" });
    }
    if(!Phone.match(/^[6-9][0-9]{9}$/)){
      return res.send({message:"enter valid phone number"})
    }
    if(!averageDailyTransactions.match(/^[0-9]{1,5}$/)){
      return res.send({message:"Enter valid Average-Daily-Transactions"})
    }

    //check user
    const exisitingUser = await merchantModel.findOne({ Phone });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register ",
      });
    }
    

    //save
    const user = await new merchantModel({
      restaurantName,
      contactName,
      Pincode,
      location,
      Phone,
      website,
      averageDailyTransactions
    }).save();

    res.status(201).send({
      success: true,
      message: "Merchant Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Registeration",
      error,
    });
  }
};




