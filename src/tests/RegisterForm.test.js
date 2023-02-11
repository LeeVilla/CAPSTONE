import React from "react";
import { mount } from "enzyme";
import RegisterForm from "./RegisterForm";

describe("<RegisterForm />", () => {
  it("should render form", () => {
    const wrapper = mount(<RegisterForm />);
    expect(wrapper.find("form").length).toEqual(1);
    expect(wrapper.find("input").length).toEqual(3);
    expect(wrapper.find("label").length).toEqual(3);
    expect(wrapper.find("p").length).toEqual(5);
    expect(wrapper.find("h1").text()).toEqual("Register");
  });

  it("should handle user input", () => {
    const wrapper = mount(<RegisterForm />);
    const usernameInput = wrapper.find("input").at(0);
    usernameInput.simulate("change", { target: { value: "testuser" } });
    expect(wrapper.find("input").at(0).props().value).toEqual("testuser");
  });

  it("should validate username and password", () => {
    const wrapper = mount(<RegisterForm />);
    const usernameInput = wrapper.find("input").at(0);
    usernameInput.simulate("change", { target: { value: "testuser" } });
    expect(wrapper.find(".valid").length).toEqual(1);

    const passwordInput = wrapper.find("input").at(1);
    passwordInput.simulate("change", {
      target: { value: "password1234" },
    });
    expect(wrapper.find(".invalid").length).toEqual(1);

    passwordInput.simulate("change", {
      target: { value: "Password1234!" },
    });
    expect(wrapper.find(".valid").length).toEqual(2);
  });

  it("should match passwords", () => {
    const wrapper = mount(<RegisterForm />);
    const passwordInput = wrapper.find("input").at(1);
    passwordInput.simulate("change", {
      target: { value: "Password1234!" },
    });
    const matchInput = wrapper.find("input").at(2);
    matchInput.simulate("change", { target: { value: "Password1234" } });
    expect(wrapper.find(".invalid").length).toEqual(1);
    matchInput.simulate("change", { target: { value: "Password1234!" } });
    expect(wrapper.find(".valid").length).toEqual(3);
  });
});
