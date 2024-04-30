<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Document Files',
		parentSlug: '/sample-document-files',
		title: 'DOCX'
	};

	const files = [
		{
			attr0: '2 pages',
			attr1: '10kB',
			attr2: 'Sample Document',
			downloadUrl: '/sample-document.docx'
		},
		{
			attr0: '5 pages',
			attr1: '25kB',
			attr2: 'Report Template',
			downloadUrl: '/report-template.docx'
		},
		{
			attr0: '10 pages',
			attr1: '50kB',
			attr2: 'Project Proposal',
			downloadUrl: '/project-proposal.docx'
		}
	];

	const faqs = [
		{
			question: 'What is a DOCX file?',
			answer:
				'DOCX is the default file format for Microsoft Word documents starting from Microsoft Office 2007. It is a widely used format for creating and sharing documents that contain formatted text, images, tables, and other elements.'
		},
		{
			question: 'How do I open a DOCX file?',
			answer:
				'DOCX files can be opened using various word processing software, including Microsoft Word, Google Docs, LibreOffice Writer, and many others. These programs allow you to view, edit, and save documents in the DOCX format.'
		},
		{
			question: 'What are the advantages of using DOCX files?',
			answer:
				'DOCX files offer several advantages, including: <ul><li>Wide compatibility: They are widely supported by different software and operating systems.</li><li>Smaller file size:</li><li>DOCX uses a compressed format, resulting in smaller file sizes compared to older document formats like DOC.</li><li>Enhanced features: DOCX supports advanced formatting options, multimedia content, and collaboration features.</li></ul>'
		},
		{
			question: 'Can I edit these sample DOCX files?',
			answer:
				'Yes, you can edit these sample DOCX files using any compatible word processing software. Feel free to modify the content, formatting, and layout to suit your specific needs.'
		},
		{
			question: 'Are these sample DOCX files free to use?',
			answer:
				'Absolutely! Our sample DOCX files are free to download and use for both personal and commercial purposes. You can utilize them as templates, learning resources, or starting points for your own documents.'
		}
	];

	const metaTitle = 'Sample DOCX Files Free Download | MockSample';
	const metaDescription =
		'Download free sample DOCX files for various purposes. Explore our collection of document templates, reports, and proposals in DOCX format.';
	const metaKeywords =
		'docx samples, free docx files, sample documents, document templates, reports, proposals, docx download, word documents';
	const title = 'Sample DOCX Files Free Download';
	const description =
		'Download free sample DOCX files to use as templates or starting points for your own documents. Our collection includes various document types, such as reports, proposals, and more. Get started now and explore our selection of DOCX samples!';

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
