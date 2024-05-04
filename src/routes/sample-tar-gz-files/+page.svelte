<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Data Files',
    parentSlug: '/sample-data-files',
    title: 'TAR.GZ'
  };

  const files = [
    {
      attr0: 'Sample TAR.GZ File',
      attr1: '2.5MB',
      attr2: 'N/A',
      downloadUrl: '/mocksample_tar_gz_sample_file_2.5MB.tar.gz'
    }
  ];

  const faqs = [
    {
      question: 'What is a TAR.GZ file?',
      answer:
        'A TAR.GZ file, also known as a "tarball," is an archive file format that combines multiple files into a single archive and compresses it using the GNU zip (gzip) compression algorithm.'
    },
    {
      question: 'What are TAR.GZ files used for?',
      answer:
        'TAR.GZ files are commonly used for packaging and compressing files and directories on Unix-like operating systems. They are often used for software distribution and data backup.'
    },
    {
      question: 'What are the advantages of using TAR.GZ files?',
      answer:
        'TAR.GZ files offer efficient compression and preserve file permissions and directory structures. They are widely supported on Unix-like systems and can be easily extracted using command-line tools.'
    },
    {
      question: 'What are the disadvantages of using TAR.GZ files?',
      answer:
        'TAR.GZ files may not be as widely supported on non-Unix systems compared to formats like ZIP. Extracting TAR.GZ files may also require familiarity with command-line tools.'
    },
    {
      question: 'How can I open and extract TAR.GZ files?',
      answer:
        'TAR.GZ files can be opened and extracted using command-line tools like tar on Unix-like systems. There are also third-party tools available for extracting TAR.GZ files on other platforms.'
    },
    {
      question: 'Can I create TAR.GZ files?',
      answer:
        'Yes, you can create TAR.GZ files using the tar command on Unix-like systems. There are also software tools available for creating TAR.GZ files on other platforms.'
    },
    {
      question: 'Can I use this sample TAR.GZ file in my commercial projects?',
      answer:
        'Yes, our free sample TAR.GZ file is available for commercial use. Feel free to download and utilize it in your projects without any licensing restrictions.'
    }
  ];

  const metaTitle = 'Sample TAR.GZ Files Free Download | MockSample';
  const metaDescription =
    'Download free, sample TAR.GZ files for testing and development. Explore our collection of TAR.GZ archives.';
  const metaKeywords =
    'tar.gz samples, free tar.gz files, sample archives, test archives, tar.gz samples, tar.gz examples, file compression, file sharing, file testing, file development, mock files';
  const title = 'Sample TAR.GZ Files Free Download';
  const description =
    'Download free, sample <strong>TAR.GZ (tarball) files</strong> for various purposes. These files are perfect for testing file compression, organizing files, or simply having sample archives for reference. Get started now and download your free TAR.GZ files!';

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
