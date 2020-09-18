import { screen, render } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />);

    expect(
      screen.getByRole('heading', { name: /react boilerplate/i })
    ).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({
      color: '#FFF',
      'background-color': '#06092b'
    });
  });
});
