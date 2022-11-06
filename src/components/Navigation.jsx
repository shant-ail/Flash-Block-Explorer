import React from "react";
import { Link } from "react-router-dom";
import explorerIcon from "./../images/explorer.ico";
import walletIcon from "./../images/wallet.png";
import transactionIcon from "./../images/transaction.png";
import copyrightIcon from "./../images/copyright.png";
import addressIcon from "./../images/address.png";
import "./index.css";
import { NavigationPages } from "../hardcodedData/const";

export default function Navigation() {
  let localStorageSelectedPage = localStorage.getItem("selectedPage");
  const [selectedPage, setSelectedPage] = React.useState(
    JSON.parse(localStorageSelectedPage)
  );

  const handlePageChange = (page) => {
    localStorage.setItem("selectedPage", JSON.stringify(page));
    setSelectedPage(page);
  };

  return (
    <div className="navbar">
      <header>
        <div className="appTitle">
          <div className="titleIcon">
            <img src={explorerIcon} alt="explorer" />
            <div className="headers">
              <div className="titleHeader">Flash</div>
              <div className="subtitle">Blockchain Explorer</div>
            </div>
          </div>
          <div className="copyrightIcon">
            <img src={copyrightIcon} alt="copyright" />
          </div>
        </div>
      </header>
      <div className="routes">
        <Link
          to="/transactions"
          className={
            selectedPage === NavigationPages.TRANSACTIONS ? "selectedRoute" : ""
          }
          onClick={() => handlePageChange(NavigationPages.TRANSACTIONS)}
        >
          <img src={transactionIcon} alt="transaction" />
          <div>Transactions</div>
        </Link>
        <Link
          to="/addresses"
          className={
            selectedPage === NavigationPages.ADDRESSES ? "selectedRoute" : ""
          }
          onClick={() => handlePageChange(NavigationPages.ADDRESSES)}
        >
          <img src={addressIcon} alt="address" />
          <div>Addresses</div>
        </Link>
        <Link
          to="/wallet"
          className={
            selectedPage === NavigationPages.WALLET ? "selectedRoute" : ""
          }
          onClick={() => handlePageChange(NavigationPages.WALLET)}
        >
          <img src={walletIcon} alt="wallet" />
          <div>Wallet</div>
        </Link>
      </div>
    </div>
  );
}
