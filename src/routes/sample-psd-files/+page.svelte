<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Image Files',
		parentSlug: '/sample-image-files',
		title: 'PSD'
	};

	const files = [
		{
			attr0: 'Sample PSD File',
			attr1: '5MB',
			attr2: 'N/A',
			downloadUrl: '/mocksample_psd_sample_file_5MB.psd'
		}
	];

	const faqs = [
		{
			question: 'What is a PSD file?',
			answer:
				'A PSD file is a layered image file format used in Adobe Photoshop. It allows users to work with multiple layers, each containing different elements of an image, such as text, graphics, and effects.'
		},
		{
			question: 'What are PSD files used for?',
			answer:
				'PSD files are primarily used for editing and manipulating images in Adobe Photoshop. They are commonly used by graphic designers, photographers, and web developers for creating and editing digital artwork.'
		},
		{
			question: 'What are the advantages of using PSD files?',
			answer:
				'PSD files preserve the layers and editing history of an image, allowing for non-destructive editing and fine-tuning of individual elements. They also support advanced features like layer effects, masks, and adjustment layers.'
		},
		{
			question: 'What are the disadvantages of using PSD files?',
			answer:
				'PSD files can be large and may require specialized software like Adobe Photoshop to edit. They may also have compatibility issues when opened in other image editing programs.'
		},
		{
			question: 'How can I open and edit PSD files?',
			answer:
				'PSD files can be opened and edited using Adobe Photoshop or other compatible image editing software like GIMP or Affinity Photo. Some online services also offer limited support for viewing and editing PSD files.'
		},
		{
			question: 'Can I use this sample PSD file in my commercial projects?',
			answer:
				'Yes, our free sample PSD file is available for commercial use. Feel free to download and utilize it in your projects without any licensing restrictions.'
		}
	];

	const metaTitle = 'Sample PSD Files Free Download | MockSample';
	const metaDescription =
		'Download free, sample PSD files for testing and development. Explore our collection of layered image files.';
	const metaKeywords =
		'psd samples, free psd files, sample images, test images, psd samples, psd examples, image testing, image development, mock images';
	const title = 'Sample PSD Files Free Download';
	const description =
		'Download free, sample <strong>PSD (Photoshop) files</strong> for various purposes. These files are perfect for testing image editing software, exploring layered designs, or simply having sample images for reference. Get started now and download your free PSD files!';

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

```javascript
<FileDownloadPage {data} />
