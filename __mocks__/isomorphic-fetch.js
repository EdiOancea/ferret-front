let value;

const fetch = jest.fn(() => ({
  json: () => new Promise(resolve => resolve(value)),
}));

fetch.setValue = v => {
  value = v;
};

export default fetch;
