import React, { useState } from 'react';

const AddAccountForm = (props) => {

    const defaultState = {
        creditorName: "", 
        firstName: "", 
        lastName: "", 
        minPaymentPercentage: "", 
        balance: 0
    }

    const [formInput, setFormInput] = useState(defaultState)

    const submitHandler = (e) => {
        e.preventDefault()
        props.addAccount(formInput)
        props.display()
        props.sum()
    }

    const changeHandler = (e) => {
        setFormInput({...formInput, [e.target.name]: e.target.value})
    }

    return(
        <>
            <form className="add-account-form" onSubmit={submitHandler}>
            <h3> Add Another Account </h3>
            <input type="text" name="creditorName" placeholder="Creditor Name" className="input-text" onChange={changeHandler}/>
            <br/>
            <input type="text" name="firstName" placeholder="First Name" className="input-text" onChange={changeHandler}/>
            <br/>
            <input type="text" name="lastName" placeholder="Last Name" className="input-text" onChange={changeHandler}/>
            <br/>
            <input type="text" name="minPaymentPercentage" placeholder="%" className="input-text" onChange={changeHandler} />
            <br/>
            <input type="text" name="balance" placeholder="Balance" className="input-text" onChange={changeHandler}/>
            <br/>
            <input type="submit" name="submit" value="Create Account" className="submit" />
            </form>
        </>
    )
}

export default AddAccountForm;