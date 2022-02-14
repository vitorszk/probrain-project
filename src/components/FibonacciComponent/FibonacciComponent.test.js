import React from 'react'
 import '@testing-library/jest-dom'
 import { render, screen } from '@testing-library/react'
 import { FibonacciComponent } from '.'

 
 describe('FibonacciComponent Component', () => {
   it('Should render the FibonacciComponent component correctly', () => {
     const view = render(<FibonacciComponent number={2} />)
     const textIsFibonacci = screen.getByTestId('FibonacciComponent')

     expect(view).toMatchSnapshot()
     expect(textIsFibonacci).toContainHTML('2 está na Sequência de Fibonacci!')
   })
 })
 