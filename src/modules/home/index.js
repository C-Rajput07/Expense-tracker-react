import styled from "styled-components";
import OverViewComponent from "./OverViewComponent";
import TransactionComponent from "./TransactionComponent";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Montserrat;
  align-items: center;
  margin: 30px 0 10px;
  width: 360px;
`;

const HomeComponent = (props) => {
  const [transactions, updateTransaction] = useState([]);
  const [expense, updateExpense] = useState(0);
  const [income, updateIncome] = useState(0);

  const addTransaction = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    updateTransaction(transactionArray);
  };

  const calculateBalance = () => {
    let expense = 0;
    let income = 0;
    transactions.map((payload) => {
      payload.type === "EXPENSE"
        ? (expense = expense + payload.amount)
        : (income = expense + payload.amount);
    });
    updateExpense(expense);
    updateIncome(income);
  };

  useEffect(() => calculateBalance(), [transactions]);

  return (
    <Container>
      <OverViewComponent
        addTransaction={addTransaction}
        expense={expense}
        income={income}
      />
      <TransactionComponent transactions={transactions} />
    </Container>
  );
};

export default HomeComponent;
