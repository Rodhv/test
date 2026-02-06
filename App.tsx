import AddExpense from "./components/AddExpense"
import ExpenseList from "./components/ExpenseList"
import Summary from "./components/Summary"
import { useExpenses } from "./hooks/useExpenses"

export default function App() {
  const {
    expenses,
    addExpense,
    deleteExpense,
    filters,
    setFilters,
  } = useExpenses()

  return (
    <div className="container">
      <h1>Expenses</h1>

      <AddExpense onAdd={addExpense} />

      <Summary expenses={expenses} />

      <ExpenseList
        expenses={expenses}
        filters={filters}
        onDelete={deleteExpense}
        onFilterChange={setFilters}
      />
    </div>
  )
}
