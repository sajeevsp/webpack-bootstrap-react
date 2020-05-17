import React from "react";
import { shallow } from "enzyme";
import Navbar from "./navbar";
import { expect } from "chai";

test("Navbar", () => {
  const wrapper = shallow(<Navbar />);
  expect(wrapper.find(".navbar")).to.have.lengthOf(1);
});
