<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Document Files',
    parentSlug: '/sample-document-files',
    title: 'XLS (Excel 97-2003)'
  };

  const files = [
    {
      attr0: 'Basic Spreadsheet',
      attr1: '25kB',
      downloadUrl: '/mocksample_xls_basic_spreadsheet.xls'
    },
    {
      attr0: 'Financial Data',
      attr1: '45kB',
      downloadUrl: '/mocksample_xls_financial_data.xls'
    },
    {
      attr0: 'Inventory List',
      attr1: '32kB',
      downloadUrl: '/mocksample_xls_inventory_list.xls'
    }
  ];

  const faqs = [
    {
      question: 'What is an XLS file?',
      answer:
        'XLS is a file extension for spreadsheet files created with Microsoft Excel versions 97-2003. It is a binary file format that stores data in a grid of cells, along with formatting, formulas, and other spreadsheet elements.'
    },
    {
      question: 'What are XLS files used for?',
      answer:
        'XLS files are commonly used for organizing, analyzing, and calculating data. They are widely used in various fields, including finance, accounting, business, education, and personal use.'
    },
    {
      question: 'What are the advantages of using XLS files?',
      answer:
        'XLS files provide a structured way to manage data and perform calculations using formulas. They also offer formatting options to enhance the visual presentation of data.'
    },
    {
      question: 'What are the disadvantages of using XLS files?',
      answer:
        'XLS files have a limited file size compared to newer formats like XLSX. They may also have compatibility issues with modern spreadsheet software.'
    },
    {
      question: 'How can I open and edit XLS files?',
      answer:
        'XLS files can be opened and edited with Microsoft Excel or compatible spreadsheet software such as LibreOffice Calc, OpenOffice Calc, or Google Sheets.'
    },
    {
      question: 'What is the difference between XLS and XLSX files?',
      answer:
        'XLSX is a newer, XML-based file format introduced in Microsoft Excel 2007. XLSX files are generally smaller and more efficient than the older XLS format.'
    },
    {
      question: 'Can I convert XLS files to other formats?',
      answer:
        'Yes, XLS files can be converted to various formats such as PDF, CSV, TXT, and HTML using Microsoft Excel or online file conversion tools.'
    },
    {
      question: 'Can I use these sample XLS files in my commercial projects?',
      answer:
        'Yes, our free sample XLS files are available for commercial use. Feel free to download and utilize them in your projects without any licensing restrictions.'
    }
  ];

  const metaTitle = 'Sample XLS (Excel 97-2003) Files Free Download | MockSample';
  const metaDescription =
    'Download free, royalty-free XLS (Excel 97-2003) spreadsheet samples for testing and development. Explore our collection of basic spreadsheets, financial data, and inventory lists.';
  const metaKeywords =
    'xls samples, excel samples, free xls files, free excel files, sample spreadsheets, test spreadsheets, spreadsheet samples, royalty-free spreadsheets, xls templates, excel templates';
  const title = 'Sample XLS (Excel 97-2003) Files Free Download';
  const description = `Download free, royalty-free <strong>XLS (Excel 97-2003) spreadsheet samples</strong> for various testing and development purposes. Choose from basic spreadsheets, financial data examples, and inventory lists. These samples are perfect for testing spreadsheet software, developing applications, or creating mockups. Get started now and download your free XLS files!`;

  const data = {
    files,
    metaTitle,
    metaDescription,
    metaKeywords,
    title,
    description,
    breadcrumb,
    faqs
  };
</script>

<FileDownloadPage {data} />
