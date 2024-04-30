<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Data Files',
		parentSlug: '/sample-data-files',
		title: 'ZIP'
	};

	const files = [
		{
			attr0: 'Sample ZIP File',
			attr1: '1MB',
			attr2: 'N/A',
			downloadUrl: '/mocksample_zip_sample_file_1MB.zip'
		}
	];

	const faqs = [
		{
			question: 'What is a ZIP file?',
			answer:
				'A ZIP file is an archive file format that supports lossless data compression. It allows multiple files to be compressed into a single, smaller file for easier storage and distribution.'
		},
		{
			question: 'What are ZIP files used for?',
			answer:
				'ZIP files are commonly used for compressing and packaging files and folders for storage or transmission over the internet. They are widely used for software distribution, data backup, and file sharing.'
		},
		{
			question: 'What are the advantages of using ZIP files?',
			answer:
				'ZIP files reduce the size of files and folders, making them easier to store, transfer, and share. They also help organize multiple files into a single archive, simplifying file management.'
		},
		{
			question: 'What are the disadvantages of using ZIP files?',
			answer:
				'ZIP files may require special software to extract and access the compressed contents. In some cases, ZIP compression may not achieve significant file size reduction, especially for already compressed file types.'
		},
		{
			question: 'How can I open and extract ZIP files?',
			answer:
				'ZIP files can be opened and extracted using built-in tools on most operating systems, such as File Explorer on Windows, Finder on macOS, or Archive Utility on macOS. There are also third-party software options available.'
		},
		{
			question: 'Can I create ZIP files?',
			answer:
				'Yes, you can create ZIP files using various software tools, including built-in utilities on most operating systems and third-party software like WinZip, 7-Zip, or WinRAR.'
		},
		{
			question: 'Can I use this sample ZIP file in my commercial projects?',
			answer:
				'Yes, our free sample ZIP file is available for commercial use. Feel free to download and utilize it in your projects without any licensing restrictions.'
		}
	];

	const metaTitle = 'Sample ZIP Files Free Download | MockSample';
	const metaDescription =
		'Download free, sample ZIP files for testing and development. Explore our collection of ZIP archives.';
	const metaKeywords =
		'zip samples, free zip files, sample archives, test archives, zip samples, zip examples, file compression, file sharing, file testing, file development, mock files';
	const title = 'Sample ZIP Files Free Download';
	const description =
		'Download free, sample <strong>ZIP (archive) files</strong> for various purposes. These files are perfect for testing file compression, organizing files, or simply having sample archives for reference. Get started now and download your free ZIP files!';

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
