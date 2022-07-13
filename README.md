# react-hook-use-read-more 📖

React hook for quick and elegant use in read more buttons

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
      {firstPart}

      <button onClick={handleClick}>Show more</button>

      {showMore ? secondPart : ""}
    </p>
  );
};

export default Component

```
