import React from "react";
import { shallow } from "enzyme";
import Home from "./home";
import { expect } from "chai";

test("Home Page", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper.find(".container")).to.have.lengthOf(1);
});
