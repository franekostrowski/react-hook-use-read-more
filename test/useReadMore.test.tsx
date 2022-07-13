import {
  renderHook,
  RenderHookResult,
  Renderer,
} from '@testing-library/react-hooks';
import useReadMore from '../src/index';

let renderedHook: RenderHookResult<
  unknown,
  { firstPart: string; secondPart: string },
  Renderer<unknown>
>;

describe('useReadMore', () => {
  it("should split 'Hello world foo bar' text into firstPart (Hello world) and secondPart (foo bar)", () => {
    renderedHook = renderHook(() => useReadMore('Hello world foo bar'));
    expect(renderedHook.result.current.firstPart).toEqual('Hello world');
    expect(renderedHook.result.current.secondPart).toEqual('foo bar');
  });

  it("should split 'Hello world foo bar' text at 75% treshold into firstPart (Hello world foo) and secondPart (bar)", () => {
    renderedHook = renderHook(() =>
      useReadMore('Hello world foo bar', { treshold: 75 })
    );
    expect(renderedHook.result.current.firstPart).toEqual('Hello world foo');
    expect(renderedHook.result.current.secondPart).toEqual('bar');
  });

  it("should split 'Banana apple pear peach strawberry raspberry' text with firstPart's max length set for 2 into firstPart (Banana apple) and secondPart (pear peach strawberry)", () => {
    renderedHook = renderHook(() =>
      useReadMore('Banana apple pear peach strawberry raspberry', {
        firstPartMaxLength: 2,
      })
    );
    expect(renderedHook.result.current.firstPart).toEqual('Banana apple');
    expect(renderedHook.result.current.secondPart).toEqual(
      'pear peach strawberry raspberry'
    );
  });

  it("should split 'Hello world foo' text into firstPart (Hello) and secondPart (world foo)", () => {
    renderedHook = renderHook(() => useReadMore('Hello world foo'));
    expect(renderedHook.result.current.firstPart).toEqual('Hello');
    expect(renderedHook.result.current.secondPart).toEqual('world foo');
  });
});
