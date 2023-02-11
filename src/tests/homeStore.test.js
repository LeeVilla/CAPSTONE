// verify that the searchCoins function returns the correct data when called
// verifies that the debounce function is used correctly

import axios from "axios";
import homeStore from "./homeStore";

jest.mock("axios");

describe("homeStore", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("sets the query", () => {
    const set = jest.fn();
    const store = homeStore(set);
    const event = { target: { value: "query" } };
    store.setQuery(event);
    expect(set).toHaveBeenCalledWith({ query: "query" });
  });

  it("searches coins", async () => {
    const set = jest.fn();
    const store = homeStore(set);
    store.searchCoins();
    expect(axios.get).toHaveBeenCalledWith(
      "https://api.coingecko.com/api/v3/search?query="
    );
    const coins = [{ name: "name", image: "large", id: "id" }];
    axios.get.mockResolvedValue({ data: { coins } });
    await store.searchCoins.flush();
    expect(set).toHaveBeenCalledWith({
      coins,
      searching: false,
      searched: true,
    });
  });

  it("fetches coins", async () => {
    const set = jest.fn();
    const store = homeStore(set);
    axios.get.mockResolvedValue({ data: { coins: [] } });
    await store.fetchCoins();
    expect(axios.get).toHaveBeenCalledWith(
      "https://api.coingecko.com/api/v3/search/trending"
    );
  });
});
