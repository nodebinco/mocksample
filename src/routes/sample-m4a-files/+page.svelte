<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Audio Files',
    parentSlug: '/sample-audio-files',
    title: 'M4A (AAC)'
  };

  const files = [
    {
      attr0: '256kbps',
      attr1: '2.2MB',
      attr2: '30s',
      downloadUrl: '/mocksample_m4a_aac_256kbps_2_2MB_30s.m4a'
    },
    {
      attr0: '128kbps',
      attr1: '1.1MB',
      attr2: '30s',
      downloadUrl: '/mocksample_m4a_aac_128kbps_1_1MB_30s.m4a'
    },
    {
      attr0: '64kbps',
      attr1: '560kB',
      attr2: '30s',
      downloadUrl: '/mocksample_m4a_aac_64kbps_560kB_30s.m4a'
    }
  ];

  const faqs = [
    {
      question: 'What is an M4A file?',
      answer:
        'M4A is a file extension for an audio file encoded with Advanced Audio Coding (AAC). AAC is a lossy compression format, meaning it reduces file size while maintaining relatively high audio quality. It is commonly used for music distribution and streaming due to its efficiency and compatibility with various devices.'
    },
    {
      question: 'How is M4A different from MP3?',
      answer:
        'Both M4A and MP3 are audio formats using lossy compression, but AAC (used in M4A) generally achieves better sound quality at similar bitrates compared to MP3. M4A also supports advanced features like chapters and images, making it suitable for audiobooks and podcasts.'
    },
    {
      question: 'What are the advantages of using M4A files?',
      answer:
        'M4A files offer a balance of good audio quality and relatively small file sizes. They are widely supported by Apple devices and many other media players. Additionally, AAC encoding is known for its efficiency in preserving audio details.'
    },
    {
      question: 'What are the different bitrates available for M4A files?',
      answer:
        'M4A files, like other audio formats, can be encoded at various bitrates, typically ranging from 64kbps to 320kbps. Higher bitrates result in better audio quality but larger file sizes. The choice of bitrate depends on the desired balance between quality and file size for your specific needs.'
    },
    {
      question: 'What are MIME types?',
      answer:
        'MIME stands for Multipurpose Internet Mail Extension. MIME types are labels that identify the format of a file, allowing web browsers and servers to understand what kind of data they are dealing with. For M4A files, the correct MIME type is "audio/mp4" or sometimes "audio/aac".'
    },
    {
      question: 'What bitrates and file sizes do your sample audios come in?',
      answer:
        "Our free M4A sample audios come in a variety of bitrates and file sizes to suit your needs. We offer options ranging from 64kbps at 560kB to 256kbps at 2.2MB. We'll be continuously adding more options, so check back for the latest selection."
    },
    {
      question: 'Can I use these sample audios in my commercial projects?',
      answer:
        'Absolutely! Our free M4A sample audios are intended for commercial use as well. Feel free to download and utilize them in your projects without any licensing restrictions.'
    },
    {
      question: 'Where can I learn more about M4A formats and codecs?',
      answer: `You can find detailed information about the M4A format and AAC codecs on the official MPEG website and various online resources. Some relevant terms to search for include "MPEG-4 Audio", "Advanced Audio Coding", and "AAC compression".`
    },
    {
      question: 'How can I play or edit M4A files?',
      answer:
        'M4A files can be played using a wide range of media players, including iTunes, VLC Media Player, QuickTime, and many others. For editing M4A files, you can use audio editing software like Audacity, Adobe Audition, or other compatible tools.'
    }
  ];

  const metaTitle = 'Sample M4A (AAC) Files Free Download | MockSample';
  const metaDescription =
    'Download free, royalty-free M4A (AAC) audio samples for testing and development. Explore our collection of short audio clips in various bitrates and file sizes.';
  const metaKeywords =
    'm4a samples, aac samples, free m4a files, free aac files, sample audios, test audios, audio samples, royalty-free audios, m4a clips, aac clips, audio testing, audio development, mock audios';
  const title = 'Sample M4A (AAC) Files Free Download';
  const description = `Download free, royalty-free <strong>M4A (AAC) audio samples</strong> in various bitrates and file sizes to fit your project's needs. Choose from a wide range of short audio clips in different bitrates and file sizes. These samples are perfect for testing audio players, developing software and websites, or creating mockups and prototypes. Get started now and download your free M4As!`;

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
