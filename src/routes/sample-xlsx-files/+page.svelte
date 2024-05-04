<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Document Files',
    parentSlug: '/sample-document-files',
    title: 'XLSX'
  };

  const files = [
    {
      attr0: 'Microsoft Excel Spreadsheet',
      attr1: '15KB',
      attr2: '1 Sheet',
      downloadUrl: '/mocksample_xlsx_excel_15KB_1sheet.xlsx'
    }
  ];

  const faqs = [
    {
      question: 'What is an XLSX file?',
      answer:
        'XLSX is a file extension for spreadsheets created by Microsoft Excel or other spreadsheet software. It is based on the Office Open XML (OOXML) format.'
    },
    {
      question: 'What are XLSX files used for?',
      answer:
        'XLSX files are used for storing and organizing tabular data, such as financial records, inventories, schedules, and more. They are widely used in business, education, and personal finance.'
    },
    {
      question: 'What are the advantages of using XLSX files?',
      answer:
        'XLSX files offer features such as formulas, functions, charts, and formatting options, making them suitable for complex data analysis and presentation.'
    },
    {
      question: 'What are the disadvantages of using XLSX files?',
      answer:
        'XLSX files can become large and complex, especially with extensive data and formulas. They may also have compatibility issues with different versions of Microsoft Excel or other spreadsheet software.'
    },
    {
      question: 'How can I open and edit XLSX files?',
      answer:
        'XLSX files can be opened and edited with Microsoft Excel or other compatible spreadsheet software such as LibreOffice Calc, OpenOffice Calc, or Google Sheets.'
    },
    {
      question: 'Can I convert XLSX files to other formats?',
      answer:
        'Yes, XLSX files can be converted to various formats such as CSV, PDF, HTML, and more using Microsoft Excel or online file conversion tools.'
    },
    {
      question: 'Can I use these sample XLSX files in my commercial projects?',
      answer:
        'Yes, our free sample XLSX files are available for commercial use. Feel free to download and utilize them in your projects without any licensing restrictions.'
    }
  ];

  const metaTitle = 'Sample XLSX Files Free Download | MockSample';
  const metaDescription =
    'Download free, sample XLSX files for testing and development. Explore our collection of Microsoft Excel spreadsheets for various purposes.';
  const metaKeywords =
    'xlsx samples, free xlsx files, sample spreadsheets, test spreadsheets, spreadsheet samples, xlsx data, xlsx examples, spreadsheet testing, spreadsheet development, mock spreadsheets';
  const title = 'Sample XLSX Files Free Download';
  const description =
    'Download free, sample <strong>XLSX (Microsoft Excel Spreadsheet) files</strong> for various purposes. These files are perfect for testing spreadsheet applications, creating mockups, or simply having sample spreadsheets for reference. Get started now and download your free XLSX files!';

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
