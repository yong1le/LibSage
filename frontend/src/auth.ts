import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/sveltekit/providers/github';

export const { handle, signIn } = SvelteKitAuth({
  providers: [GitHub],
  callbacks: {
    jwt({ token, account, profile }) {
      if (account) {
        token.access_token = account?.access_token;
      }
      if (profile) {
        token.profile = profile;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.access_token = token.access_token;
        session.profile = token.profile;
      }
      return session;
    }
  }
});
