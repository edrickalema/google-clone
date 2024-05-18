"use client";

import React, { useState, useEffect } from "react";

const Country = () => {
  const [country, setCountry] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://extreme-ip-lookup.com/json/?key=${process.env.API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => data.country);

      if (!response.ok) return;

      setCountry(response);
    };

    getData();
  }, []);

  return <div>{country || "Uganda"}</div>;
};

export default Country;
