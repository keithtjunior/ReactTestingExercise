import { render, fireEvent } from "@testing-library/react";
import TEST_IMAGES from "./_testCommon.js";
import Coin from "./Coin";

// mocks Math.random value
beforeEach(function() {
    jest
    .spyOn(Math, "random")
    .mockReturnValueOnce(0);
});
  
afterEach(function() {
    Math.random.mockRestore();
})

it("renders without crashing", function() {
  render(<Coin images={TEST_IMAGES} />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Coin images={TEST_IMAGES} />);
  expect(asFragment()).toMatchSnapshot();
});

it("hides coin image on first load", function() {
    const { container } = render(<Coin images={TEST_IMAGES} />);
    // expect the coin image to be hidden
    expect(
      container.querySelector("img[alt='Coin']")
    ).not.toBeInTheDocument();
});

it("shows coin image on first click", function() {
    const { container } = render(<Coin images={TEST_IMAGES} />);
    // first button click
    const flipButton = container.querySelector("button");
    fireEvent.click(flipButton);
  
    // expect the coin image to show
    expect(
      container.querySelector("img[alt='Coin']")
    ).toBeInTheDocument();
});

it("updates child (Count) componet text on first click", function() {
    const { getByText, container } = render(<Coin images={TEST_IMAGES} />);
    const flipButton = container.querySelector("button");
    expect(getByText(/Out of 0 flips, there have been 0 heads and 0 tails/i))
        .toBeInTheDocument();

    // first button click
    fireEvent.click(flipButton);
    expect(getByText(/In 1 flip, there has been 1 heads and 0 tails/i))
        .toBeInTheDocument();
});