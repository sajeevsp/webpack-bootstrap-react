import React from "react";
import { shallow } from "enzyme";
import Home from "./home";
import { expect } from "chai";

test("Home Page", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find("h1")).to.have.lengthOf(1);
  expect(wrapper.find("p")).to.have.lengthOf(1);
});
