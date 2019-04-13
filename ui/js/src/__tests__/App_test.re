open Jest;
open Expect;

open ReactTestingLibrary;

[@bs.get] external textContent: Dom.element => string = "";

describe("App component", () => {
  test("renders without crashing", () => {
    let wrapper = render(<App />);
    let actual =
      wrapper
      |> getByText(~matcher=`Str("A place to share your knowledge."))
      |> textContent;
    actual |> expect |> toEqual("A place to share your knowledge.");
  });
  ignore();
});