// app/components/ClientOnly.tsx
"use client";

import { useEffect, useState } from "react";

const ClientOnly = () => {
  const [isClient, setIsClient] = useState(false);

  // This useEffect will run once the component is mounted on the client
  useEffect(() => {
    // Setting the client state to true after the first render
    setIsClient(true);
  }, []); // Empty dependency array ensures it runs only once after the first mount

  // Conditional rendering based on whether it's client-side or not
  if (!isClient) {
    return <div>Loading...</div>; // Fallback UI while waiting for the client-side render
  }

  return (
    <div>
      {/* <p>This is a client-only component.</p> */}
      {/* Safe to use client-only APIs here */}
    </div>
  );
};

export default ClientOnly;
