import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>hello from next js</h1>
      <h4>Number is {number}</h4>
      <button onClick={() => setNumber(number + 1)}>Click me</button>
      <p>Use state works on next js too</p>
    </div>
  );
}
