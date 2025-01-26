import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider, SurveyContext } from '../../utils/context';
import Results from './index';
import { useFetch } from '../../utils/hooks';

// 1. Mock the useFetch hook
vi.mock('../../utils/hooks', () => ({
  useFetch: vi.fn(),
}));

describe('Results Component', () => {
  it('renders loading state initially', () => {
    // 2. Mock the return value for the "loading" scenario
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    // 3. Render the component wrapped in a MemoryRouter and required Providers
    render(
      <MemoryRouter>
        <ThemeProvider>
          <SurveyContext.Provider value={{ answers: {} }}>
            <Results />
          </SurveyContext.Provider>
        </ThemeProvider>
      </MemoryRouter>
    );

    // 4. The component must display "Loading..." or some text containing "loading"
    //    in order for this test to pass
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders results when data is available', () => {
    // 1. Mock the return value for the "success" scenario
    useFetch.mockReturnValue({
      data: {
        resultsData: [
          { title: 'Skill 1', description: 'Description 1' },
          { title: 'Skill 2', description: 'Description 2' },
        ],
      },
      isLoading: false,
      error: null,
    });

    // 2. Render the component
    render(
      <MemoryRouter>
        <ThemeProvider>
          <SurveyContext.Provider value={{ answers: {} }}>
            <Results />
          </SurveyContext.Provider>
        </ThemeProvider>
      </MemoryRouter>
    );

    // 3. Check for the heading text
    expect(
      screen.getByText('You require the following skills:')
    ).toBeInTheDocument();

    // 4. If "Skill 2" appears twice, handle it. For instance:
    //    Confirm both instances are in the document:
    const skill2Elements = screen.getAllByText('Skill 2');
    expect(skill2Elements).toHaveLength(2);

    //  Or if you expect only one appearance of "Skill 2",
    //  you may need to adjust your code or test approach.
  });

  it('displays an error message when there is an error', () => {
    // 1. Mock the return value for the "error" scenario
    useFetch.mockReturnValue({
      data: null,
      isLoading: false,
      error: true,
    });

    // 2. Render the component
    render(
      <MemoryRouter>
        <ThemeProvider>
          <SurveyContext.Provider value={{ answers: {} }}>
            <Results />
          </SurveyContext.Provider>
        </ThemeProvider>
      </MemoryRouter>
    );

    // 3. Check for the error text
    expect(screen.getByText(/there is an error/i)).toBeInTheDocument();
  });
});
