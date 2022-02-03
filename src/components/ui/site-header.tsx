import { FC } from "react";

import { Link } from "react-router-dom";
import StyledHeader from "../styled/header.style";
import Layout from "../styled/layout";

const SiteHeader: FC = () => {
  return (
    <StyledHeader>
      <Layout>
        <div className="header-content">
          <Link to="/">
            <div className="site-logo">
              <img
                src={require("../../assets/images/Piccy-logo-hor-211x67.png")}
                alt="Piccy logo"
              />
              {/* <h2>Piccy</h2> */}
            </div>
          </Link>

          <nav>
            <ul>
              {/* <li>
            <Link to="/">Home</Link>
          </li> */}
              <li>
                {/* <Link to="/privacy-policy">Privacy policy</Link> */}
                <a href="/privacy-policy.html" target="_blank">
                  Privacy policy
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Layout>
    </StyledHeader>
  );
};

export default SiteHeader;
