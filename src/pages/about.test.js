import React from "react";
import { shallow } from "enzyme";
import About from "./about";
import { expect } from "chai";

test("About Page", () => {
  const wrapper = shallow(<About />);
  expect(wrapper.find("h1")).to.have.lengthOf(1);
  expect(wrapper.find("p")).to.have.lengthOf(1);
});
