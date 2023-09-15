import { useState } from 'react';
import Square from "./square.jsx";
export default function Board() {
    return (
      <>
    
      <div className = "row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className = "row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className = "row">
        <Square/>
        <Square/>
        <Square/>
      </div>
      </>
    );
  } 