<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Document Files',
		parentSlug: '/sample-document-files',
		title: 'CSV'
	};

	const files = [
		{
			attr0: 'Comma-Separated',
			attr1: '2KB',
			attr2: '10 Rows',
			downloadUrl: '/mocksample_csv_comma_separated_2KB_10rows.csv'
		},
		{
			attr0: 'Semicolon-Separated',
			attr1: '2KB',
			attr2: '10 Rows',
			downloadUrl: '/mocksample_csv_semicolon_separated_2KB_10rows.csv'
		}
	];

	const faqs = [
		{
			question: 'What is a CSV file?',
			answer:
				'CSV stands for Comma-Separated Values. It is a plain text file format that stores tabular data (numbers and text) in a simple format. Each line of the file represents a row of data, and commas (or other delimiters like semicolons) separate the values within each row.'
		},
		{
			question: 'What are CSV files used for?',
			answer:
				'CSV files are widely used for data exchange between different applications. They are a common format for spreadsheets, databases, and contact lists. They are also often used for importing and exporting data in various software programs.'
		},
		{
			question: 'What are the advantages of using CSV files?',
			answer:
				'CSV files are simple, lightweight, and easy to understand. They can be opened and edited with any text editor, making them accessible to users without specialized software. They are also widely supported by various applications, ensuring compatibility across different platforms.'
		},
		{
			question: 'What are the disadvantages of using CSV files?',
			answer:
				'CSV files lack advanced formatting options and can be difficult to work with for complex data structures. They also have limited support for data types, typically treating all values as text. Additionally, CSV files can be prone to errors if the data contains commas or other delimiters within the values themselves.'
		},
		{
			question: 'What are the different delimiters used in CSV files?',
			answer:
				'While commas are the most common delimiter in CSV files, other characters like semicolons, tabs, or pipes can also be used. The choice of delimiter often depends on regional conventions or the specific application being used.'
		},
		{
			question: 'How can I open and edit CSV files?',
			answer:
				'CSV files can be opened and edited with any text editor, such as Notepad, TextEdit, or Sublime Text. They can also be imported and manipulated in spreadsheet software like Microsoft Excel, Google Sheets, or LibreOffice Calc.'
		},
		{
			question: 'What are some common issues with CSV files?',
			answer:
				"Common issues with CSV files include encoding problems, inconsistent delimiters, missing or extra values, and special characters within data fields. It's essential to carefully check and clean CSV data before using it in applications."
		},
		{
			question: 'Can I use these sample CSV files in my commercial projects?',
			answer:
				'Yes, our free sample CSV files are available for commercial use. Feel free to download and utilize them in your projects without any licensing restrictions.'
		}
	];

	const metaTitle = 'Sample CSV Files Free Download | MockSample';
	const metaDescription =
		'Download free, sample CSV files for testing and development. Explore our collection of CSV data with different delimiters and row counts.';
	const metaKeywords =
		'csv samples, free csv files, sample data, test data, data samples, csv data, csv examples, data testing, data development, mock data';
	const title = 'Sample CSV Files Free Download';
	const description =
		'Download free, sample <strong>CSV (Comma-Separated Values) files</strong> with different delimiters and row counts. These files are perfect for testing data import/export functionality, developing software and applications, or creating mockups and prototypes. Get started now and download your free CSVs!';

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
