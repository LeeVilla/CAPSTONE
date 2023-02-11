import React from "react";
import Header from "../components/Header.jsx";
import ListItem from "../components/ListItem.jsx";
import homeStore from "../stores/homeStore";
import classNames from "classnames";

export default function Home() {
  const store = homeStore();

  React.useEffect(() => {
    if (store.trending.length === 0) store.fetchCoins();
  }, []);

  return (
    <div>
      <Header />
      <header className="home-search">
        <div className="width">
          <h2> Search For A Coin</h2>
          <div
            className={classNames("home-search-input", {
              searching: store.searching,
            })}
          >
            <input type="text" value={store.query} onChange={store.setQuery} />
          </div>
        </div>
      </header>
      <div className="home-cryptos">
        <div className="width">
          <h2>{store.searched ? "Search Results" : "Trending Coins"} </h2>
          <div className="home-cryptos-list">
            {store.coins.map((coin) => {
              return <ListItem key={coin.id} coin={coin} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
