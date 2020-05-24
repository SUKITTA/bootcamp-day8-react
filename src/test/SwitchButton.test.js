import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SwitchButton from '../components/SwitchButton'

test('click button should return....'), () => {
    const { getByText, debug } = render(<SwitchButton/>)
    const btn = getByText('TURN ON')

    fireEvent.click(btn)

    expect((btn.textContent).toBe('TURN OFF'))
}

test('click button should return....'), () => {
    const { getByText, debug } = render(<SwitchButton isOn/>)
    const btn = getByText('TURN OFF')

    fireEvent.click(btn)

    expect((btn.textContent).toBe('TURN ON'))
}