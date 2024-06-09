<script lang="ts">
  import { page } from '$app/stores';
  import { SignIn } from '@auth/sveltekit/components';

  const repos = $page.data.repos;

  const install = () => {
    window.location.href = 'https://github.com/apps/libsage/installations/select_target';
  };

  const data = async () => {
    // const res = await
  }
  
</script>

<div>
  <SignIn>
    <span slot="submitButton">Sign In with GitHub</span>
  </SignIn>

  <button on:click={install}> Install app </button>

</div>

<img src={$page.data.session?.user?.image} alt="gh pfp" />
<h1>{$page.data.session?.access_token}</h1>
<ul>
  {#each repos as repo}
    <li>{repo}</li>
  {/each}
</ul>
