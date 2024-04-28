<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.svg';
</script>

<header>
	<div class="navbar bg-[#EBEDEF]">
		<div class="flex-none block md:hidden">
			<div class="dropdown">
				<div tabindex="0" role="button" class="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h7"
						/></svg
					>
				</div>
				<ul
					tabindex="0"
					class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li><a>Document</a></li>
					<li><a>Image</a></li>
					<li><a>Audio</a></li>
					<li><a>Video</a></li>
				</ul>
			</div>
		</div>

		<div class="flex-1">
			<a class="btn btn-ghost text-xl" data-sveltekit-preload-data="tap" href="/"
				><img class="h-8 w-8 mr-2" src={logo} alt="MockSample logo" /> MockSample</a
			>
		</div>
		<div class="flex-none hidden md:block">
			<ul class="menu menu-horizontal px-1">
				<li>
					<summary>Document</summary>
				</li>
				<li>
					<summary>Image</summary>
				</li>
				<li>
					<summary>Audio</summary>
				</li>
				<li>
					<summary>Video</summary>
				</li>
			</ul>
		</div>
	</div>
</header>
