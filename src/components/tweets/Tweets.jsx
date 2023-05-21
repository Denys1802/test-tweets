import BgCard from '../../img/BgCard.png';
import logo from '../../img/Logo.png';
import { putTweets } from '../../services/fetchApi';
import { useState } from 'react';
import {
  Card,
  CardBg,
  Avatar,
  AvatarImg,
  CardButton,
  CardTweets,
  Button,
  LogoImg,
  ButtonFollowing,
} from './Tweets.styled';

const Tweets = ({ props }) => {
  const [dataTweets, setTweets] = useState(props.followers);
  const [folow, setFolow] = useState(props.following);

  const following = prop => {
    if (folow) {
      setFolow(false);
      setTweets(prev => prev - 1);
      putTweets(prop.id, { following: false, followers: props.followers - 1 });
    } else {
      setFolow(true);
      setTweets(prev => prev + 1);
      putTweets(prop.id, { following: true, followers: props.followers + 1 });
    }
  };

  return (
    <Card>
      <LogoImg src={logo} alt="logo" />
      <CardBg>
        <img src={BgCard} alt="backgroundImage" />
      </CardBg>
      <Avatar>
        <AvatarImg src={props.avatar} alt="avatar" />
      </Avatar>
      <CardTweets>
        <p>
          <span>{props.tweets.toLocaleString('en')}</span> TWEETS
        </p>
        <p>
          <span>{dataTweets.toLocaleString('en')}</span>
          FOLLOWERS
        </p>
      </CardTweets>
      <CardButton>
        {folow ? (
          <ButtonFollowing onClick={() => following(props)}>
            FOLLOWING
          </ButtonFollowing>
        ) : (
          <Button onClick={() => following(props)}>FOLLOW</Button>
        )}
      </CardButton>
    </Card>
  );
};

export default Tweets;
