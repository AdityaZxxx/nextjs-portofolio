"use client";

import { useEffect, useState } from "react";

const Copyright = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="text-center mt-8">
      <p>{`© ${year}. All Rights Reserved.`}</p>
    </div>
  );
};

export default Copyright;
