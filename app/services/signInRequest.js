import fetch from 'isomorphic-fetch';

const signInRequest = async data => {
  const res = await fetch('http://localhost:3001/api/signin', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
};

export default signInRequest;
