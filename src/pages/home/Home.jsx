import { HomeContainer, HomeTitle, NavigateLink } from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>
        Welcome to Home page aplicaton "Tweets". If you want visit tweets click{' '}
        <NavigateLink to="tweets">Tweets</NavigateLink>
      </HomeTitle>
    </HomeContainer>
  );
};

export default Home;
