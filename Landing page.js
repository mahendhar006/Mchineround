import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/category1">Category 1</Link>
            </li>
            <li>
              <Link to="/category2">Category 2</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Welcome to our Amazon clone!</h1>
        <p>Find the best deals on your favorite products.</p>
      </main>
      <footer>
        <p>&copy; 2023 Amazon Clone</p>
      </footer>
    </div>
  );
};

export default LandingPage;
