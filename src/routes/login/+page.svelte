<script>
  import { goto } from '$app/navigation';
  let email = '', password = '', error = '';

  async function handleLogin() {
    const res = await fetch('https://moh55mn.pythonanywhere.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ email, password }),
      credentials: 'include'
    });

    if (res.redirected) {
      goto('/dashboard');
    } else {
      error = 'Login fehlgeschlagen';
    }
  }
</script>

<h1>Login</h1>
<form on:submit|preventDefault={handleLogin}>
  <input bind:value={email} placeholder="E-Mail" />
  <input type="password" bind:value={password} placeholder="Passwort" />
  <button>Login</button>
  {#if error}<p>{error}</p>{/if}
</form>
