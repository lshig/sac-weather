import '@testing-library/jest-dom';

jest.mock('react-chartjs-2', () => ({
  Line: () => 'mock-line-chart'
}));
