import React, { useState } from "react";
import Swal from 'sweetalert2';
import UserIcon from '../assets/user.svg';
import PasswordIcon from '../assets/password.svg';
import ButtonLogin from "./Buttonlogin";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../styles/Login.css';
import logo from '../assets/bag_8841115.png';
 


const Login = () => {

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const inicioSesion = async (e) => {
    e.preventDefault();
    console.log(" :", usuario)
    console.log("Password:", password)

    const data = {
      usuario: usuario,
      password: password
    }

    try {
      const resp = await axios.post("http://89.116.25.43:3500/api/login", data);
      console.log(resp);
      localStorage.setItem("token", resp.data.jwt);
      localStorage.setItem("user", resp.data.user);
      localStorage.setItem("username", resp.data.user.usuario);

      Swal.fire({
        title: '¡Éxito!',
        text: 'Inicio de sesión exitoso!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate("/dashboard");
      });
    } catch (error) {
      console.log(error);


      Swal.fire({
        title: '¡Error!',
        text: 'Inicio de sesión fallido. Por favor, inténtalo de nuevo.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  }

  return (
    <form>
      <div className="cardform">
        <img src={logo} alt="Logo de la panadería" className="logo" />
        <h4>Horneando Sueños</h4>
        <div className="input_user">
          <img className="icons" src={UserIcon} alt="user" />
          <input
            className="inputs"
            type="text"
            placeholder="Username"
            onChange={(e) => {setUsuario(e.target.value)}}
          />
        </div>
        <div className="input_pass">
          <img className="icons" src={PasswordIcon} alt="password" />
          <input
            className="inputs"
            type="password"
            placeholder="Password"
            onChange={(e) => {setPassword(e.target.value)}}
          />
        </div>
        <ButtonLogin fnInicioSession={inicioSesion} label={"LOGIN"}/>
      </div>
    </form>
  );
};

export default Login;
