import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CharacterList } from '../CharacterList';
import { useFetchCharacters } from '../../../services/useFetchCharacters';

jest.mock('../../../services/useFetchCharacters');

const mockedUseFetchCharacters = useFetchCharacters;

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('CharacterList', () => {
  beforeEach(() => {
    mockedUseFetchCharacters.mockReturnValue({
      characters: [],
      isLoading: false,
      totalPages: 0,
    });
  });

  it('renders loading state initially', () => {
    mockedUseFetchCharacters.mockReturnValue({
      characters: [],
      isLoading: true,
      totalPages: 0,
    });

    render(<CharacterList />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders character list', () => {
    mockedUseFetchCharacters.mockReturnValue({
      characters: [{ name: 'Luke Skywalker', url: '1' }],
      isLoading: false,
      totalPages: 1,
    });

    render(<CharacterList />);

    expect(screen.getByText('Luke Skywalker')).toBeInTheDocument();
  });

  it('navigates to character detail on click', () => {
    mockedUseFetchCharacters.mockReturnValue({
      characters: [{ name: 'Luke Skywalker', url: '1' }],
      isLoading: false,
      totalPages: 1,
    });

    render(
      <BrowserRouter>
        <CharacterList />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Luke Skywalker'));

    expect(mockNavigate).toHaveBeenCalledWith('/CharacterCard', {
      state: { character: { name: 'Luke Skywalker', url: '1' } },
    });
  });

  it('renders not found message when no characters', () => {
    mockedUseFetchCharacters.mockReturnValue({
      characters: [],
      isLoading: false,
      totalPages: 1,
    });

    render(<CharacterList />);

    expect(screen.getByText('Character not found')).toBeInTheDocument();
  });
});
