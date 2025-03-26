<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Image Files',
    parentSlug: '/sample-image-files',
    title: 'AVIF'
  };

  const files = [
    {
      attr0: 'Sample AVIF Image',
      attr1: '200KB',
      attr2: '1920x1080',
      downloadUrl: '/mocksample_avif_sample_image_200KB_1920x1080.avif'
    }
  ];

  const faqs = [
    {
      question: 'What is an AVIF file?',
      answer:
        'AVIF (AV1 Image File Format) is an image file format based on the AV1 video codec. It offers advanced compression efficiency, resulting in smaller file sizes without compromising image quality.'
    },
    {
      question: 'What are AVIF files used for?',
      answer:
        'AVIF files are used for storing high-quality images with smaller file sizes, making them ideal for web usage to improve page loading times. They are supported by modern web browsers and image editing software.'
    },
    {
      question: 'What are the advantages of using AVIF files?',
      answer:
        'AVIF files offer significantly smaller file sizes compared to other image formats like JPEG or PNG, while maintaining high image quality. They also support features like transparency and HDR (High Dynamic Range).'
    },
    {
      question: 'What are the disadvantages of using AVIF files?',
      answer:
        'AVIF files may not be supported by older web browsers or image editing software. Additionally, encoding AVIF files may require more processing power and time compared to other image formats.'
    },
    {
      question: 'How can I open and view AVIF files?',
      answer:
        'AVIF files can be opened and viewed using modern web browsers like Google Chrome, Mozilla Firefox, and Microsoft Edge. Some image viewing software and graphics editors also support AVIF format.'
    },
    {
      question: 'Can I convert AVIF files to other formats?',
      answer:
        'Yes, AVIF files can be converted to other image formats such as JPEG or PNG using image editing software or online conversion tools.'
    },
    {
      question: 'Can I use this sample AVIF image in my commercial projects?',
      answer:
        'Yes, our free sample AVIF image is available for commercial use. Feel free to download and utilize it in your projects without any licensing restrictions.'
    }
  ];

  const metaTitle = 'Sample AVIF Files Free Download | MockSample';
  const metaDescription =
    'Download free, sample AVIF files for testing and development. Explore our collection of images in AVIF format.';
  const metaKeywords =
    'avif samples, free avif files, sample images, test images, image samples, avif data, avif examples, image testing, image development, mock images';
  const title = 'Sample AVIF Files Free Download';
  const description =
    'Download free, sample <strong>AVIF (AV1 Image File Format) files</strong> for various purposes. These files are perfect for testing image compression, optimizing web performance, or simply having sample images for reference. Get started now and download your free AVIF files!';

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
