import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ShowAppointement from '../components/ShowAppointement';

afterEach(cleanup);

it('render appointement name in the dom', () => {
  const appointementReducer = {
    appointements: [{ city: 'tantan', date: '2020-20-20', time: '12:45:45' }],
  };
  const { getByTestId } = render(
    <Router>
      <ShowAppointement appointementReducer={appointementReducer} />
    </Router>,
  );
  expect(getByTestId('city_name')).toBeInTheDocument();
  expect(getByTestId('date')).toBeInTheDocument();
  expect(getByTestId('time')).toBeInTheDocument();
});
