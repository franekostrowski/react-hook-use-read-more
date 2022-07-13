import * as React from 'react';
import * as ReactDOM from "react-dom"
import useReadMore from "../src/index"

const App = () => {
  const { firstPart, secondPart
  } = useReadMore("Hello world foo bar", { treshold: 75, firstPartMaxLength: 2 })

  const [showMore, setShowMore
  ] = React.useState<boolean>(false)

  const handleClick = () => {
    setShowMore(!showMore)
  }

  return (
    <p>
      {firstPart}

      <button onClick={handleClick}>Show more</button>

      {showMore ? secondPart : ""}
    </p>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
