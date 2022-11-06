import React from "react";
import { walletAddress, walletBalance } from "../hardcodedData/const";
import "./index.css";

export default function Wallet() {
  return (
    <div className="wallet">
      <div className="title">My Wallet</div>
      <div className="walletWindow">
        <div className="transferData">
          <strong>Address </strong>
          <span>{walletAddress}</span>
        </div>
        <div className="transferData">
          <strong>Balance </strong>
          <span>{walletBalance}</span>
        </div>
      </div>
    </div>
  );
}
