const signInRequest = jest.fn(
  data => (data === 1 ? { token: 'token' } : { message: 'message' }),
);

export default signInRequest;
