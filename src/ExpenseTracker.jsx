import React, { useState } from 'react'

const ExpenseTracker = () => {
    const [inputExpense, setInputExpense] = useState('');
    const [inputAmount, setInputAmount] = useState('');

    const [expenses, setExpenses] = useState([])


    const handleAddExpense = () => {
        if (!inputExpense || !inputAmount) return;

        const newExpense = {
            id: expenses.length + 1,
            title: inputExpense,
            amount: inputAmount
        }
        setExpenses([...expenses, newExpense])
        setInputExpense('')
        setInputAmount('')
    }

    const handleDeleteExpense = (id) => {
        setExpenses(expenses.filter((expenses) => expenses.id !== id))
    }

    return (
        <div className="container flex flex-col items-center gap-7 mt-5 p-5 bg-white" >
            <h1 className='text-3xl font-bold'>Expense Tracker</h1>

            <div className="flex flex-col items-center w-72 gap-4">
                <input
                    type="text"
                    placeholder='Expense'
                    value={inputExpense}
                    onChange={(e) => setInputExpense(e.target.value)}
                    className='w-full outline outline-1 outline-blue-400 rounded-md py-1 px-3'
                />
                <input
                    type="number"
                    placeholder='Amount'
                    value={inputAmount}
                    onChange={(e) => setInputAmount(e.target.value)}
                    className='w-full outline outline-1 outline-blue-400 rounded-md py-1 px-3'
                />
                <button
                    onClick={handleAddExpense}
                    className='bg-blue-700 text-white px-10 py-2 rounded-full w-full'
                >
                    Add expense
                </button>
            </div>

            <table className='w-1/2 text-center'>
                <thead>
                    <tr>
                        <th>Expense</th>
                        <th>Amount</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    expenses.map((data) => (

                        <tbody key={data.id}>
                            <tr>
                                <td>{data.title}</td>
                                <td>{data.amount}</td>
                                <td><button onClick={() => handleDeleteExpense(data.id)} className='bg-red-600 text-white rounded px-2 py-0.5'>Delete</button></td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
        </div>
    )
}

export default ExpenseTracker
