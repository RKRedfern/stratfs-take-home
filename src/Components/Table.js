import React, { useState, useEffect } from 'react';
//import AddAccountForm from './AddAccountForm'
import RowComponent from './RowComponent'
import Headings from './Headings'

const Table = () => {

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch('https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json')
        .then(r => r.json())
        .then(r => setTableData(r))
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
                        <Headings/>
                    </tr>
                </thead>
                <tbody>
                {tableData.map(account => {
                    <RowComponent key={account.id} account={account}/>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Table;