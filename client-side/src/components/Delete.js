import React, { useState, useEffect } from "react";
import axios from "axios";
import del from "../assets/bin.png";

const Delete = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:5000/api/v1/getCredsById?userId=1")
            .then((resp) => {
                setData(resp.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    return (
        <div className="table-container">
            <table>
                <tr>
                    <th>User Name</th>
                    <th>Password</th>
                    <th>Email</th>
                    <th>URL</th>
                    <th>Comments</th>
                    <th></th>
                </tr>
                {data.map((item, index) => (
                    <tr>
                        <td key={index}>{item.userName}</td>
                        <td key={index}>{item.userPass}</td>
                        <td key={index}>{item.userEmail}</td>
                        <td key={index}>{item.url}</td>
                        <td key={index}>{item.comments}</td>
                        <td>
                            <img
                                src={del}
                                alt="submit"
                                width="25px"
                                height="25px"
                            />
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
};
export default Delete;
