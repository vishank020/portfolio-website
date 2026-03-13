// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// jsdom does not implement scrolling APIs used by App side effects.
Object.defineProperty(window, 'scrollTo', {
	value: jest.fn(),
	writable: true,
});
