<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Document Files',
    parentSlug: '/sample-document-files',
    title: 'PPTX (PowerPoint Presentation)'
  };

  const files = [
    {
      attr0: 'Simple Template',
      attr1: '2.5MB',
      attr2: '10 Slides',
      downloadUrl: '/mocksample_pptx_simple_template_2_5MB_10_slides.pptx'
    },
    {
      attr0: 'Business Proposal',
      attr1: '4.8MB',
      attr2: '20 Slides',
      downloadUrl: '/mocksample_pptx_business_proposal_4_8MB_20_slides.pptx'
    },
    {
      attr0: 'Educational Presentation',
      attr1: '3.2MB',
      attr2: '15 Slides',
      downloadUrl: '/mocksample_pptx_educational_presentation_3_2MB_15_slides.pptx'
    }
  ];

  const faqs = [
    {
      question: 'What is a PPTX file?',
      answer:
        'PPTX is a file extension for presentation files created with Microsoft PowerPoint. It is a zipped, XML-based format that stores slides, text, formatting, images, and other presentation elements.'
    },
    {
      question: 'What are PPTX files used for?',
      answer:
        'PPTX files are commonly used for creating presentations for various purposes, such as business meetings, educational lectures, conferences, and marketing pitches. They allow users to present information in a visually appealing and organized manner.'
    },
    {
      question: 'What are the advantages of using PPTX files?',
      answer:
        'PPTX files offer a wide range of features for creating professional presentations, including customizable templates, animations, transitions, multimedia integration, and collaboration tools.'
    },
    {
      question: 'What are the disadvantages of using PPTX files?',
      answer:
        'PPTX files can be large in size, especially when containing high-resolution images or embedded videos. Compatibility issues may also arise with older versions of Microsoft PowerPoint or other presentation software.'
    },
    {
      question: 'How can I open and edit PPTX files?',
      answer:
        'PPTX files can be opened and edited with Microsoft PowerPoint or other compatible presentation software such as LibreOffice Impress, OpenOffice Impress, or Google Slides.'
    },
    {
      question: 'What is the difference between PPT and PPTX files?',
      answer:
        'PPTX is a newer, XML-based format introduced in Microsoft PowerPoint 2007. PPTX files are generally smaller and more compatible with different software compared to the older PPT format.'
    },
    {
      question: 'Can I convert PPTX files to other formats?',
      answer:
        'Yes, PPTX files can be converted to various formats such as PDF, JPG, PNG, and video formats using Microsoft PowerPoint or online file conversion tools.'
    },
    {
      question: 'Can I use these sample PPTX files in my commercial projects?',
      answer:
        'Yes, our free sample PPTX files are available for commercial use. Feel free to download and utilize them in your projects without any licensing restrictions.'
    }
  ];

  const metaTitle = 'Sample PPTX (PowerPoint Presentation) Files Free Download | MockSample';
  const metaDescription =
    'Download free, royalty-free PPTX (PowerPoint Presentation) sample files for testing and development. Explore our collection of presentation templates and designs.';
  const metaKeywords =
    'pptx samples, powerpoint samples, free pptx files, free powerpoint files, sample presentations, test presentations, presentation templates, royalty-free presentations, pptx templates, powerpoint templates, presentation testing, presentation development, mock presentations';
  const title = 'Sample PPTX (PowerPoint Presentation) Files Free Download';
  const description = `Download free, royalty-free <strong>PPTX (PowerPoint Presentation) sample files</strong> in various styles and themes to fit your project's needs. Choose from a wide range of presentation templates and designs, including simple templates, business proposals, and educational presentations. These samples are perfect for testing presentation software, developing websites or applications, or creating mockups and prototypes. Get started now and download your free PPTXs!`;

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
