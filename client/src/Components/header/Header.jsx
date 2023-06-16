import "./header.css";

const Header = ({ title, subTitle }) => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">{title}</span>
        <span className="headerTitleLg">{subTitle}</span>
      </div>
      <img
        className="headerImg"
        src="https://images.unsplash.com/photo-1682686578615-39549501dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      />
    </div>
  );
};

export default Header;
