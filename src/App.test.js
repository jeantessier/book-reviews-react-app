import { render, screen } from '@testing-library/react'
import App from './App'

it('renders the default title', () => {
  render(<App />)
  const titleElement = screen.getByText(/Readings/)
  expect(titleElement).toBeInTheDocument()
})
