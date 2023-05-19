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
} from './Cards.styled';

let numberOfCards = 3;

const Cards = () => {
  const [dataTweets, setTweets] = useState([]);
  const [pageTweets, setPageTweets] = useState([]);
  const [filter, setFilter] = useState(true);

  const addMore = () => {
    if (pageTweets.length < dataTweets.length) {
      numberOfCards += 3;
      setPageTweets(dataTweets.slice(0, numberOfCards));
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
    <Loader />
  ) : (
    <Section>
      <SectionBack>
        <ButtonBack to="/">Back</ButtonBack>
        <div>
          <Filter>
            Fiter Cards
            <select id="folow" onChange={handleFilter}>
              <option value="all">all</option>
              <option value="follow">follow</option>
              <option value="followings">followings</option>
            </select>
          </Filter>
        </div>
      </SectionBack>
      <List>
        {pageTweets.length > 0 ? (
          pageTweets.map(tweets => <Tweets props={tweets} key={tweets.id} />)
        ) : (
          <li></li>
        )}
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
export default Cards;
