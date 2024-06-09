import type { Session  } from '@auth/sveltekit';
import type { LayoutServerLoad } from './$types';

async function getRepos(session: Session | null) {
  try {
    const ghRepos = await fetch('http://gitter:8000/repos', {
      headers: {
        Authorization: `Bearer ${session?.access_token}`
      },
    });

    if (!ghRepos.ok) {
      console.log(await ghRepos.json())
      throw Error('Reponse not ok');
    }
    
    const body = JSON.parse((await ghRepos.json()).message)

    return body.map((repo: any) => repo.name);
  } catch (e) {
    console.log('Error:', e);
    return ['error'];
  }
}

/* async function data(session: Session | null) {
  try {
    const res = await fetch('https://api.github.com/user/in')
  } catch (e) {}
} */

export const load: LayoutServerLoad = async (event) => {
  const session = await event.locals.auth();

  return {
    session,
    repos: await getRepos(session)
  };
};
