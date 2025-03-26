<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Document Files',
    parentSlug: '/sample-document-files',
    title: 'PDF'
  };

  const files = [
    {
      attr0: 'Text-based',
      attr1: '38KB',
      attr2: '1 page',
      file: 'mocksample_pdf_text_based_38kb_1pg.pdf'
    },
    {
      attr0: 'Text & Image',
      attr1: '100KB',
      attr2: '2 page',
      file: 'mocksample_pdf_text_image_682kb_2pg.pdf'
    },
    {
      attr0: 'Text, Image, Table, List and Color',
      attr1: '3MB',
      attr2: '4 page',
      file: 'mocksample_pdf_complex_3mb_4pg.pdf'
    }
  ];

  const faqs = [
    {
      question: 'What is a PDF file?',
      answer:
        'PDF (Portable Document Format) is a widely used file format developed by Adobe. It is designed to present documents in a manner that preserves their formatting, fonts, and images, regardless of the software, hardware, or operating system used to view them.'
    },
    {
      question: 'What are the advantages of using PDF files?',
      answer:
        'PDF files offer several advantages, including: cross-platform compatibility, preservation of formatting, security options (password protection, encryption), and ease of sharing and distribution.'
    },
    {
      question: 'What are the disadvantages of using PDF files?',
      answer:
        'While PDF files are great for preserving formatting, they can be less editable than other document formats like DOCX or TXT. Editing PDFs often requires specialized software, and changes might not always retain the original formatting perfectly.'
    },
    {
      question: 'What are the typical use cases for PDF files?',
      answer:
        'PDF files are commonly used for a wide range of purposes, such as: sharing documents (reports, ebooks, contracts), creating forms, archiving documents, and publishing documents online.'
    },
    {
      question: 'What are MIME types?',
      answer:
        'MIME stands for Multipurpose Internet Mail Extension. MIME types are labels that identify the format of a file, allowing web browsers and servers to understand what kind of data they are dealing with. For PDF files, the correct MIME type is "application/pdf".'
    },
    {
      question: 'What file sizes and types do your sample PDFs come in?',
      answer:
        'Our free sample PDF files come in various sizes and types to suit your needs. We offer text-based PDFs around 30KB, image-based PDFs around 150KB, and PDFs with both text and images around 100KB. We are continuously expanding our collection, so check back for updates.'
    },
    {
      question: 'Can I use these sample PDFs in my commercial projects?',
      answer:
        'Yes, you can! Our free sample PDF files are available for both personal and commercial use without any licensing restrictions. Feel free to incorporate them into your projects.'
    },
    {
      question: 'Where can I learn more about PDF formats and their specifications?',
      answer:
        'You can find detailed information about the PDF format and its specifications on the Adobe website and various online resources related to document management and digital publishing.'
    },
    {
      question: 'How can I view or edit PDF files?',
      answer:
        'PDF files can be viewed using a variety of PDF readers, such as Adobe Acrobat Reader (free), Foxit Reader, and many web browsers. For editing PDFs, you can use Adobe Acrobat Pro (paid), or online PDF editors with varying features and capabilities.'
    }
  ];

  const metaTitle = 'Sample PDF Files Free Download | MockSample';
  const metaDescription =
    'Download free, sample PDF files for testing and development. Explore our collection of text-based, image-based, and mixed PDFs in various sizes.';
  const metaKeywords =
    'pdf samples, free pdf files, sample documents, test documents, document samples, pdf templates, pdf examples, pdf testing, document development, mock documents';
  const title = 'Sample PDF Files Free Download';
  const description = `Download free, sample <strong>PDF files</strong> in various sizes and types to fit your project's needs. Choose from text-based, image-based, and mixed PDFs. These samples are perfect for testing document viewers, developing software and websites, or creating mockups and prototypes. Get started now and download your free PDFs!`;

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
