<script>
	import Header from './Header.svelte';
	import '../app.css';
	import logo from '$lib/images/logo.svg';
</script>

<div class="app">
	<Header />

	<main class="p-6">
		<slot />
	</main>

	<footer class="footer p-6 bg-base-200 text-base-content">
		<aside>
			<a class="font-bold text-xl" data-sveltekit-preload-data="tap" href="/">MockSample</a>
			<p>
				The sample data you need, when you need it<br />
				Copyright © 2024 Powered by <a href="/">MockSample.com</a>
			</p>
		</aside>
		<nav>
			<a class="link link-hover">Document</a>
			<a class="link link-hover">Image</a>
			<a class="link link-hover">Audio</a>
			<a class="link link-hover">Video</a>
		</nav>
		<nav>
			<a class="link link-hover">Blog</a>
			<a class="link link-hover">About Us</a>
			<a class="link link-hover" href="/contact-us">Contact Us</a>
			<a class="link link-hover" href="/privacy-policy">Privacy Policy</a>
		</nav>
	</footer>
</div>
