// react-router-dom
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="w-full px-2 py-4 bg-slate-300">
        <nav className="w-full h-full">
          <ul className="w-full h-full flex items-center justify-center gap-5 bg-slate-600">
            <li className="w-1/5 flex items-center justify-center uppercase">
              Estarta Giving app
            </li>
            <li className="w-full flex items-center justify-center gap-6 bg-yellow-400">
              <li>{/* <Link to="/">Home</Link> */}</li>
              <li>{/* <Link to="/giving">Giving</Link> */}</li>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
