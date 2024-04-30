<script>
	export let data;
</script>

<svelte:head>
	<title>{data.metaTitle}</title>
	<meta name="description" content={data.metaDescription} />
</svelte:head>

<section class="text-center max-w-5xl mx-auto">
	<div class="text-sm breadcrumbs">
		<ul class="-ml-8">
			<li><a data-sveltekit-preload-data="hover" href="/">Home</a></li>
			<li>
				<a data-sveltekit-preload-data="hover" href={data.breadcrumb.parentSlug}
					>{data.breadcrumb.parentTitle}</a
				>
			</li>
			<li class="text-gray-500">{data.breadcrumb.title}</li>
		</ul>
	</div>

	<h1 class="mt-4">{data.title}</h1>
	<p class="mt-2 text-left">{@html data.description}</p>

	<div class="overflow-x-auto mt-4">
		<table class="table table-zebra">
			<tbody>
				{#each data.files as file, i}
					<tr>
						<th>{i + 1}</th>
						<td>{file.attr0}</td>
						{#if file.attr1 != null}
							<td>{file.attr1}</td>
						{/if}
						{#if file.attr2 != null}
							<td>{file.attr2}</td>
						{/if}
						<td><a class="btn btn-sm rounded-full btn-secondary" href={file.slug}>Download</a></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<div class="mt-8 text-left">
		<h2>Faqs</h2>

		<ul class="list-decimal">
			{#each data.faqs as faq}
				<li>
					<strong>{faq.question}</strong>
					<p>{@html faq.answer}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>
