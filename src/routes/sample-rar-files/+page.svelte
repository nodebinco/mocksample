<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Data Files',
		parentSlug: '/sample-data-files',
		title: 'RAR'
	};

	const files = [
		{
			attr0: 'Sample RAR File',
			attr1: '1.5MB',
			attr2: 'N/A',
			downloadUrl: '/mocksample_rar_sample_file_1.5MB.rar'
		}
	];

	const faqs = [
		{
			question: 'What is a RAR file?',
			answer:
				'A RAR file is an archive file format that supports lossless data compression. It is similar to ZIP files but uses a proprietary compression algorithm developed by RARLAB.'
		},
		{
			question: 'What are RAR files used for?',
			answer:
				'RAR files are used for compressing and packaging files and folders for storage or transmission over the internet. They are commonly used for software distribution, data backup, and file sharing.'
		},
		{
			question: 'What are the advantages of using RAR files?',
			answer:
				'RAR files offer efficient compression, often achieving smaller file sizes compared to other archive formats. They also support features like password protection and multi-volume archives.'
		},
		{
			question: 'What are the disadvantages of using RAR files?',
			answer:
				'RAR files may require special software to extract and access the compressed contents, as the RAR format is not as widely supported as ZIP. Additionally, creating RAR files may require licensed software.'
		},
		{
			question: 'How can I open and extract RAR files?',
			answer:
				'RAR files can be opened and extracted using third-party software like WinRAR, 7-Zip, or WinZip. Some operating systems also have built-in support for RAR extraction.'
		},
		{
			question: 'Can I create RAR files?',
			answer:
				'Yes, you can create RAR files using software like WinRAR, which is available for purchase. Some free alternatives like 7-Zip also support RAR creation.'
		},
		{
			question: 'Can I use this sample RAR file in my commercial projects?',
			answer:
				'Yes, our free sample RAR file is available for commercial use. Feel free to download and utilize it in your projects without any licensing restrictions.'
		}
	];

	const metaTitle = 'Sample RAR Files Free Download | MockSample';
	const metaDescription =
		'Download free, sample RAR files for testing and development. Explore our collection of RAR archives.';
	const metaKeywords =
		'rar samples, free rar files, sample archives, test archives, rar samples, rar examples, file compression, file sharing, file testing, file development, mock files';
	const title = 'Sample RAR Files Free Download';
	const description =
		'Download free, sample <strong>RAR (archive) files</strong> for various purposes. These files are perfect for testing file compression, organizing files, or simply having sample archives for reference. Get started now and download your free RAR files!';

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
