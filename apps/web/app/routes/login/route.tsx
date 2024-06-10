import { ActionFunctionArgs, LoaderFunctionArgs, json } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';
import { commitSession, getSession } from '~/sessions';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const session = await getSession(request.headers.get('Cookie'));
  const accessToken = session.get('accessToken');
  const refreshToken = session.get('refreshToken');

  return json({
    accessToken,
    refreshToken,
  });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  const session = await getSession(request.headers.get('Cookie'));
  const headers = new Headers();
  const body = await request.formData();
  const email = body.get('email');
  const password = body.get('password');

  try {
    const response = await fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    session.set('accessToken', data.accessToken);
    session.set('refreshToken', data.refreshToken);
    headers.append('Set-Cookie', await commitSession(session));

    return json(data, { headers });
  } catch (error) {
    return new Response('Unauthorized', { status: 401 });
  }
};

export default function Login() {
  const data = useActionData<typeof action>();

  return (
    <div>
      <Form method="post">
        <div>
          <label>
            Email
            <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input type="password" name="password" />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </Form>
      {data ? (
        <div>
          <div>accessToken: {data.accessToken}</div>
          <div>refreshToken: {data.refreshToken}</div>
        </div>
      ) : null}
    </div>
  );
}
