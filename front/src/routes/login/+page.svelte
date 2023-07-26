<script lang="ts">
	import Alert from '../../components/Alert.svelte';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<svelte:head>
	<title>Login</title>
    <meta name="description" content="Login page." />
</svelte:head>

<div class="flex flex-col justify-center">
	<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<h2 class="mt-10 text-center text-4xl font-bold leading-9 tracking-tight">Sign in</h2>
	</div>

	<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
		<form class="space-y-6" method="POST">
			<div>
				<label for="email" class="block text-sm font-medium leading-6">Email address</label>
				<div class="mt-2">
					<input
						id="email"
						name="email"
						type="email"
						autocomplete="email"
                        value={form?.email ?? ''}
						required
						class="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-default-light text-default-dark placeholder:text-default-dark focus:ring-2 focus:ring-inset focus:ring-primary-light sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div>
				<div class="flex items-center justify-between">
					<label for="password" class="block text-sm font-medium leading-6">Password</label>
				</div>
				<div class="mt-2">
					<input
						id="password"
						name="password"
						type="password"
						autocomplete="current-password"
						required
						class="block w-full rounded-md border-0 p-1.5 shadow-sm ring-1 ring-inset ring-default-light text-default-dark placeholder:text-default-dark focus:ring-2 focus:ring-inset focus:ring-primary-light sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
			{#if form?.invalid}<Alert text="Email or Password invalid" />{/if}
			{#if form?.missing}<Alert text="Email or Password missing" />{/if}
			<div>
				<button
					type="submit"
					class="flex w-full justify-center rounded-md bg-primary-light px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light"
					>Sign in</button
				>
			</div>
		</form>
	</div>
</div>
