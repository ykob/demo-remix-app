import { ActionFunctionArgs } from '@remix-run/node';
import { Form, useActionData } from '@remix-run/react';

export const action = async ({ request }: ActionFunctionArgs) => {
  const body = await request.formData();
  const email = body.get('email');
  const password = body.get('password');
  const response = await fetch('http://localhost:4000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  return response.json();
};

export default function Home() {
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
      <div>{data}</div>
    </div>
  );
}
