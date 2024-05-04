<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Data Files',
    parentSlug: '/sample-data-files',
    title: 'JSON'
  };

  const files = [
    {
      attr0: 'Sample JSON Data',
      attr1: '5KB',
      attr2: 'N/A',
      downloadUrl: '/mocksample_json_sample_data_5KB.json'
    }
  ];

  const faqs = [
    {
      question: 'What is a JSON file?',
      answer:
        'JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. It is commonly used for transmitting data between a web server and a web client.'
    },
    {
      question: 'What are JSON files used for?',
      answer:
        'JSON files are used for storing and transmitting structured data, such as configuration settings, API responses, and data exchanged between web applications and servers. They are widely used in web development and data interchange.'
    },
    {
      question: 'What are the advantages of using JSON files?',
      answer:
        'JSON files are easy to read and write for both humans and machines. They are also lightweight and support complex data structures, making them suitable for various applications.'
    },
    {
      question: 'What are the disadvantages of using JSON files?',
      answer:
        'JSON files may not be suitable for storing large amounts of data due to their text-based format, which can result in larger file sizes compared to binary formats. They may also lack certain features found in other data storage formats.'
    },
    {
      question: 'How can I open and view JSON files?',
      answer:
        'JSON files can be opened and viewed using any text editor, such as Notepad on Windows, TextEdit on macOS, or Visual Studio Code. There are also online JSON viewers available.'
    },
    {
      question: 'Can I convert JSON files to other formats?',
      answer:
        'JSON files can be converted to other data formats using various tools and programming libraries. Common conversions include JSON to CSV, JSON to XML, and vice versa.'
    },
    {
      question: 'Can I use this sample JSON data in my commercial projects?',
      answer:
        'Yes, our free sample JSON data is available for commercial use. Feel free to download and utilize it in your projects without any licensing restrictions.'
    }
  ];

  const metaTitle = 'Sample JSON Files Free Download | MockSample';
  const metaDescription =
    'Download free, sample JSON files for testing and development. Explore our collection of structured data in JSON format.';
  const metaKeywords =
    'json samples, free json files, sample data, test data, json samples, json data, json examples, data testing, data development, mock data';
  const title = 'Sample JSON Files Free Download';
  const description =
    'Download free, sample <strong>JSON (JavaScript Object Notation) files</strong> for various purposes. These files are perfect for testing data processing applications, building APIs, or simply having sample data for reference. Get started now and download your free JSON files!';

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
