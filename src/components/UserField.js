// import "../style.scss";
// import "../login_register.css";
import "../user_page.css";
import React from "react";
import { AddTransaction } from "./AddTransaction";
import Balance from "./Balance";
import { Profit_Loss } from "./Profit_Loss";
import { TransactionList } from "./TransactionList";
import(AddTransaction);


const UserField = () => {
  return (
    <div>
      <Balance />
      <Profit_Loss />
      <TransactionList />
      <AddTransaction />
    </div>
  );
};

export default UserField;
