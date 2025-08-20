<script>
  import { goto } from '$app/navigation';
  let email = '', password = '', password2 = '', error = '', success = '';

  async function handleRegister() {
    if (password !== password2) {
      error = 'Passwörter stimmen nicht überein';
      return;
    }

    const res = await fetch('https://moh55mn.pythonanywhere.com/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ email, password, password2 }),
      credentials: 'include'
    });

    const text = await res.text();
    if (text.includes('Registrierung erfolgreich')) {
      success = 'Registrierung erfolgreich. Du wirst weitergeleitet...';
      setTimeout(() => goto('/login'), 2000);
    } else {
      error = 'Registrierung fehlgeschlagen';
    }
  }
</script>

<h1>Registrieren</h1>
<form on:submit|preventDefault={handleRegister}>
  <input bind:value={email} placeholder="E-Mail" />
  <input type="password" bind:value={password} placeholder="Passwort" />
  <input type="password" bind:value={password2} placeholder="Passwort wiederholen" />
  <button>Registrieren</button>
  {#if error}<p style="color:red">{error}</p>{/if}
  {#if success}<p style="color:green">{success}</p>{/if}
</form>
