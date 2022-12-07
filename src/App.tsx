import React from "react";
import {useState, useEffect } from "react";

export default function App() {
  const[user, setUser]= useState("samyual")
  return (
    <div>
      <ol>
        <li> cake </li>
        <li> butter </li>
        <li> milk </li>
      </ol>
    </div>
  );
}
