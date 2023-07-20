import jwt from 'jsonwebtoken'

const secret = process.env.JWT_SECRET || 'secret';

type TokenPyloud = {
  id: number,
  email: string,
  name: string,
}

export function generateToken(pyload: TokenPyloud): string {
  const token = jwt.sign(pyload, secret);
  return token;
}

export function verifyToken(token: string): TokenPyloud {
  const data = jwt.verify(token, secret) as TokenPyloud;
  return data;
}