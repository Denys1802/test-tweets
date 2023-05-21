import { HomeContainer, HomeTitle, NavigateLink } from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>
        Welcome to Homepage aplicaton "Tweets". If you want to visit tweets
        click <NavigateLink to="tweets">Tweets</NavigateLink>
      </HomeTitle>
    </HomeContainer>
  );
};

export default Home;
