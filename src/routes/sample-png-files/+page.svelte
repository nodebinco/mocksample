<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Image Files',
		parentSlug: '/sample-image-files',
		title: 'PNG'
	};

	const files = [
		{
			attr0: 'Sample PNG Image',
			attr1: '2MB',
			attr2: '1920x1080',
			downloadUrl: '/mocksample_png_sample_image_2MB_1920x1080.png'
		}
	];

	const faqs = [
		{
			question: 'What is a PNG file?',
			answer:
				'PNG is a raster graphics file format that supports lossless data compression. It is commonly used for storing images with transparent backgrounds, such as logos, icons, and graphics.'
		},
		{
			question: 'What are PNG files used for?',
			answer:
				'PNG files are used for various purposes, including web graphics, digital photographs, and images requiring transparent backgrounds. They are widely supported by web browsers and image editing software.'
		},
		{
			question: 'What are the advantages of using PNG files?',
			answer:
				'PNG files support lossless compression, meaning they preserve image quality without losing detail. They also support transparency, allowing for images with transparent backgrounds or layers.'
		},
		{
			question: 'What are the disadvantages of using PNG files?',
			answer:
				'PNG files tend to have larger file sizes compared to compressed formats like JPG, especially for complex images. They may not be the most efficient choice for photographs or images with many colors.'
		},
		{
			question: 'How can I open and view PNG files?',
			answer:
				'PNG files can be opened and viewed using any web browser or image viewing software. Popular image editing software like Adobe Photoshop, GIMP, and Paint.NET also support PNG files.'
		},
		{
			question: 'Can I convert PNG files to other formats?',
			answer:
				'Yes, PNG files can be converted to various formats such as JPG, GIF, BMP, and TIFF using image editing software or online conversion tools.'
		},
		{
			question: 'Can I use this sample PNG image in my commercial projects?',
			answer:
				'Yes, our free sample PNG image is available for commercial use. Feel free to download and utilize it in your projects without any licensing restrictions.'
		}
	];

	const metaTitle = 'Sample PNG Files Free Download | MockSample';
	const metaDescription =
		'Download free, sample PNG files for testing and development. Explore our collection of PNG images in various resolutions and qualities.';
	const metaKeywords =
		'png samples, free png files, sample images, test images, image samples, png data, png examples, image testing, image development, mock images';
	const title = 'Sample PNG Files Free Download';
	const description =
		'Download free, sample <strong>PNG (Portable Network Graphics) files</strong> for various purposes. These files are perfect for testing image processing applications, creating mockups, or simply having sample images for reference. Get started now and download your free PNG files!';

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
