import React from "react";
import "./index.css";
import data from "./../hardcodedData/transactionHistory";

export default function Transactions() {
  return (
    <div className="transactions">
      <div className="title">Transaction History</div>
      <div className="transactionHistory">
        {data.map((eachTransaction, index) => {
          let { transactionHash, status, timestamp, from, to, value, gasUsed } =
            eachTransaction;
          return (
            <div className="eachTransaction" key={index}>
              <div className="transactionData">
                <strong>Transaction Hash </strong>
                <span>{transactionHash}</span>
              </div>
              <div className="transactionData">
                <strong>Status </strong>
                <span>{status}</span>
              </div>
              <div className="transactionData">
                <strong>Timestamp </strong>
                <span>{timestamp}</span>
              </div>
              <div className="transactionData">
                <strong>From </strong>
                <span>{from}</span>
              </div>
              <div className="transactionData">
                <strong>To </strong>
                <span>{to}</span>
              </div>
              <div className="transactionData">
                <strong>Value </strong>
                <span>{value}</span>
              </div>
              <div className="transactionData">
                <strong>Gas Used </strong>
                <span>{gasUsed}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
