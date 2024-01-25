// PrivateRoute.js

import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ props }) => {
  const { Component } = props;
  const naviagete = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem('userInfo');
    if (!login) {
      naviagete('/login')
    }
  }

  )

  return (
    <>
      <Component />
    </>
  );
};

export default PrivateRoute;
