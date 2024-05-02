<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Document Files',
		parentSlug: '/sample-document-files',
		title: 'ODT'
	};

	const files = [
		{
			attr0: 'Text-based',
			attr1: '25KB',
			attr2: '1 page',
			file: 'mocksample_odt_text_based_18kb_1pg.odt'
		},
		{
			attr0: 'Text, Image, Table, List and Color',
			attr1: '3MB',
			attr2: '4 page',
			file: 'mocksample_odt_complex_3mb_4pg.odt'
		},
		{
			attr0: 'Text & Image',
			attr1: '100KB',
			attr2: '1 page',
			file: '/mocksample_pdf_text_and_image_100kb_1pg.pdf'
		}
	];

	const faqs = [
		{
			question: 'What is an ODT file?',
			answer:
				'ODT is a file extension for text documents created with applications that adhere to the OpenDocument format standard. It is commonly associated with open-source office suites such as LibreOffice and OpenOffice.'
		},
		{
			question: 'What are ODT files used for?',
			answer:
				'ODT files are used for creating and sharing text documents such as letters, reports, articles, and more. They are compatible with various word processing software and are often used for collaborative editing.'
		},
		{
			question: 'What are the advantages of using ODT files?',
			answer:
				'ODT files offer compatibility across different platforms and software applications that support the OpenDocument format. They are also non-proprietary, making them ideal for long-term document preservation and sharing.'
		},
		{
			question: 'What are the disadvantages of using ODT files?',
			answer:
				'ODT files may have formatting inconsistencies when opened in proprietary software such as Microsoft Word. Some advanced features of proprietary formats may not be fully supported in ODT.'
		},
		{
			question: 'How can I open and edit ODT files?',
			answer:
				'ODT files can be opened and edited with applications such as LibreOffice Writer, OpenOffice Writer, or Google Docs. Microsoft Word also provides limited support for ODT files.'
		},
		{
			question: 'Can I convert ODT files to other formats?',
			answer:
				'Yes, ODT files can be converted to various formats such as DOCX, PDF, TXT, and HTML using LibreOffice, online conversion tools, or other compatible software.'
		},
		{
			question: 'Can I use these sample ODT files in my commercial projects?',
			answer:
				'Yes, our free sample ODT files are available for commercial use. Feel free to download and utilize them in your projects without any licensing restrictions.'
		}
	];

	const metaTitle = 'Sample ODT Files Free Download | MockSample';
	const metaDescription =
		'Download free, sample ODT files for testing and development. Explore our collection of OpenDocument text documents for various purposes.';
	const metaKeywords =
		'odt samples, free odt files, sample documents, test documents, document samples, odt data, odt examples, document testing, document development, mock documents';
	const title = 'Sample ODT Files Free Download';
	const description =
		'Download free, sample <strong>ODT (OpenDocument Text) files</strong> for various purposes. These files are perfect for testing document processing applications, creating mockups, or simply having sample documents for reference. Get started now and download your free ODTs!';

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
