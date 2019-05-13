const fetch = jest.fn((url, content) => ({
  json: () => Promise.resolve(JSON.parse(content.body)),
}));

export default fetch;
