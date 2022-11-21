import React,{useEffect, useState} from 'react';
import axios from 'axios';

const TableView = () => {

    const [userList,setUserList]=useState([])
    function getData(){
        const url = "https://retoolapi.dev/3Yomoo/data"
        axios.get(url)
        .then(response => response.data)
        .then((data)=>{
            console.log(data)
            setUserList(data);
        })
    }
    useEffect(() => {
        getData()
    });

    return (
        <div className="col-12">
            <div className="col-md-10 col-12 mx-auto">
            <table className="table table-striped table-bordered">
                <thead className="thead-dark bg-primary">
                    <tr>
                        <th scope="col-3">id</th>
                        <th scope="col-3">Age</th>
                        <th scope="col-3" className="w-25">Email</th>
                        <th scope="col-3">First Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       userList.map((n)=>
                        <tr>
                            <td scope="row">{n.id}</td>
                            <td >{n.Age}</td>
                            <td className="w-25">{n.Email}</td>
                            <td>{n.firstname}</td>
                        </tr>
                       )
                    }
                    
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default TableView;
