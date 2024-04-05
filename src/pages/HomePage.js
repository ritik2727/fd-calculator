import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Form1 from "../Forms/Form1";
import Form2 from "../Forms/Form2";
import Form3 from "../Forms/Form3";
import Form4 from "../Forms/Form4";
import Form5 from "../Forms/Form5";

export default function HomePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 20,
        width: "80%",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Form1 />
      <Form2 />
      <Form3 />
      <Form4 />
      <Form5 />
    </div>
  );
}
