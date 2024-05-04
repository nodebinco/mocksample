<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Image Files',
    parentSlug: '/sample-image-files',
    title: 'AI'
  };

  const files = [
    {
      attr0: 'Sample AI File',
      attr1: '3MB',
      attr2: 'N/A',
      downloadUrl: '/mocksample_ai_sample_file_3MB.ai'
    }
  ];

  const faqs = [
    {
      question: 'What is an AI file?',
      answer:
        'An AI file is a vector graphics file format used by Adobe Illustrator. It contains vector graphics data, which allows for scalability without loss of quality, making it ideal for logos, illustrations, and other graphic design projects.'
    },
    {
      question: 'What are AI files used for?',
      answer:
        'AI files are primarily used for creating and editing vector graphics in Adobe Illustrator. They are commonly used by graphic designers, illustrators, and artists for creating logos, icons, illustrations, and other digital artwork.'
    },
    {
      question: 'What are the advantages of using AI files?',
      answer:
        'AI files preserve vector graphics data, allowing for infinite scalability without loss of quality. They also support advanced features like layers, gradients, and effects, providing flexibility and control over designs.'
    },
    {
      question: 'What are the disadvantages of using AI files?',
      answer:
        'AI files may require specialized software like Adobe Illustrator to edit. They may also have compatibility issues when opened in other vector graphics editing programs.'
    },
    {
      question: 'How can I open and edit AI files?',
      answer:
        'AI files can be opened and edited using Adobe Illustrator or other compatible vector graphics editing software like CorelDRAW or Inkscape. Some online services also offer limited support for viewing and editing AI files.'
    },
    {
      question: 'Can I use this sample AI file in my commercial projects?',
      answer:
        'Yes, our free sample AI file is available for commercial use. Feel free to download and utilize it in your projects without any licensing restrictions.'
    }
  ];

  const metaTitle = 'Sample AI Files Free Download | MockSample';
  const metaDescription =
    'Download free, sample AI files for testing and development. Explore our collection of vector graphics files.';
  const metaKeywords =
    'ai samples, free ai files, sample illustrations, test illustrations, ai samples, ai examples, vector graphics testing, vector graphics development, mock illustrations';
  const title = 'Sample AI Files Free Download';
  const description =
    'Download free, sample <strong>AI (Adobe Illustrator) files</strong> for various purposes. These files are perfect for testing vector graphics editing software, exploring vector designs, or simply having sample illustrations for reference. Get started now and download your free AI files!';

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
