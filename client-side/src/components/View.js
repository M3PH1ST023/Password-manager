import React from "react";
import "../css/pages.css";

const View = () => {
    return (
        <div className="table-container">
            <h2 className="table-head">Crential Stored By </h2>
            <table>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Password</th>
                        <th>User Email</th>
                        <th>URL</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    <tr></tr>
                    <tr>
                        <td>Cell 1</td>
                        <td>Cell 2</td>
                        <td>Cell 3</td>
                        <td>Cell 4</td>
                        <td>Cell 5</td>
                    </tr>
                    <tr>
                        <td>Cell 1</td>
                        <td>Cell 2</td>
                        <td>Cell 3</td>
                        <td>Cell 4</td>
                        <td>Cell 5</td>
                    </tr>
                    <tr>
                        <td>Cell 1</td>
                        <td>Cell 2</td>
                        <td>Cell 3</td>
                        <td>Cell 4</td>
                        <td>Cell 5</td>
                    </tr>
                    <tr>
                        <td>Cell 1</td>
                        <td>Cell 2</td>
                        <td>Cell 3</td>
                        <td>Cell 4</td>
                        <td>Cell 5</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
export default View;
