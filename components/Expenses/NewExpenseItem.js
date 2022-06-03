import ExpenseItem from "./ExpenseItem";
import "./NewExpenseItem.css";
import Card from "../UI/Card";
import ExpensesFilter from "../NewExpense/ExpensesFilter";

function NewExpenseItem(props) {
  return (
    <div>
      <ExpensesFilter />
      <Card className="expenses">
        {props.expenses.map((el) => {
          return (
            <ExpenseItem
              title={el.title}
              amount={el.amount}
              date={el.date}
            ></ExpenseItem>
          );
        })}
      </Card>
    </div>
  );
}

export default NewExpenseItem;
