<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Image Files',
		parentSlug: '/sample-image-files',
		title: 'JPG'
	};

	const files = [
		{
			attr0: 'Sample JPEG Image',
			attr1: '1.5MB',
			attr2: '1920x1080',
			downloadUrl: '/mocksample_jpg_sample_image_1.5MB_1920x1080.jpg'
		}
	];

	const faqs = [
		{
			question: 'What is a JPG file?',
			answer:
				'JPG is a commonly used file format for digital images. It is a lossy compression method, which means that some image quality is lost when the JPG file is compressed. However, JPG files can still retain a high level of image quality while reducing file size.'
		},
		{
			question: 'What are JPG files used for?',
			answer:
				'JPG files are used for storing and sharing digital images, photographs, and graphics. They are widely supported by web browsers, image editing software, and digital cameras.'
		},
		{
			question: 'What are the advantages of using JPG files?',
			answer:
				'JPG files can achieve significant compression ratios without substantially compromising image quality. They are suitable for photographs and images with complex color gradients.'
		},
		{
			question: 'What are the disadvantages of using JPG files?',
			answer:
				'JPG is a lossy compression format, so repeated editing and saving of JPG files can result in a loss of image quality. Additionally, JPG files may not be ideal for images with sharp edges or text.'
		},
		{
			question: 'How can I open and view JPG files?',
			answer:
				'JPG files can be opened and viewed using any web browser or image viewing software. Common image editing software like Adobe Photoshop, GIMP, and Paint.NET also support JPG files.'
		},
		{
			question: 'Can I convert JPG files to other formats?',
			answer:
				'Yes, JPG files can be converted to various formats such as PNG, GIF, BMP, and TIFF using image editing software or online conversion tools.'
		},
		{
			question: 'Can I use this sample JPG image in my commercial projects?',
			answer:
				'Yes, our free sample JPG image is available for commercial use. Feel free to download and utilize it in your projects without any licensing restrictions.'
		}
	];

	const metaTitle = 'Sample JPG Files Free Download | MockSample';
	const metaDescription =
		'Download free, sample JPG files for testing and development. Explore our collection of JPEG images in various resolutions and qualities.';
	const metaKeywords =
		'jpg samples, free jpg files, sample images, test images, image samples, jpg data, jpg examples, image testing, image development, mock images';
	const title = 'Sample JPG Files Free Download';
	const description =
		'Download free, sample <strong>JPG (JPEG Image) files</strong> for various purposes. These files are perfect for testing image processing applications, creating mockups, or simply having sample images for reference. Get started now and download your free JPG files!';

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
