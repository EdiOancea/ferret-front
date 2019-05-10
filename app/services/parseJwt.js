const parseJwt = token =>
  token.length === 0 ? {} : JSON.parse(atob(token.split('.')[1]));

export default parseJwt;
