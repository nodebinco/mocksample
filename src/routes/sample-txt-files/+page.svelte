<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Document Files',
    parentSlug: '/sample-document-files',
    title: 'TXT'
  };

  const files = [
    {
      attr0: 'Text File',
      attr1: '2KB',
      attr2: '1 Page',
      downloadUrl: '/mocksample_txt_text_file_2KB_1page.txt'
    }
  ];

  const faqs = [
    {
      question: 'What is a TXT file?',
      answer:
        'A TXT file is a simple text document that contains plain text without any formatting. It is a common file format used for storing and exchanging textual information.'
    },
    {
      question: 'What are TXT files used for?',
      answer:
        'TXT files are used for various purposes such as storing notes, writing code, saving configuration settings, and more. They are widely supported by text editors and programming environments.'
    },
    {
      question: 'What are the advantages of using TXT files?',
      answer:
        'TXT files are lightweight and can be easily opened and edited using any text editor. They are platform-independent and can be read by almost any device or software.'
    },
    {
      question: 'What are the disadvantages of using TXT files?',
      answer:
        'TXT files lack advanced formatting options and cannot store multimedia content. They may not be suitable for documents requiring complex layouts or rich media elements.'
    },
    {
      question: 'How can I open and edit TXT files?',
      answer:
        'TXT files can be opened and edited using any text editor, including built-in text editors on operating systems such as Notepad (Windows) or TextEdit (macOS).'
    },
    {
      question: 'Can I convert TXT files to other formats?',
      answer:
        'Yes, TXT files can be converted to various formats such as DOCX, PDF, HTML, and more using text editing software or online conversion tools.'
    },
    {
      question: 'Can I use these sample TXT files in my commercial projects?',
      answer:
        'Yes, our free sample TXT files are available for commercial use. Feel free to download and utilize them in your projects without any licensing restrictions.'
    }
  ];

  const metaTitle = 'Sample TXT Files Free Download | MockSample';
  const metaDescription =
    'Download free, sample TXT files for testing and development. Explore our collection of text documents for various purposes.';
  const metaKeywords =
    'txt samples, free txt files, sample documents, test documents, document samples, txt data, txt examples, document testing, document development, mock documents';
  const title = 'Sample TXT Files Free Download';
  const description =
    'Download free, sample <strong>TXT (Text File) files</strong> for various purposes. These files are perfect for testing text processing applications, writing code snippets, or simply having sample text documents for reference. Get started now and download your free TXT files!';

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
