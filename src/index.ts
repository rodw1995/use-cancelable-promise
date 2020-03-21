import useMountedState from '@rodw95/use-mounted-state';
import { useCallback } from 'react';

export default () => {
  const isMounted = useMountedState();

  return useCallback(
    <T>(promise: Promise<T>, onCancel?: () => void) => new Promise<T>((resolve, reject) => {
      promise
        .then((result) => {
          if (isMounted()) {
            resolve(result);
          }
        })
        .catch((error) => {
          if (isMounted()) {
            reject(error);
          }
        })
        .finally(() => {
          if (!isMounted() && onCancel) {
            onCancel();
          }
        });
    }),
    [isMounted],
  );
};
