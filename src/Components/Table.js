import React, { useState, useEffect } from 'react';
import RowComponent from './RowComponent'
import AddAccountForm from './AddAccountForm';

const Table = () => {

    const [tableData, setTableData] = useState([]);
    const [formDisplay, setFormDisplay] = useState(false)
    const [selectAll, setSelectAll] = useState(false);
    const [numSelected, setNumSelected] = useState(0);
    const [sum, setSum] = useState(0)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch('https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json')
        .then(r => r.json())
        .then(r => setTableData(r.map((account) => {
                return {...account, isSelected: false} 
        })))
        
    }

    const accountSum = () => {
        let accountSum = 0
        if(tableData.length > 0){
            for(let i = 0; i < tableData.length; i++){
                accountSum += tableData[i].balance
            }
        }
        setSum(accountSum)
    }

    const displayAccountForm = () => {
        setFormDisplay(!formDisplay)
    }

    const addAccount = (formData) => {
        // fetch('https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json', {
        //     method: "POST",
        //     headers: {
        //         "Accepts": "application/json",
        //         "Content-type": "application/json"
        //     },
        //     body: JSON.stringify(formData)
        // })
        //     .then(r => r.json())
        //     .then(newFormData => {
        //     setTableData([ ...tableData, formData ])
        // })

        setTableData([ ...tableData, formData ])
    }

    const toggleSelectAccount = (id) => {
        const updatedAccountData = tableData.map((acct) => {
            if (acct.id !== id) return acct;
            if (acct.isSelected && selectAll) setSelectAll(false);
            setNumSelected((numSelected) =>
                acct.isSelected ? numSelected - 1 : numSelected + 1
            );
            return { ...acct, isSelected: !acct.isSelected };
        });
        setTableData(updatedAccountData);
    };

    const toggleSelectAll = () => {
        const updatedAccountData = tableData.map((acct) => {
            return { ...acct, isSelected: !selectAll };
        });
        setNumSelected(selectAll ? 0 : tableData.length);
        setSelectAll(!selectAll);
        setTableData(updatedAccountData);
    };

    const deleteSelected = () => {
        const updatedTableData = tableData.filter((account) => {
            return !account.isSelected
        })
        setTableData(updatedTableData)
    }

    return(
        <div className="Table">
            <table>
                <thead>
                    <tr>
                        <th>
                        <input type="checkbox"
                            checked={selectAll}
                        onChange={toggleSelectAll}
                        />
                        </th>
                        <th>Creditor Name</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th> % </th>
                        <th>Balance</th>
                        {/* <Headings/> */}
                    </tr>
                </thead>
                <tbody>
                
                {tableData.map(account => {
                    return(
                    <RowComponent key={account.id} account={account} toggle={toggleSelectAccount} />
                    );
                })}
                
                </tbody>
                <tfoot>
                    <td> <button onClick={displayAccountForm}> Add Account </button></td>
                    <td> <button onClick={deleteSelected}> Delete Selected </button></td>
                    <td> Selected: {numSelected} </td>
                    <td> Row Count: {tableData.length} </td>
                    <td> <button onClick={accountSum}> Sum Total: </button> </td>
                    <td> ${sum.toLocaleString()} </td>
                </tfoot>
            </table>
            {formDisplay ? <AddAccountForm addAccount={addAccount} display={displayAccountForm} sum={accountSum}/> : null }
        </div>
    )
}

export default Table;