import { renderHook, act } from '@testing-library/react-hooks';
import useConverter from './src/utils/useConverter'; // Adjust the import path as necessary

describe('useConverter', () => {
  test('converts Fahrenheit to Celsius correctly', () => {
    const { result } = renderHook(() => useConverter(32, 'celsius'));

    act(() => {
      result.current; 
    });
    expect(result.current[0]).toBe(0); // 32°F is 0°C
  });

  test('converts Celsius to Fahrenheit correctly', () => {
    const { result } = renderHook(() => useConverter(0, 'fahrenheit'));

    act(() => {
      result.current; 
    });
    expect(result.current[0]).toBe(32);
  });
});