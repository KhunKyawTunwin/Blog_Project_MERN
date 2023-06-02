import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Most visit Places in ShanState</span>
        <span className="headerTitleLg">Taunggyi</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
        alt="headerImg"
      />
    </div>
  );
};

export default Header;
