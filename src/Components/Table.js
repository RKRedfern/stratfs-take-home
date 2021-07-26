import React, { useState, useEffect } from 'react';
//import AddAccountForm from './AddAccountForm'
import RowComponent from './RowComponent'
//import Headings from './Headings'
import AddAccountForm from './AddAccountForm';

const Table = () => {

    const [tableData, setTableData] = useState([]);
    const [formDisplay, setFormDisplay] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch('https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json')
        .then(r => r.json())
        .then(r => setTableData(r))
    }

    let accountSum = 0

    if(tableData.length > 0){
        for(let i = 0; i < tableData.length; i++){
            accountSum += tableData[i].balance
        }
    }

    const displayToyForm = () => {
        setFormDisplay(!formDisplay)
    }

    const addAccount = (formData) => {
        setTableData([ ...tableData, formData ])
    }

    return(
        <div className="Table">
            <table>
                <thead>
                    <tr>
                        <th>
                        <input type="checkbox"
                        //checked={selectAll}
                        //onChange={toggleSelectAll}
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
                    <RowComponent key={account.id} account={account}/>
                    );
                })}
                
                </tbody>
                <tfoot>
                    <th> <button onClick={displayToyForm}> Add Account </button></th>
                    <th> </th>
                    <th> Selected: </th>
                    <th> Row Count: {tableData.length} </th>
                    <th> Total: </th>
                    <th> {accountSum} </th>
                </tfoot>
            </table>
            {formDisplay ? <AddAccountForm addAccount={addAccount} /> : null }
        </div>
    )
}

export default Table;