import React from 'react';
import {useState} from 'react';

export default function Replay() {
  return (
    <React.Profiler id="abc">
      <Child />
    </React.Profiler>
  );
}

function Child() {
  const [count, setCount] = useState(0);
  const rerender = () => setCount(count + 1);

  return (
    <div>
      <Grandchild rerender={rerender} />
    </div>
  );
}

function Grandchild({rerender}) {
  const getCurrentComponentStack = window.parent.getCurrentComponentStack;
  const componentStack =
    typeof getCurrentComponentStack === 'function'
      ? getCurrentComponentStack()
      : null;

  const getCurrentlyRenderingComponent =
    window.parent.getCurrentlyRenderingComponent;
  const component =
    typeof getCurrentlyRenderingComponent === 'function'
      ? getCurrentlyRenderingComponent()
      : null;

  const checkStack = () => {
    console.log(
      'getCurrentComponentStack:',
      typeof getCurrentComponentStack === 'function'
        ? getCurrentComponentStack()
        : null,
    );
    console.log(
      'getCurrentlyRenderingComponent:',
      typeof getCurrentlyRenderingComponent === 'function'
        ? getCurrentlyRenderingComponent()
        : null,
    );
  };

  return (
    <>
      <button onClick={checkStack}>Check stack</button>
      <button onClick={rerender}>Re-render</button>
      <hr />
      <pre>{JSON.stringify(component, null, 2)}</pre>
      <pre>{JSON.stringify(componentStack, null, 2)}</pre>
    </>
  );
}
