import React from "react";
import { Link } from "react-router-dom";
import "../../styles/admin/Sidebar.css"; // Asegúrate de que la ruta sea correcta
import logo from "../../assets/logos/LogoCosevif-removed.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Logo agregado aquí */}
      <div className="sidebar-logo">
        <img src={logo} alt="Logo Cosevif" className="sidebar-img" />
        <h2>COSEVIF</h2>
      </div>

      <ul>
        <li className="active">
          <span>🏠</span> <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <span>👥</span> <Link to="/residentes">Residentes</Link>
        </li>
        <li>
          <span>🏡</span> <Link to="/casas">Casas</Link>
        </li>
        <li>
          <span>🛡️</span> <Link to="/guardias">Guardias</Link>
        </li>
        <li className="logout">
          <span>🚪</span> <Link to="/">Cerrar Sesión</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
