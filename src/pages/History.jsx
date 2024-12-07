import React from 'react'

const History = () => {
    const transactions = [
        { id: 1, name: 'Anju', date: '2024-12-01', amount: 500, status: 'Completed' },
        { id: 2, name: 'Anju', date: '2024-12-02', amount: 1200, status: 'Pending' },
        { id: 3, name: 'Anju', date: '2024-12-03', amount: 800, status: 'Completed' },
        { id: 4, name: 'Anu', date: '2024-12-01', amount: 300, status: 'Completed' },
        { id: 5, name: 'Anu', date: '2024-12-02', amount: 1500, status: 'Failed' },
        { id: 6, name: 'Anu', date: '2024-12-03', amount: 700, status: 'Completed' },
        { id: 7, name: 'Vishnu', date: '2024-12-01', amount: 2000, status: 'Completed' },
        { id: 8, name: 'Vishnu', date: '2024-12-02', amount: 1100, status: 'Pending' },
        { id: 9, name: 'Vishnu', date: '2024-12-03', amount: 500, status: 'Completed' },
        { id: 10, name: 'Vishnu', date: '2024-12-04', amount: 1300, status: 'Failed' }
    ];

    return (
        <div className="overflow-x-auto p-6">
            <table className="min-w-full table-auto bg-white border-collapse shadow-md rounded-lg">
                <thead className="bg-blue-500 text-white">
                    <tr>
                        <th className="py-3 px-6 text-left">ID</th>
                        <th className="py-3 px-6 text-left">Name</th>
                        <th className="py-3 px-6 text-left">Date</th>
                        <th className="py-3 px-6 text-left">Amount (₹)</th>
                        <th className="py-3 px-6 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id} className="border-t hover:bg-gray-100">
                            <td className="py-3 px-6">{transaction.id}</td>
                            <td className="py-3 px-6">{transaction.name}</td>
                            <td className="py-3 px-6">{transaction.date}</td>
                            <td className="py-3 px-6">{transaction.amount}</td>
                            <td className="py-3 px-6">
                                <span
                                    className={`${
                                        transaction.status === 'Completed'
                                            ? 'text-green-500'
                                            : transaction.status === 'Pending'
                                            ? 'text-yellow-500'
                                            : 'text-red-500'
                                    }`}
                                >
                                    {transaction.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default History
