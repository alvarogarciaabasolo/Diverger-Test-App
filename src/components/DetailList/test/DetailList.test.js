import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DetailList } from '../DetailList';

describe('DetailList', () => {
  it('renders title and films', () => {
    const title = 'Films';
    const items = [
      'The Empire Strikes Back',
      'Return of the Jedi',
    ];

    render(<DetailList title={title} items={items} />);

    expect(screen.getByText('Films')).toBeInTheDocument();
    expect(screen.getByText('The Empire Strikes Back')).toBeInTheDocument();
    expect(screen.getByText('Return of the Jedi')).toBeInTheDocument();
  });

  it('renders title and starships', () => {
    const title = 'Starships';
    const items = ['Millennium Falcon', 'X-Wing'];

    render(<DetailList title={title} items={items} />);

    expect(screen.getByText('Starships')).toBeInTheDocument();
    expect(screen.getByText('Millennium Falcon')).toBeInTheDocument();
    expect(screen.getByText('X-Wing')).toBeInTheDocument();
  });

  it('renders title and vehicles', () => {
    const title = 'Vehicles';
    const items = ['Speeder Bike', 'AT-AT'];

    render(<DetailList title={title} items={items} />);

    expect(screen.getByText('Vehicles')).toBeInTheDocument();
    expect(screen.getByText('Speeder Bike')).toBeInTheDocument();
    expect(screen.getByText('AT-AT')).toBeInTheDocument();
  });

  it('renders nothing when items array is empty', () => {
    const title = 'Empty List';
    const items = [];

    const { container } = render(<DetailList title={title} items={items} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('renders nothing when items prop is not provided', () => {
    const title = 'No Items Provided';

    const { container } = render(<DetailList title={title} items={[]} />);

    expect(container).toBeEmptyDOMElement();
  });
});
