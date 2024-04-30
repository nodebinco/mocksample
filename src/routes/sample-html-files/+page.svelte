<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Data Files',
		parentSlug: '/sample-data-files',
		title: 'HTML'
	};

	const files = [
		{
			attr0: 'Sample HTML File',
			attr1: '2KB',
			attr2: 'N/A',
			downloadUrl: '/mocksample_html_sample_file_2KB.html'
		}
	];

	const faqs = [
		{
			question: 'What is an HTML file?',
			answer:
				'HTML (Hypertext Markup Language) is the standard markup language for creating web pages and web applications. It defines the structure and content of a web page using a system of tags and attributes.'
		},
		{
			question: 'What are HTML files used for?',
			answer:
				'HTML files are used to create and display web pages on the internet. They contain text, images, links, and other elements that are rendered by web browsers to create the visual layout of a web page.'
		},
		{
			question: 'What are the advantages of using HTML files?',
			answer:
				'HTML files provide a standardized way to create web content that can be displayed consistently across different web browsers and devices. They also support multimedia elements and interactivity through JavaScript and CSS.'
		},
		{
			question: 'What are the disadvantages of using HTML files?',
			answer:
				'HTML files can become complex and difficult to maintain, especially for large websites or web applications. They may also have limited styling and layout capabilities compared to more advanced technologies like CSS frameworks.'
		},
		{
			question: 'How can I open and view HTML files?',
			answer:
				'HTML files can be opened and viewed using any web browser, such as Google Chrome, Mozilla Firefox, or Microsoft Edge. They can also be opened and edited using a text editor like Notepad or Visual Studio Code.'
		},
		{
			question: 'Can I convert HTML files to other formats?',
			answer:
				'Yes, HTML files can be converted to other formats such as PDF or Markdown using various tools and libraries. There are also online converters available for this purpose.'
		},
		{
			question: 'Can I use this sample HTML file in my commercial projects?',
			answer:
				'Yes, our free sample HTML file is available for commercial use. Feel free to download and utilize it in your projects without any licensing restrictions.'
		}
	];

	const metaTitle = 'Sample HTML Files Free Download | MockSample';
	const metaDescription =
		'Download free, sample HTML files for testing and development. Explore our collection of HTML files.';
	const metaKeywords =
		'html samples, free html files, sample html, test html, html samples, html examples, web development, html testing, html development, mock html';
	const title = 'Sample HTML Files Free Download';
	const description =
		'Download free, sample <strong>HTML (Hypertext Markup Language) files</strong> for various purposes. These files are perfect for testing web development, prototyping web pages, or simply having sample HTML for reference. Get started now and download your free HTML files!';

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
