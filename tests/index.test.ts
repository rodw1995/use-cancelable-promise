import { renderHook } from '@testing-library/react-hooks';
import useCancelablePromise from '../src';

describe('useCancelablePromise', () => {
  it('should be defined', () => {
    expect(useCancelablePromise).toBeDefined();
  });

  it('should return a function', () => {
    const hook = renderHook(useCancelablePromise);

    expect(typeof hook.result.current).toEqual('function');
  });

  describe('a success', () => {
    it('resolves when mounted', () => {
      expect.assertions(1);

      const hook = renderHook(useCancelablePromise);
      return expect(hook.result.current(Promise.resolve())).resolves.toBeUndefined();
    });

    it('does not resolve after unmount', (done) => {
      expect.assertions(0);

      const hook = renderHook(useCancelablePromise);
      hook.result.current(new Promise((resolve) => {
        // Unmount before resolve
        hook.unmount();

        resolve(true);
      }), done)
        .finally(() => {
          // Test this is never called
          expect(false).toBeTruthy();
          done();
        });
    });
  });

  describe('a error', () => {
    it('rejects when mounted', () => {
      expect.assertions(1);

      const hook = renderHook(useCancelablePromise);
      return expect(hook.result.current(Promise.reject())).rejects.toBeUndefined();
    });

    it('does not reject after unmount', (done) => {
      expect.assertions(0);

      const hook = renderHook(useCancelablePromise);
      hook.result.current(new Promise((resolve, reject) => {
        // Unmount before reject
        hook.unmount();

        reject();
      }), done)
        .finally(() => {
          // Test this is never called
          expect(false).toBeTruthy();
          done();
        });
    });
  });
});
