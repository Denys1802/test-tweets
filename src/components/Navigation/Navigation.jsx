import { Link, NavWrap } from './Navigation.styled';

const Navigation = () => {
  return (
    <NavWrap>
      <Link to="/">Home</Link>
      <Link to="/tweets">Tweets</Link>
    </NavWrap>
  );
};

export default Navigation;
