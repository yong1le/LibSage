import Image from "next/image";
import { signIn } from "@/auth"

export default function Home() {
  return (
    <main>
      <form
        action={async () => {
          "use server";
          await signIn("auth0");
        }}
      >
        <button type="submit">Signin with Auth0</button>
      </form>
    </main>
  );
}
