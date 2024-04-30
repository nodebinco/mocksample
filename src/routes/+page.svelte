<script>
	const files = [
		{
			name: 'Video Files',
			description:
				'These video files are excellent for use in testing and demos. Download free files in a variety of formats.',
			slug: '/sample-video-files'
		},
		{
			name: 'Audio Files',
			description:
				'Does the testing require MP3, WAV, or another audio format? Choose free files based on size and format.',
			slug: '/sample-audio-files'
		},
		{
			name: 'Document Files',
			description:
				'We provide a whole set of document formats: DOC, DOCX, ODT, PDF, XLS, PPT, PPS, and others. You can download these formats for free.',
			slug: '/sample-document-files'
		},
		{
			name: 'Image Files',
			description:
				'An image bank for testing. Download from various sizes and formats (jpg, png, gif, webp, avif).',
			slug: '/sample-image-files'
		},
		{
			name: 'Other Files',
			description:
				'A collection of text files and archives. The files can be downloaded in HTML and CSV formats.',
			slug: '/sample-other-files'
		}
		/*
		{
			name: 'Lorem Ipsum Generator',
			description: 'A tool that provide dummy paragraph generator according to the requirement.',
			slug: '/lorem-ipsum-generator'
		},
		{
			name: 'Data Generator',
			description: 'Data Generator is a free tool that helps user to generate test data for free.',
			slug: '/data-generator'
		},
		{
			name: 'Placeholder Image Generator',
			description:
				'Placeholder Image Generator is a tool to generate dummy images that can be used to design web pages.',
			slug: '/placeholder-image-generator'
		}
  */
	];
</script>

<svelte:head>
	<title>MockSample | Free Sample Files and Mock Data</title>
	<meta name="description" content="Free Sample Files and Mock Data" />
</svelte:head>

<section class="text-center max-w-5xl mx-auto">
	<h1>Mock Sample Files Download</h1>

	<p class="mt-2">
		If you need example / dummy files for testing or demo and presentation purpose, this is a great
		place for you. The files might be useful for testing upload, HTML5 videos etc. All files are
		free to download and use. We care for our content. All files are safe from viruses and
		adults-only content.
	</p>
	<div class="my-8 grid grid-cols-1 md:grid-cols-3 gap-6">
		{#each Object.entries(files) as [key, value]}
			<div class="card bg-base-100 shadow">
				<div class="card-body">
					<h2 class="card-title">{value.name}</h2>
					<p>{value.description}</p>
					<div class="card-actions justify-center mt-2">
						<a class="btn w-full" href={value.slug}>Browse</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
