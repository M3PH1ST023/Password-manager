import React, { useState } from "react";
import "../css/pages.css";
import axios from "axios";

const Add = () => {
    const [formData, setFormData] = useState({
        userName: "",
        userPass: "",
        userEmail: "",
        url: "",
        comments: "",
    });
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const data = {
            userId: 1,
            credId: 3,
            userName: formData.userName,
            userPass: formData.userPass,
            userEmail: formData.userEmail,
            url: formData.url,
            comments: formData.comments,
        };
        axios
            .post("http://127.0.0.1:5000/api/v1/addCreds", data)
            .then((resp) => {
                console.log("Data posted:", resp.data);
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (
        <div className="page-form">
            <div className="form">
                <form
                    className="form"
                    method="post"
                    id="form"
                    onSubmit={handleFormSubmit}
                >
                    <div className="inputBox">
                        <input
                            type="text"
                            id="userName"
                            placeholder="Username"
                            name="userName"
                            value={formData.userName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="inputBox">
                        <input
                            type="password"
                            id="userPass"
                            placeholder="Password"
                            name="userPass"
                            value={formData.userPass}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="inputBox">
                        <input
                            type="email"
                            id="userEmail"
                            placeholder="Email"
                            name="userEmail"
                            value={formData.userEmail}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="inputBox">
                        <input
                            type="text"
                            id="url"
                            placeholder="URL"
                            name="url"
                            value={formData.url}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="inputBox">
                        <input
                            type="text"
                            id="comments"
                            placeholder="Comments"
                            name="comments"
                            value={formData.comments}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="inputBox">
                        <button type="submit" className="inputBox">
                            Add Credentials
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Add;
