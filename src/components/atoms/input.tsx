import React, { FC } from 'react'

interface InputProps {
    label?: string,
    placeholder?: string,
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}



const Input: FC<InputProps> = ({ label, placeholder, value, onChange }) => {
    return (
        <label>
            {label}
            <input placeholder={placeholder} value={value} onChange={onChange}></input>
        </label>
    )
}

export default Input