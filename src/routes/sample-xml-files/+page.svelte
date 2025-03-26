<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Data Files',
    parentSlug: '/sample-data-files',
    title: 'XML'
  };

  const files = [
    {
      attr0: 'Sample XML Data',
      attr1: '3KB',
      attr2: 'N/A',
      downloadUrl: '/mocksample_xml_sample_data_3KB.xml'
    }
  ];

  const faqs = [
    {
      question: 'What is an XML file?',
      answer:
        'XML (eXtensible Markup Language) is a markup language that defines rules for encoding documents in a format that is both human-readable and machine-readable. It is widely used for storing and exchanging structured data.'
    },
    {
      question: 'What are XML files used for?',
      answer:
        'XML files are used for storing and transmitting structured data in various applications, including web development, data exchange between different systems, configuration files, and more.'
    },
    {
      question: 'What are the advantages of using XML files?',
      answer:
        'XML files provide a standardized way to represent structured data, making them easy to parse and process by different software applications. They are also human-readable and can be easily understood.'
    },
    {
      question: 'What are the disadvantages of using XML files?',
      answer:
        'XML files can be verbose and may result in larger file sizes compared to other data formats like JSON. Parsing XML documents can also be more complex and resource-intensive.'
    },
    {
      question: 'How can I open and view XML files?',
      answer:
        'XML files can be opened and viewed using any text editor, such as Notepad on Windows, TextEdit on macOS, or Visual Studio Code. There are also specialized XML editors available.'
    },
    {
      question: 'Can I convert XML files to other formats?',
      answer:
        'Yes, XML files can be converted to other data formats using various tools and programming libraries. Common conversions include XML to JSON, XML to CSV, and vice versa.'
    },
    {
      question: 'Can I use this sample XML data in my commercial projects?',
      answer:
        'Yes, our free sample XML data is available for commercial use. Feel free to download and utilize it in your projects without any licensing restrictions.'
    }
  ];

  const metaTitle = 'Sample XML Files Free Download | MockSample';
  const metaDescription =
    'Download free, sample XML files for testing and development. Explore our collection of structured data in XML format.';
  const metaKeywords =
    'xml samples, free xml files, sample data, test data, xml samples, xml data, xml examples, data testing, data development, mock data';
  const title = 'Sample XML Files Free Download';
  const description =
    'Download free, sample <strong>XML (eXtensible Markup Language) files</strong> for various purposes. These files are perfect for testing data processing applications, exchanging structured data, or simply having sample data for reference. Get started now and download your free XML files!';

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
