import React from "react";
import { shallow } from "enzyme";
import Header from "./header";
import { expect } from "chai";

test("Header", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find("img")).to.have.lengthOf(1);
});
