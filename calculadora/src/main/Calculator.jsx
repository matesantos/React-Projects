// eslint-disable-next-line
import React, { useState, useEffect } from'react'
import './Calculator.css'
import Display from '../components/Display/Display'
import Button from '../components/Buttons/Button'

const initialValues = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default function Calculator(){
    
    const [value, setValue] = useState({ ...initialValues })
    
    const clearMemory = () => {
        setValue({ ...initialValues })
    }

    const setOperation = (op) =>{
        if(value.current === 0 ){
            setValue(value => ({ ...value, current:1, operation:op, clearDisplay: true }))
        }else{
            const equals = op === '='
            const currentOperation = value.operation
            const values = [...value.values]
            switch(currentOperation){
                case '/':
                    values[0] = values[0] / values[1]
                    break 
                case '*':
                    values[0] = values[0] * values[1]
                    break
                case '-':
                    values[0] = values[0] - values[1]
                    break
                case '+':
                    values[0] = values[0] + values[1]
                    break
                default:
                    return
            }
            values[1] = 0
            setValue(value => ({
                ...value, 
                values, 
                displayValue: values[0], 
                operation: equals ? null : op,
                current: equals ? 0:1,
                clearDisplay: !equals
            }))
        }
    }

    const addDigit = d =>{
        if(d === '.' && value.displayValue.includes('.'))
            return //se já tiver um ponto no número, ignora e retorne para o display
        
        const clearDisplay = value.displayValue === '0' || value.clearDisplay
        const currentValue = clearDisplay ? '' : value.displayValue
        const displayValue = currentValue + d
        
        setValue(value => ({ ...value, displayValue, clearDisplay: false }))
        
        const values = [ ...value.values ]
        if(d !== '.'){
            const i = value.current
            const newValue = parseFloat(displayValue)
            values[i] = newValue 
            setValue(value => ({ ...value, values }))
        }
    }

    return(
        <div className="calculator">
            <Display value={value.displayValue} />
            <Button label='AC' click={ () => clearMemory() } triple/>
            <Button label='/' click={ op => setOperation(op) } operation/>
            <Button label='7' click={ d => addDigit(d) }/>
            <Button label='8' click={ d => addDigit(d) }/>
            <Button label='9' click={ d => addDigit(d) }/>
            <Button label='*' click={ op => setOperation(op) } operation/>
            <Button label='4' click={ d => addDigit(d) }/>
            <Button label='5' click={ d => addDigit(d) }/>
            <Button label='6' click={ d => addDigit(d) }/>
            <Button label='-' click={ op => setOperation(op) } operation/>
            <Button label='1' click={ d => addDigit(d) }/>
            <Button label='2' click={ d => addDigit(d) }/>
            <Button label='3' click={ d => addDigit(d) }/>
            <Button label='+' click={ op => setOperation(op) } operation/>
            <Button label='0' click={ d => addDigit(d) } double/>
            <Button label='.' click={ d => addDigit(d) }/>
            <Button label='=' click={ op => setOperation(op) } operation/>
        </div>
    )
}
