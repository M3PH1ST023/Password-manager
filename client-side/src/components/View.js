import React, { useEffect, useState } from "react";
import "../css/pages.css";
import axios from "axios";
const View = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get("http://127.0.0.1:5000/api/v1/getCredsById?userId=2")
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
                </tr>
                {data.map((item, index) => (
                    <tr>
                        <td key={index}>{item.userName}</td>
                        <td key={index}>{item.userPass}</td>
                        <td key={index}>{item.userEmail}</td>
                        <td key={index}>{item.url}</td>
                        <td key={index}>{item.comments}</td>
                    </tr>
                ))}
            </table>
        </div>
    );
};
export default View;
