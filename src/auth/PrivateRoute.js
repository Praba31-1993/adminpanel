import React, { useEffect } from "react";
import { Route, Navigate } from "react-router-dom";
import Layout from "../commoncomponents/Layout";
import {useNavigate} from 'react-router-dom'
const PrivateRoute = ({ auth }) => {
  const navigate = useNavigate();

  useEffect(()=>{
    if(!auth){
      navigate('/login')
    }
  },[auth])
  return
  auth ? <Layout/>:<Navigate to="/login"/>
}
  
export default PrivateRoute;
