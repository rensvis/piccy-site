import StyledHome from "../components/styled/home.style";
import Layout from "../components/styled/layout";

const Home = () => {
  return (
    <Layout>
      <StyledHome>
        <img
          className="piccy-logo"
          src="assets/images/Piccy-logo-400.png"
          alt="Piccy logo"
        />
        {/* <h3>Download Piccy in de App Stores!</h3> */}
        <div className="app-store-badges">
          <a href="/">
            <img
              src="assets/images/app-store-badge.png"
              alt="App Store"
              className="app-store"
            />
          </a>
          <a href="/">
            <img
              src="assets/images/google-play-badge.png"
              alt="Google Play Store"
              className="google-play-store"
            />
          </a>
        </div>
      </StyledHome>
    </Layout>
  );
};

export default Home;
