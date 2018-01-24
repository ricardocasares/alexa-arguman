const fetch = jest.genMockFromModule("node-fetch");

fetch.mockReject = err =>
  fetch.mockImplementationOnce(() => Promise.reject(err));

fetch.mockResolve = res =>
  fetch.mockImplementationOnce(() => Promise.resolve(wrap(res)));

function wrap(res) {
  return {
    json: () => Promise.resolve(res)
  };
}

module.exports = fetch;
