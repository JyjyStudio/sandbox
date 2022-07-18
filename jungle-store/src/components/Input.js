import React, { useState } from 'react'

const Input = () => {

    const [inputState, setInputState] = useState('')
    
    const handleInput = e => {
        setInputState(e.target.value)
    }

    const checkInput = e => {
        !inputState.includes('@') && alert('Attention, il n\'y a pas d\'@, ceci n\'est pas une adresse email valide.')
    }

    return (
        <div className='input-container'>

            <label htmlFor='newsletter' className='msg'>Laissez-nous votre mail :</label>
            
            <input 
                type='text' 
                className='newsletter' 
                id='newsletter'
                value={inputState} //controlled
                onChange={handleInput}
                onBlur={checkInput}
            />

        </div>
    )
}

export default Input