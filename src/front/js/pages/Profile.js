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
        <div>
            <h1>{store.user?.email}</h1>
        </div>
    </>
}

export default Profile;