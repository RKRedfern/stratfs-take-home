import React, { useState, useEffect } from 'react';
import AddAccountForm from './AddAccountForm'
import RowComponent from './RowComponent'

const Table = () => {
    return(
        <div>
            <h1> This is the table </h1>
            <RowComponent/>
            <AddAccountForm/>
        </div>
    )
}

export default Table;