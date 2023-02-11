// Test the fetchData method:

it("should call fetchData when component is mounted", () => {
  const store = showStore();
  const spy = jest.spyOn(store, "fetchData");
  const params = { id: "bitcoin" };

  const wrapper = mount(<Show />);

  expect(spy).toHaveBeenCalledWith(params.id);
});

//   Test if the data is displayed correctly:

it("should display the data correctly", () => {
  const store = showStore();
  const params = { id: "bitcoin" };
  store.data = {
    name: "Bitcoin",
    symbol: "BTC",
    image: {
      large: "https://example.com/large.png",
    },
    market_cap_rank: 1,
    market_data: {
      high_24h: {
        usd: 100000,
      },
      low_24h: {
        usd: 90000,
      },
      circulating_supply: 21000000,
      current_price: {
        usd: 95000,
      },
      price_change_percentage_1y: 10,
    },
  };
  store.graphData = [
    { Date: "Jan 1, 2022", Price: 90000 },
    { Date: "Feb 1, 2022", Price: 95000 },
    { Date: "Mar 1, 2022", Price: 100000 },
  ];

  const wrapper = mount(<Show />);

  expect(wrapper.find("h2").text()).toBe("Bitcoin (BTC)");
  expect(wrapper.find("img").prop("src")).toBe("https://example.com/large.png");
  expect(wrapper.find(".show-details-row").at(0).find("span").text()).toBe("1");
  expect(wrapper.find(".show-details-row").at(1).find("span").text()).toBe(
    "$100,000.00"
  );
  expect(wrapper.find(".show-details-row").at(2).find("span").text()).toBe(
    "$90,000.00"
  );
  expect(wrapper.find(".show-details-row").at(3).find("span").text()).toBe(
    "21,000,000"
  );
  expect(wrapper.find(".show-details-row").at(4).find("span").text()).toBe(
    "$95,000"
  );
  expect(wrapper.find(".show-details-row").at(5).find("span").text()).toBe(
    "$10.00"
  );
});

//   Test if the reset method is called when the component unmounts:

it("should call reset when component unmounts", () => {
  const store = showStore();
  const spy = jest.spyOn(store, "reset");

  const wrapper = mount(<Show />);
  wrapper.unmount();

  expect(spy).toHaveBeenCalled();
});
