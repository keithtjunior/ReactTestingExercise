import { render } from "@testing-library/react";
import TEST_IMAGES from "./_testCommon.js";
import Count from "./Count";

it("renders without crashing", function() {
  render(<Count total={0} heads={0} tails={0} />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Count total={0} heads={0} tails={0} />);
  expect(asFragment()).toMatchSnapshot();
});
