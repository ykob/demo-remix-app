import { createCookieSessionStorage } from '@remix-run/node';

type SessionData = {
  accessToken: string;
  refreshToken: string;
};

type SessionFlashData = {
  error: string;
};

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    cookie: {
      name: '__session',
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: true,
      maxAge: 60,
      path: '/',
      sameSite: 'lax',
      secrets: ['s3cret1'],
      secure: true,
    },
  });

export { commitSession, destroySession, getSession };
