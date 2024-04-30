<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Image Files',
		parentSlug: '/sample-image-files',
		title: 'WEBP'
	};

	const files = [
		{
			attr0: 'Sample WEBP Image',
			attr1: '500KB',
			attr2: '800x600',
			downloadUrl: '/mocksample_webp_sample_image_500KB_800x600.webp'
		}
	];

	const faqs = [
		{
			question: 'What is a WEBP file?',
			answer:
				'WEBP is an image format developed by Google that employs both lossy and lossless compression. It is designed to provide smaller file sizes and faster loading times compared to other image formats like JPEG and PNG.'
		},
		{
			question: 'What are WEBP files used for?',
			answer:
				'WEBP files are used for storing and displaying images on the web. They are supported by modern web browsers and offer advantages such as smaller file sizes and support for transparency and animation.'
		},
		{
			question: 'What are the advantages of using WEBP files?',
			answer:
				'WEBP files offer smaller file sizes compared to other image formats, resulting in faster loading times for web pages. They also support advanced features like transparency (alpha channel) and animation.'
		},
		{
			question: 'What are the disadvantages of using WEBP files?',
			answer:
				'WEBP files may not be supported by older web browsers or image editing software. Additionally, converting existing images to WEBP format may result in loss of quality or compatibility issues.'
		},
		{
			question: 'How can I open and view WEBP files?',
			answer:
				'WEBP files can be opened and viewed using modern web browsers like Google Chrome, Mozilla Firefox, and Microsoft Edge. Some image viewing software and graphics editors also support WEBP format.'
		},
		{
			question: 'Can I convert WEBP files to other formats?',
			answer:
				'Yes, WEBP files can be converted to other image formats such as JPEG or PNG using image editing software or online conversion tools.'
		},
		{
			question: 'Can I use this sample WEBP image in my commercial projects?',
			answer:
				'Yes, our free sample WEBP image is available for commercial use. Feel free to download and utilize it in your projects without any licensing restrictions.'
		}
	];

	const metaTitle = 'Sample WEBP Files Free Download | MockSample';
	const metaDescription =
		'Download free, sample WEBP files for testing and development. Explore our collection of images in WEBP format.';
	const metaKeywords =
		'webp samples, free webp files, sample images, test images, image samples, webp data, webp examples, image testing, image development, mock images';
	const title = 'Sample WEBP Files Free Download';
	const description =
		'Download free, sample <strong>WEBP (WebP Image) files</strong> for various purposes. These files are perfect for testing image processing applications, optimizing web performance, or simply having sample images for reference. Get started now and download your free WEBP files!';

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
