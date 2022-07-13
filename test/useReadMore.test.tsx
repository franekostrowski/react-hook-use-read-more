import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import UseReadMore from "./UseReadMore"

it("should split 'Hello world foo bar' text into firstPart (Hello world) and secondPart (foo bar)", () => {
  render(<UseReadMore text="Hello world foo bar" />)
  expect(screen.getByTestId("first-part")).toHaveTextContent("Hello world")
  expect(screen.getByTestId("second-part")).toHaveTextContent("foo bar")
});

it("should split 'Hello world foo bar' text at 75% treshold into firstPart (Hello world foo) and secondPart (bar)", () => {
  render(<UseReadMore text="Hello world foo bar" config={{ treshold: 75 }} />)
  expect(screen.getByTestId("first-part")).toHaveTextContent("Hello world foo")
  expect(screen.getByTestId("second-part")).toHaveTextContent("bar")
});

it("should split 'Banana apple pear peach strawberry raspberry' text with firstPart's max length set for 2 into firstPart (Banana apple) and secondPart (pear peach strawberry)", () => {
  render(<UseReadMore text="Banana apple pear peach strawberry raspberry" config={{ firstPartMaxLength: 2 }} />)
  expect(screen.getByTestId("first-part")).toHaveTextContent("Banana apple")
  expect(screen.getByTestId("second-part")).toHaveTextContent("pear peach strawberry raspberry")
});

it("should split 'Hello world foo' text into firstPart (Hello) and secondPart (world foo)", () => {
  render(<UseReadMore text="Hello world foo" />)
  expect(screen.getByTestId("first-part")).toHaveTextContent("Hello")
  expect(screen.getByTestId("second-part")).toHaveTextContent("world foo")
});
