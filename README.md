# use-cancelable-promise
React hook to make promises cancelable and safe

## Install

```sh
yarn add @rodw95/use-cancelable-promise

// or

npm install @rodw95/use-cancelable-promise
```

## Example

```js
import useCancelablePromise from '@rodw95/use-cancelable-promise';
import React, { useCallback, useState } from 'react';

export default () => {
  const makeCancelable = useCancelablePromise();
  const [state, setState] = useState(null);

  const doFetch = useCallback(
    () => makeCancelable(
      fetchAsync(),
      () => {
        // Optional: do someting on canceled, component is unmounted -> never set state!
        console.log('is canceled');
      },
    )
      .then((result) => {
        // Safe to set state because component is still mounted
        setState(result);
      }),
    [makeCancelable],
  );

  return (
    // ...
  );
};
```

## License

[MIT](LICENSE)
