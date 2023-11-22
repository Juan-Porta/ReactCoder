import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around p-4">
        <img src="/img/logo.png" alt="" style={{width: "190px", height: "100px"}}/>
        <div>
          <Link to="/">
            <button className="btn btn-success mx-2">Todos</button>
          </Link>
          <Link to="/category/calzados">
            <button className="btn btn-success mx-2">Calzado</button>
          </Link>
          <Link to="/category/ropa">
            <button className="btn btn-success mx-2">Remeras</button>
          </Link>
        </div>
          <Link to="/cart">
            <CartWidget />
          </Link>
        </nav>
  );
};
