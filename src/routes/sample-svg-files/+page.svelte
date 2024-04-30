<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Image Files',
		parentSlug: '/sample-image-files',
		title: 'SVG'
	};

	const files = [
		{
			attr0: 'Sample SVG Image',
			attr1: '3KB',
			attr2: 'Vector',
			downloadUrl: '/mocksample_svg_sample_image_3KB_vector.svg'
		}
	];

	const faqs = [
		{
			question: 'What is an SVG file?',
			answer:
				'SVG stands for Scalable Vector Graphics. It is an XML-based vector image format used for displaying graphics on the web and other environments. SVG images can be scaled to any size without losing quality and are well-suited for logos, icons, and illustrations.'
		},
		{
			question: 'What are SVG files used for?',
			answer:
				'SVG files are used for creating and displaying vector graphics on the web, in applications, and in print. They are ideal for graphics that need to be scaled or resized without loss of quality, such as icons, logos, maps, and charts.'
		},
		{
			question: 'What are the advantages of using SVG files?',
			answer:
				'SVG files are scalable, meaning they can be resized without losing quality. They are also lightweight, making them suitable for web use as they load quickly and can be easily manipulated using CSS and JavaScript.'
		},
		{
			question: 'What are the disadvantages of using SVG files?',
			answer:
				'SVG files may not be suitable for complex images or photographs as they are best suited for simple graphics and illustrations. They may also have limited support for effects like gradients and filters in some web browsers.'
		},
		{
			question: 'How can I open and view SVG files?',
			answer:
				'SVG files can be opened and viewed using any web browser, as well as vector graphics editors like Adobe Illustrator, Inkscape, or Sketch.'
		},
		{
			question: 'Can I convert SVG files to other formats?',
			answer:
				'Yes, SVG files can be converted to various raster and vector formats using vector graphics editing software or online conversion tools.'
		},
		{
			question: 'Can I use this sample SVG image in my commercial projects?',
			answer:
				'Yes, our free sample SVG image is available for commercial use. Feel free to download and utilize it in your projects without any licensing restrictions.'
		}
	];

	const metaTitle = 'Sample SVG Files Free Download | MockSample';
	const metaDescription =
		'Download free, sample SVG files for testing and development. Explore our collection of vector graphics in SVG format.';
	const metaKeywords =
		'svg samples, free svg files, sample images, test images, vector graphics, svg data, svg examples, image testing, image development, mock images';
	const title = 'Sample SVG Files Free Download';
	const description =
		'Download free, sample <strong>SVG (Scalable Vector Graphics) files</strong> for various purposes. These files are perfect for testing vector graphics applications, creating icons, or simply having sample images for reference. Get started now and download your free SVG files!';

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
