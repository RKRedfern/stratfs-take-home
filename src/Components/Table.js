import React, { useState, useEffect } from 'react';
import AddAccountForm from './AddAccountForm'
import RowComponent from './RowComponent'

const Table = () => {

    const [tableData, setTableData] = useState({accounts: []})

    useEffect(() => {
        fetchData()
    })

    const fetchData = () => {
        fetch('https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json')
        .then(r => r.json())
        .then(r => setTableData(r))
    }

    return(
        <div>
            <h1> This is the table </h1>
            <RowComponent/>
            <AddAccountForm/>
        </div>
    )
}

export default Table;