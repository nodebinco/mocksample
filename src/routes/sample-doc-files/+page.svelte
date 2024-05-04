<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Document Files',
    parentSlug: '/sample-document-files',
    title: 'DOC'
  };

  const files = [
    {
      attr0: 'Text-based',
      attr1: '25KB',
      attr2: '1 page',
      file: 'mocksample_doc_text_based_25kb_1pg.doc'
    },
    {
      attr0: 'Text & Image',
      attr1: '760KB',
      attr2: '2 page',
      file: 'mocksample_doc_text_image_760kb_2pg.doc'
    },
    {
      attr0: 'Text, Image, Table, List and Color',
      attr1: '3MB',
      attr2: '4 page',
      file: 'mocksample_doc_complex_3mb_4pg.doc'
    }
  ];

  const faqs = [
    {
      question: 'What is a DOC file?',
      answer:
        'DOC is a file extension for word processing documents, primarily associated with Microsoft Word. It is a binary file format that stores text, formatting, images, and other document elements.'
    },
    {
      question: 'What are DOC files used for?',
      answer:
        'DOC files are widely used for creating and sharing documents such as letters, reports, resumes, essays, and more. They are a common format in business, education, and personal use.'
    },
    {
      question: 'What are the advantages of using DOC files?',
      answer:
        'DOC files offer rich formatting options, allowing users to create professional-looking documents with various fonts, styles, and layouts. They also support embedding images, tables, and other objects.'
    },
    {
      question: 'What are the disadvantages of using DOC files?',
      answer:
        'DOC files can be large in size, especially when containing images or complex formatting. They may also have compatibility issues with different versions of Microsoft Word or other word processing software.'
    },
    {
      question: 'How can I open and edit DOC files?',
      answer:
        'DOC files can be opened and edited with Microsoft Word or other compatible word processing software such as LibreOffice Writer, OpenOffice Writer, or Google Docs.'
    },
    {
      question: 'What is the difference between DOC and DOCX files?',
      answer:
        'DOCX is a newer, XML-based file format introduced in Microsoft Word 2007. DOCX files are generally smaller and more compatible with different software compared to the older DOC format.'
    },
    {
      question: 'Can I convert DOC files to other formats?',
      answer:
        'Yes, DOC files can be converted to various formats such as PDF, TXT, RTF, and HTML using Microsoft Word or online file conversion tools.'
    },
    {
      question: 'Can I use these sample DOC files in my commercial projects?',
      answer:
        'Yes, our free sample DOC files are available for commercial use. Feel free to download and utilize them in your projects without any licensing restrictions.'
    }
  ];

  const metaTitle = 'Sample DOC Files Free Download | MockSample';
  const metaDescription =
    'Download free, sample DOC files for testing and development. Explore our collection of Microsoft Word documents for various purposes.';
  const metaKeywords =
    'doc samples, free doc files, sample documents, test documents, document samples, doc data, doc examples, document testing, document development, mock documents';
  const title = 'Sample DOC Files Free Download';
  const description =
    'Download free, sample <strong>DOC (Microsoft Word Document) files</strong> for various purposes. These files are perfect for testing document processing applications, creating mockups, or simply having sample documents for reference. Get started now and download your free DOCs!';

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
