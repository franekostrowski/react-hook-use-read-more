# react-hook-use-read-more 📖

React hook for quick and elegant use in read more buttons. Enjoy 🤗

## Installation 

Install it with npm:

```
npm i react-hook-use-read-more
```

Or with yarn:

```
yarn add react-hook-use-read-more
```

## Usage

### Basic

```typescript

import React, { useState } from "react"
import useReadMore from "react-hook-use-read-more"

const Component: React.FC = () => {
  const { firstPart, secondPart
  } = useReadMore("Hello world foo bar")

  const [showMore, setShowMore
  ] = useState<boolean>(false)

  const handleClick = () => {
    setShowMore(!showMore)
  }

  return (
    <p>
      // Hello world   
      {firstPart}

      <button onClick={handleClick}>Show more</button>

      // foo bar
      {showMore ? secondPart : ""}
    </p>
  );
};

export default Component

```

### Custom treshold

```typescript

import React, { useState } from "react"
import useReadMore from "react-hook-use-read-more"

const Component: React.FC = () => {
  const { firstPart, secondPart
  } = useReadMore("Hello world foo bar", {
      // Translates to treshold at 25%   
      treshold: 25
    })

  const [showMore, setShowMore
  ] = useState<boolean>(false)

  const handleClick = () => {
    setShowMore(!showMore)
  }

  return (
    <p>
      // Hello
      {firstPart}

      <button onClick={handleClick}>Show more</button>

      // world foo bar
      {showMore ? secondPart : ""}
    </p>
  );
};

export default Component

```

### Custom firstPartMaxLength

```typescript

import React, { useState } from "react"
import useReadMore from "react-hook-use-read-more"

const Component: React.FC = () => {
  const { firstPart, secondPart
  } = useReadMore("Banana apple pear peach strawberry raspberry", {
      firstPartMaxLength: 2
    })

  const [showMore, setShowMore
  ] = useState<boolean>(false)

  const handleClick = () => {
    setShowMore(!showMore)
  }

  return (
    <p>
      // Banana apple
      {firstPart}

      <button onClick={handleClick}>Show more</button>

      // pear peach strawberry raspberry
      {showMore ? secondPart : ""}
    </p>
  );
};

export default Component

```
