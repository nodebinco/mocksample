<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Image Files',
    parentSlug: '/sample-image-files',
    title: 'TIFF'
  };

  const files = [
    {
      attr0: 'Sample TIFF Image',
      attr1: '4MB',
      attr2: '300dpi',
      downloadUrl: '/mocksample_tiff_sample_image_4MB_300dpi.tiff'
    }
  ];

  const faqs = [
    {
      question: 'What is a TIFF file?',
      answer:
        'TIFF stands for Tagged Image File Format. It is a flexible bitmap image format commonly used in printing and publishing. TIFF files can store high-quality images with multiple layers, color depths, and resolutions.'
    },
    {
      question: 'What are TIFF files used for?',
      answer:
        'TIFF files are used in various industries, including publishing, printing, and photography. They are suitable for storing high-quality images, such as scanned documents, photographs, and graphics.'
    },
    {
      question: 'What are the advantages of using TIFF files?',
      answer:
        'TIFF files support lossless compression, meaning they preserve image quality without losing detail. They also support layers, transparency, and various color modes, making them versatile for professional applications.'
    },
    {
      question: 'What are the disadvantages of using TIFF files?',
      answer:
        'TIFF files tend to have larger file sizes compared to other image formats like JPG or PNG. They may also have limited support in web browsers and require specialized software for editing and viewing.'
    },
    {
      question: 'How can I open and view TIFF files?',
      answer:
        'TIFF files can be opened and viewed using image viewing software like Adobe Photoshop, GIMP, or specialized TIFF viewers. Some web browsers may have limited support for viewing TIFF files.'
    },
    {
      question: 'Can I convert TIFF files to other formats?',
      answer:
        'Yes, TIFF files can be converted to other image formats such as JPG, PNG, or PDF using image editing software or online conversion tools.'
    },
    {
      question: 'Can I use this sample TIFF image in my commercial projects?',
      answer:
        'Yes, our free sample TIFF image is available for commercial use. Feel free to download and utilize it in your projects without any licensing restrictions.'
    }
  ];

  const metaTitle = 'Sample TIFF Files Free Download | MockSample';
  const metaDescription =
    'Download free, sample TIFF files for testing and development. Explore our collection of high-quality images in TIFF format.';
  const metaKeywords =
    'tiff samples, free tiff files, sample images, test images, image samples, tiff data, tiff examples, image testing, image development, mock images';
  const title = 'Sample TIFF Files Free Download';
  const description =
    'Download free, sample <strong>TIFF (Tagged Image File Format) files</strong> for various purposes. These files are perfect for testing image processing applications, printing, or simply having high-quality sample images for reference. Get started now and download your free TIFF files!';

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
