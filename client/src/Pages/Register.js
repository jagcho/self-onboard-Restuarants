import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../styles/RegisterStyles.css";
const Register = () => {
  const [restaurantName, setRestaurantName] = useState("");
  const [contactName, setContactName] = useState("");
  const [Pincode, setPincode] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [Phone, setPhone] = useState("");
  const [averageDailyTransactions, setAverageDailyTransactions] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        restaurantName,
        contactName,
        Pincode,
        location,
        website,
        Phone,
        averageDailyTransactions,
      });
      console.log(res)
      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/thankyou");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
  <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTRATION FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={restaurantName}
              onChange={(e) => setRestaurantName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter RestaurantName"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your contactName "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={Pincode}
              onChange={(e) => setPincode(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Pincode"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="location"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="website URL (Optional)"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={averageDailyTransactions}
              onChange={(e) => setAverageDailyTransactions(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Average-daily-transaction"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
      </>
  );
};

export default Register;