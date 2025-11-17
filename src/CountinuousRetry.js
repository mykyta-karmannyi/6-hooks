import React from "react";
import { useIsClient } from "@uidotdev/usehooks";

function Countinuousretry() {
  const isClient = useIsClient();

  return (
    <section>
      <h1>useIsClient</h1>
      <h6>Is Client? </h6>
      <p>{isClient ? "If you can see this ... you already know" : "No"}</p>
    </section>
  );
}

export default Countinuousretry;