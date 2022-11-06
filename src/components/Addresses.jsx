import React from "react";
import "./index.css";
import addresses from "./../hardcodedData/blockchainNodeAddresses";
import { Link } from "react-router-dom";

export default function Addresses() {
  return (
    <div className="addresses">
      <div className="title">Blockchain Node Addresses</div>
      <div className="nodeAddresses">
        {addresses.map((address, i) => {
          return (
            <div className="addressLink" key={i}>
              <Link to={`/transfer/${address}`}>{address}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
