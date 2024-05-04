<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Document Files',
    parentSlug: '/sample-document-files',
    title: 'PPT (PowerPoint)'
  };

  const files = [
    {
      attr0: 'Basic Presentation',
      attr1: '1.2MB',
      attr2: '10 Slides',
      downloadUrl: '/mocksample_ppt_basic_presentation_1_2MB_10_slides.ppt'
    },
    {
      attr0: 'Business Proposal',
      attr1: '2.5MB',
      attr2: '15 Slides',
      downloadUrl: '/mocksample_ppt_business_proposal_2_5MB_15_slides.ppt'
    },
    {
      attr0: 'Educational Template',
      attr1: '800kB',
      attr2: '5 Slides',
      downloadUrl: '/mocksample_ppt_educational_template_800kB_5_slides.ppt'
    }
  ];

  const faqs = [
    {
      question: 'What is a PPT file?',
      answer:
        'PPT is a file extension for presentation files created with Microsoft PowerPoint. It is a binary file format that stores slides containing text, formatting, images, and other presentation elements.'
    },
    {
      question: 'What are PPT files used for?',
      answer:
        'PPT files are commonly used for creating presentations for various purposes, such as business meetings, educational lectures, conferences, and personal projects.'
    },
    {
      question: 'What are the advantages of using PPT files?',
      answer:
        'PPT files provide a structured and visually engaging way to present information. PowerPoint offers a wide range of features for creating professional-looking presentations with animations, transitions, and multimedia elements.'
    },
    {
      question: 'What are the disadvantages of using PPT files?',
      answer:
        'PPT files can become large in size, especially with embedded media. They may also have compatibility issues with different versions of PowerPoint or other presentation software.'
    },
    {
      question: 'How can I open and edit PPT files?',
      answer:
        'PPT files can be opened and edited with Microsoft PowerPoint or other compatible presentation software such as LibreOffice Impress, OpenOffice Impress, or Google Slides.'
    },
    {
      question: 'What is the difference between PPT and PPTX files?',
      answer:
        'PPTX is a newer, XML-based file format introduced in Microsoft PowerPoint 2007. PPTX files are generally smaller and more compatible with different software compared to the older PPT format.'
    },
    {
      question: 'Can I convert PPT files to other formats?',
      answer:
        'Yes, PPT files can be converted to various formats such as PDF, JPG, PNG, and video formats using Microsoft PowerPoint or online file conversion tools.'
    },
    {
      question: 'Can I use these sample PPT files in my commercial projects?',
      answer:
        'Yes, our free sample PPT files are available for commercial use. Feel free to download and utilize them in your projects without any licensing restrictions.'
    }
  ];

  const metaTitle = 'Sample PPT (PowerPoint) Files Free Download | MockSample';
  const metaDescription =
    'Download free, royalty-free PPT (PowerPoint) presentation samples for testing and development. Explore our collection of presentation templates and examples.';
  const metaKeywords =
    'ppt samples, powerpoint samples, free ppt files, free powerpoint files, presentation samples, test presentations, presentation templates, royalty-free presentations, ppt templates, powerpoint templates';
  const title = 'Sample PPT (PowerPoint) Files Free Download';
  const description = `Download free, royalty-free <strong>PPT (PowerPoint) presentation samples</strong> to jumpstart your projects. Explore our diverse collection of presentation templates and examples, perfect for creating professional presentations quickly and easily. Get started now and download your free PPTs!`;

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
