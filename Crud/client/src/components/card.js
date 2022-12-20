import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Card(){

   const  [servicedetails,setServicedetails]= useState([]);

    useEffect(()=>{
        fetch("http://localhost:3002/personalinfo")
        .then(response=>response.json())
        .then(json=>setServicedetails(json))

    },[])
    return(
        <>
        <div className='container'>
            <div className='row'>
                {
                servicedetails.map((value,index)=>(
           
                <div className='col-lg-4 mt-5'>
                    <div className='card'>
                        <div className='card-header '>
                            <h1>Personal details</h1>
                        </div>
                        <div className='card-body'>
                            <p>First-name:{value.firstname}</p>
                            <p>Last-name:{value.lastname}</p>
                            <p>Email:{value.email}</p>
                            <p>Date-of-Birth:{value.dob}</p>
                            <p>Mobile-Number:{value.mobileno}</p>
                            <p>Vehical-Number:{value.vehicalno}</p>
                            <p>Model:{value.model}</p>
                            <p>About:{value.about}</p>
                            {/* <p>{value.firstname}</p>
                            <p>{value.lastname}</p>
                            <p>{value.email}</p>
                            <p>{value.dob}</p>
                            <p>{value.mobileno}</p>
                            <p>{value.vehicalno}</p>
                            <p>{value.model}</p> */}
                        </div>
                    </div>
                </div>
                ))
            }
            </div>
        </div>
        </>
    )
}