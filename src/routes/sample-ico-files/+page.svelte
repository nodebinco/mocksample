<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Image Files',
    parentSlug: '/sample-image-files',
    title: 'ICO'
  };

  const files = [
    {
      attr0: 'Sample ICO Image',
      attr1: '10KB',
      attr2: '32x32',
      downloadUrl: '/mocksample_ico_sample_image_10KB_32x32.ico'
    }
  ];

  const faqs = [
    {
      question: 'What is an ICO file?',
      answer:
        'ICO is a file format used for storing icons in Microsoft Windows. It contains one or more small images at multiple sizes and color depths, allowing the icon to be displayed at different resolutions.'
    },
    {
      question: 'What are ICO files used for?',
      answer:
        'ICO files are used to represent icons for applications, folders, files, and shortcuts in the Windows operating system. They are also commonly used for website favicons.'
    },
    {
      question: 'What are the advantages of using ICO files?',
      answer:
        'ICO files allow for the creation of icons with multiple sizes and color depths, ensuring compatibility with various display resolutions and color settings.'
    },
    {
      question: 'What are the disadvantages of using ICO files?',
      answer:
        'ICO files are specific to the Windows operating system and may not be supported on other platforms. Additionally, creating ICO files with multiple sizes and color depths can be time-consuming.'
    },
    {
      question: 'How can I open and view ICO files?',
      answer:
        'ICO files can be opened and viewed using image viewing software like Windows Photo Viewer, or specialized icon editing software like IconEdit or Axialis IconWorkshop.'
    },
    {
      question: 'Can I convert ICO files to other formats?',
      answer:
        'Yes, ICO files can be converted to other image formats such as PNG or BMP using image editing software or online conversion tools.'
    },
    {
      question: 'Can I use this sample ICO image in my commercial projects?',
      answer:
        'Yes, our free sample ICO image is available for commercial use. Feel free to download and utilize it in your projects without any licensing restrictions.'
    }
  ];

  const metaTitle = 'Sample ICO Files Free Download | MockSample';
  const metaDescription =
    'Download free, sample ICO files for testing and development. Explore our collection of icons in ICO format.';
  const metaKeywords =
    'ico samples, free ico files, sample icons, test icons, icon samples, ico data, ico examples, icon testing, icon development, mock icons';
  const title = 'Sample ICO Files Free Download';
  const description =
    'Download free, sample <strong>ICO (Icon) files</strong> for various purposes. These files are perfect for testing icon creation, application development, or simply having sample icons for reference. Get started now and download your free ICO files!';

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
