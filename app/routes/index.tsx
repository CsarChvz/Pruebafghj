import { redirect } from "@remix-run/node";
import { getUserSession, signOut } from "~/utils/session.server";
import { Form } from "@remix-run/react";
import { Button } from "@chakra-ui/react";
export let action = ({ request }) => {
  return signOut(request);
};

export let loader = async ({ request }) => {
  const sessionUser = await getUserSession(request);
  if (!sessionUser) {
    return redirect("/register");
  }

  return null;
};

export default function Index() {
  return (
    <div className="remix__page">
      <main>
        <h2>Welcome to Remix Firebase demo</h2>

        <Form method="post">
          <Button type="submit">Sign Out</Button>
        </Form>
      </main>
    </div>
  );
}
