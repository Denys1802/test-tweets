import { useEffect, useState } from 'react';
import { fetchTweets } from '../../services/fetchApi';
import Tweets from '../../components/tweets/Tweets';
import { Loader } from 'components/Loader/Loader';
import {
  Section,
  SectionBack,
  ButtonBack,
  LoadMore,
  LoadMoreBtn,
  Filter,
  List,
  ButtonNone,
  Select,
} from './Card.styled';

let numberOfCards = 3;

const Card = () => {
  const [dataTweets, setTweets] = useState([]);
  const [pageTweets, setPageTweets] = useState([]);
  const [filter, setFilter] = useState(true);

  const addMore = () => {
    if (pageTweets.length < dataTweets.length) {
      numberOfCards += 3;
      setPageTweets(dataTweets.slice(0, numberOfCards));
      console.log(dataTweets);
      console.log(pageTweets);
    }
    if (dataTweets.length <= pageTweets.length + 1) {
      setFilter(false);
    }
  };

  useEffect(() => {
    fetchTweets().then(data => setTweets(data));
  }, []);

  useEffect(() => {
    if (dataTweets.length > 0) {
      setPageTweets(dataTweets.slice(0, numberOfCards));
    }
  }, [dataTweets]);

  const handleFilter = e => {
    switch (e.target.value) {
      case 'follow':
        setPageTweets(dataTweets.filter(tweets => !tweets.following));
        setFilter(false);
        break;
      case 'followings':
        setPageTweets(dataTweets.filter(tweets => tweets.following));
        setFilter(false);
        break;
      case 'all':
        setPageTweets(dataTweets);
        setFilter(false);
        break;
      default:
        break;
    }
  };

  return dataTweets.length <= 0 ? (
    <Loader widthLoader={100} heightLoader={100} />
  ) : (
    <Section>
      <SectionBack>
        <ButtonBack to="/">Back</ButtonBack>
        <Filter>
          Fiter Cards
          <Select id="folow" onChange={handleFilter}>
            <option value="all">all</option>
            <option value="follow">follow</option>
            <option value="followings">followings</option>
          </Select>
        </Filter>
      </SectionBack>
      <List>
        {pageTweets.length > 0 &&
          pageTweets.map(tweets => <Tweets props={tweets} key={tweets.id} />)}
      </List>
      <LoadMore>
        {filter ? (
          <LoadMoreBtn onClick={addMore}>Load More</LoadMoreBtn>
        ) : (
          <ButtonNone />
        )}
      </LoadMore>
    </Section>
  );
};
// e
export default Card;
