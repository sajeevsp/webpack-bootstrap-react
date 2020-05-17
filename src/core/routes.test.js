import { expect } from "chai";
import routes from "./routes";
import { TestScheduler } from "jest";

test("Routes", () => {
  expect(routes).to.have.lengthOf(2);
});
