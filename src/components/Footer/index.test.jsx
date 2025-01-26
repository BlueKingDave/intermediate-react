import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './';
import { ThemeProvider } from '../../utils/context';

describe('Footer Component', () => {
  it('Should render without crashing', () => {
    // Render Footer within the ThemeProvider
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    );

    // Example assertion to check if it rendered
    expect(screen.getByText(/Switch mode:/i)).toBeInTheDocument();
  });
});
