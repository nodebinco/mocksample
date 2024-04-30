<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Image Files',
		parentSlug: '/sample-image-files',
		title: 'GIF'
	};

	const files = [
		{
			attr0: 'Sample GIF Image',
			attr1: '500KB',
			attr2: '800x600',
			downloadUrl: '/mocksample_gif_sample_image_500KB_800x600.gif'
		}
	];

	const faqs = [
		{
			question: 'What is a GIF file?',
			answer:
				'GIF is a bitmap image format that supports animated images. It uses lossless compression and is limited to 256 colors, making it suitable for simple animations, logos, and graphics.'
		},
		{
			question: 'What are GIF files used for?',
			answer:
				'GIF files are commonly used for short animations, icons, banners, and memes on the web. They are widely supported by web browsers and can be easily shared and embedded in web pages.'
		},
		{
			question: 'What are the advantages of using GIF files?',
			answer:
				'GIF files support animation and transparency, allowing for creative and engaging visual content. They are also widely supported by web browsers and require no additional plugins or software.'
		},
		{
			question: 'What are the disadvantages of using GIF files?',
			answer:
				'GIF files have limited color depth and cannot accurately represent complex images or photographs. They may also have larger file sizes compared to more modern formats like APNG or WebP.'
		},
		{
			question: 'How can I open and view GIF files?',
			answer:
				'GIF files can be opened and viewed using any web browser or image viewing software. Most operating systems come with built-in support for viewing GIF files.'
		},
		{
			question: 'Can I convert GIF files to other formats?',
			answer:
				'Yes, GIF files can be converted to other formats such as MP4, APNG, or WebP using image editing software or online conversion tools.'
		},
		{
			question: 'Can I use this sample GIF image in my commercial projects?',
			answer:
				'Yes, our free sample GIF image is available for commercial use. Feel free to download and utilize it in your projects without any licensing restrictions.'
		}
	];

	const metaTitle = 'Sample GIF Files Free Download | MockSample';
	const metaDescription =
		'Download free, sample GIF files for testing and development. Explore our collection of GIF images in various resolutions and qualities.';
	const metaKeywords =
		'gif samples, free gif files, sample images, test images, image samples, gif data, gif examples, image testing, image development, mock images';
	const title = 'Sample GIF Files Free Download';
	const description =
		'Download free, sample <strong>GIF (Graphics Interchange Format) files</strong> for various purposes. These files are perfect for testing animations, creating icons, or simply having sample images for reference. Get started now and download your free GIF files!';

	const data = {
		files,
		metaTitle,
		metaDescription,
		title,
		description,
		breadcrumb,
		faqs
	};
</script>

<FileDownloadPage {data} />
