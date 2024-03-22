import React, {
    useEffect, useContext
} from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from 'react-router-dom'; // Import Link for routing

const Profile = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        if (!store.token) {
            navigate("/login");
        } else {
            actions.get_current_user();
        }
    }, [])

    return <>
          <div className="container">
    <div style={{ width: "100%", postion: "inline-block" }}>
      <img
        src="https://www.quantico.marines.mil/portals/147/Templates/Under%20Construction.jpg?ver=AEqzBgQL0jaMD0aQbmwkMg%3D%3D"
        style={{ height: "300px", width: "100%" }}
      ></img>
      {/* <img
        className="profilePic"
        // src="https://static.vecteezy.com/system/resources/thumbnails/030/504/836/small/avatar-account-flat-isolated-on-transparent-background-for-graphic-and-web-design-default-social-media-profile-photo-symbol-profile-and-people-silhouette-user-icon-vector.jpg"
        style={{
          height: "200px",
          width: "230px",
          right: "43.5%",
          objectFit: "cover",
          top: "15%",
          position: "absolute",
        }}
      ></img> */}
    </div>
    <h2 style={{
          right: "40%",
          top: "45%",
          position: "absolute",
        }}>Check back soon!</h2>
        <Link to="/previous-orders">Order History</Link>
        <span style={{ margin: "0 16px" }}>|</span>
        <Link to="/current-orders">Order Tracking</Link>
        <span style={{ margin: "0 16px" }}>|</span>
        <Link to="/current-orders">Review History</Link>
        <span style={{ margin: "0 16px" }}>|</span>
        <Link to="/current-orders">Profile Information</Link>
        <span style={{ margin: "0 16px" }}>|</span>
        <Link to="/current-orders">Become a Vendor</Link>
        <span style={{ margin: "0 16px" }}>|</span>
        <Link to="/current-orders">Customer Support</Link>
   
    </div>
  
    </>
}

export default Profile;