// import { useState } from "react";
// import Personal from "./personal";

export default function Dashboard({personalForm}) {
    if (!personalForm) {
        return (
            <div className="profile">
                <h2>User Profile</h2>
                <p>No personal data available yet.</p>
            </div>
        );
    }

    return(
        <div className="profile">
            <h2>User Profile</h2>
            <div className="profile-details">
                <p>Firstname: {personalForm.name}</p>
                <p>Lastname: {personalForm.surname}</p>
                <p>ID no.: {personalForm.id}</p>
                <p>Email: {personalForm.email}</p>
                <p>Phone no.: {personalForm.number}</p>
            </div>
        </div>
    );
}