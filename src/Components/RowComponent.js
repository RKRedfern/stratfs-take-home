import React from 'react';

const RowComponent = (props) => {

    return(
        <>
        <tr>
        <td>
        <input
            type="checkbox"
            // checked={acct.isSelected}
            // onChange={() => toggleSelectAccount(acct.id)}
        />
        </td>
        <td>{props.account.creditorName}</td>
        <td>{props.account.firstName}</td>
        <td>{props.account.lastName}</td>
        <td>{props.account.minPaymentPercentage}</td>
        <td>${props.account.balance}</td>
        </tr>
        </>
    )
}

export default RowComponent;