
import { fireEvent, render, screen } from "@testing-library/react"
import Cart from "./Cart"

describe('Cart', ()=>{
    it('renders a button', ()=>{
        render(<Cart cancel={() => {}} />)
    })

    describe('When user clicks purchase button', () => {
      it('renders Thank you!', () => {
        render(<Cart cancel={() => {}}/>)
        expect(screen.queryByText('Thank you!')).not.toBeInTheDocument()
        fireEvent.click(screen.getByText(/Purchase/i))
        expect(screen.getByText('Thank you!')).toBeInTheDocument()
        })
    })

    describe('When user click cancel button', () => {
        it.only('call cancel button', () => {
            const cancel = jest.fn();
            render(<Cart cancel={cancel}/>)
            fireEvent.click(screen.getByText(/Cancel/i))
            expect(cancel).toHaveBeenCalledTimes(1)
        })
    })
})