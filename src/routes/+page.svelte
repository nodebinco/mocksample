<script>
  const files = [
    {
      name: 'Video Files',
      description:
        'Explore our selection of video files, ideal for testing upload functionality, HTML5 video demonstrations, and more. Download these files in a variety of formats to suit your requirements.',
      slug: '/sample-video-files'
    },
    {
      name: 'Audio Files',
      description:
        'Whether you need MP3s, WAVs, or other audio formats, our library has you covered. Choose from a range of file sizes and formats for seamless integration into your testing environment.',
      slug: '/sample-audio-files'
    },
    {
      name: 'Document Files',
      description:
        'Access a comprehensive range of document formats, including DOC, DOCX, ODT, PDF, XLS, PPT, PPS, and others. These files are perfect for testing document processing and compatibility across different platforms.',
      slug: '/sample-document-files'
    },
    {
      name: 'Image Files',
      description:
        'Enrich your testing scenarios with our extensive collection of image files, available in various sizes and formats such as jpg, png, gif, webp, and avif. Perfect for testing image rendering and manipulation.',
      slug: '/sample-image-files'
    },
    {
      name: 'Data Files',
      description:
        'Elevate your testing capabilities with our collection of data files and archives, available in JSON and CSV formats. Use these files to simulate real-world data scenarios and test data processing functionalities.',
      slug: 'https://www.mocksample.com/sample-data-files'
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
  <div class="my-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    {#each Object.entries(files) as [key, value]}
      <div class="card bg-base-100 shadow">
        <div class="card-body">
          <h2 class="card-title">{value.name}</h2>
          <p>{value.description}</p>
          <div class="card-actions justify-center mt-2">
            <a class="btn text-lg w-full" href={value.slug}>Browse</a>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
