import React from 'react';

const RowComponent = (props) => {

    const toggle = () => {
        props.toggle(props.account.id)
    }

    return(
        <>
        <tr>
        <td>
        <input
            type="checkbox"
            checked={props.account.isSelected}
            onChange={toggle}
        />
        </td>
        <td>{props.account.creditorName}</td>
        <td>{props.account.firstName}</td>
        <td>{props.account.lastName}</td>
        <td>{props.account.minPaymentPercentage}</td>
        <td>${props.account.balance.toLocaleString()}</td>
        </tr>
        </>
    )
}

export default RowComponent;