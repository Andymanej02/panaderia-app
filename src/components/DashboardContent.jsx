import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const [productos, setProductos] = useState([]);
  const API_PRODUCTOS = "http://89.116.25.43:3500/api/productos/listar";

  useEffect(() => {
    const handleProducts = async () => {
      try {
        const response = await axios.get(API_PRODUCTOS, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          setProductos(response.data.result);
        } else {
          console.error("Error inesperado al obtener los productos.");
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 400) {
            console.error("Error 400: Solicitud incorrecta.");
          } else if (error.response.status === 401) {
            console.error("Error 401: No autorizado.");
          } else {
            console.error(`Error ${error.response.status}: Error en el servidor.`);
          }
        } else {
          console.error("Error de red o CORS:", error.message);
        }
      }
    };

    handleProducts();
  }, [token]);

  return (
    <div className="dashboard-container">
      <div className="productos-grid">
        {productos.length > 0 ? (
          productos.map((producto, index) => (
            <div key={producto.id} className="producto-card">
              <div className="producto-contenido">
                <img className="producto-imagen" src={producto.imagen} alt={producto.nombre} />
                <div className="producto-info">
                  <h2 className="producto-titulo">{producto.descripcion}</h2>
                  <p className="producto-nombre">{producto.nombre}</p>
                  <p className="producto-valor">Valor: ${producto.valor.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
