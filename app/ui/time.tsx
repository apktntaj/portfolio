"use client";

import { useEffect, useState } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <p className='text-center text-6xl font-bold'>
      {time.toLocaleTimeString("id-ID").replace(/\./g, ":")}
    </p>
  );
}
