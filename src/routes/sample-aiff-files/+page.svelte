<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Audio Files',
    parentSlug: '/sample-audio-files',
    title: 'AIFF'
  };

  const files = [
    {
      attr0: '1411kbps',
      attr1: '14.3MB',
      attr2: '30s',
      downloadUrl: '/mocksample_aiff_1411kbps_14_3MB_30s.aiff'
    },
    {
      attr0: '705kbps',
      attr1: '7.15MB',
      attr2: '30s',
      downloadUrl: '/mocksample_aiff_705kbps_7_15MB_30s.aiff'
    }
  ];

  const faqs = [
    {
      question: 'What is an AIFF file?',
      answer:
        'AIFF (Audio Interchange File Format) is an uncompressed audio file format developed by Apple Inc. It is known for its high audio quality and is commonly used in professional audio production and editing.'
    },
    {
      question: 'What are the advantages of using AIFF files?',
      answer:
        'AIFF files offer lossless audio quality, preserving all the original audio data without any compression. This makes them ideal for archiving, mastering, and applications where audio fidelity is critical.'
    },
    {
      question: 'What are the disadvantages of using AIFF files?',
      answer:
        'The main disadvantage of AIFF files is their large file size compared to compressed formats like MP3. This can make them less suitable for online streaming or storage on devices with limited capacity.'
    },
    {
      question: 'What are MIME types?',
      answer:
        'MIME stands for Multipurpose Internet Mail Extension. MIME types are labels that identify the format of a file, allowing web browsers and servers to understand what kind of data they are dealing with. For AIFF files, the correct MIME type is "audio/aiff".'
    },
    {
      question: 'What bitrates and file sizes do your sample audios come in?',
      answer:
        "Our free AIFF sample audios come in uncompressed format with bitrates of 1411kbps and 705kbps, resulting in file sizes of 14.3MB and 7.15MB for a 30-second clip. We'll be continuously adding more options, so check back for the latest selection."
    },
    {
      question: 'Can I use these sample audios in my commercial projects?',
      answer:
        'Absolutely! Our free AIFF sample audios are intended for commercial use as well. Feel free to download and utilize them in your projects without any licensing restrictions.'
    },
    {
      question: 'Where can I learn more about AIFF formats?',
      answer: `You can find detailed information about the AIFF format on the Apple Developer website and various online resources. Some relevant terms to search for include "Audio Interchange File Format", "AIFF specifications", and "AIFF audio".`
    },
    {
      question: 'How can I play or edit AIFF files?',
      answer:
        'AIFF files can be played using a wide range of media players, including iTunes, QuickTime Player, VLC Media Player, and many others. For editing AIFF files, you can use audio editing software like Audacity, Adobe Audition, or other compatible tools.'
    }
  ];

  const metaTitle = 'Sample AIFF Files Free Download | MockSample';
  const metaDescription =
    'Download free, royalty-free AIFF audio samples for testing and development. Explore our collection of short audio clips in uncompressed format.';
  const metaKeywords =
    'aiff samples, free aiff files, sample audios, test audios, audio samples, royalty-free audios, aiff clips, audio testing, audio development, mock audios';
  const title = 'Sample AIFF Files Free Download';
  const description = `Download free, royalty-free <strong>AIFF audio samples</strong> in uncompressed format to fit your project's needs. Choose from a wide range of short audio clips in different bitrates and file sizes. These samples are perfect for testing audio players, developing software and websites, or creating mockups and prototypes. Get started now and download your free AIFFs!`;

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
