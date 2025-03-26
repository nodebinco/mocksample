<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Image Files',
    parentSlug: '/sample-image-files',
    title: 'BMP'
  };

  const files = [
    {
      attr0: 'Sample BMP Image',
      attr1: '1MB',
      attr2: '1920x1080',
      downloadUrl: '/mocksample_bmp_sample_image_1MB_1920x1080.bmp'
    }
  ];

  const faqs = [
    {
      question: 'What is a BMP file?',
      answer:
        'BMP (Bitmap Image File) is an image file format that stores bitmap images without compression. It was widely used in early versions of Windows and is compatible with many image editing and viewing software.'
    },
    {
      question: 'What are BMP files used for?',
      answer:
        'BMP files are used for storing images on Windows systems and are compatible with various applications and devices. They are suitable for storing images without compression or loss of quality.'
    },
    {
      question: 'What are the advantages of using BMP files?',
      answer:
        'BMP files preserve image quality without compression, making them suitable for situations where image fidelity is critical. They are also widely supported by image editing and viewing software.'
    },
    {
      question: 'What are the disadvantages of using BMP files?',
      answer:
        'BMP files tend to have larger file sizes compared to compressed image formats like JPEG or PNG. They may also lack features like transparency or layers found in other image formats.'
    },
    {
      question: 'How can I open and view BMP files?',
      answer:
        'BMP files can be opened and viewed using image viewing software like Windows Photo Viewer, or image editing software like Adobe Photoshop or GIMP.'
    },
    {
      question: 'Can I convert BMP files to other formats?',
      answer:
        'Yes, BMP files can be converted to other image formats such as JPEG or PNG using image editing software or online conversion tools.'
    },
    {
      question: 'Can I use this sample BMP image in my commercial projects?',
      answer:
        'Yes, our free sample BMP image is available for commercial use. Feel free to download and utilize it in your projects without any licensing restrictions.'
    }
  ];

  const metaTitle = 'Sample BMP Files Free Download | MockSample';
  const metaDescription =
    'Download free, sample BMP files for testing and development. Explore our collection of images in BMP format.';
  const metaKeywords =
    'bmp samples, free bmp files, sample images, test images, image samples, bmp data, bmp examples, image testing, image development, mock images';
  const title = 'Sample BMP Files Free Download';
  const description =
    'Download free, sample <strong>BMP (Bitmap Image File) files</strong> for various purposes. These files are perfect for testing image processing applications, or simply having sample images for reference. Get started now and download your free BMP files!';

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
