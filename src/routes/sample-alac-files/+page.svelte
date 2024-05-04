<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Audio Files',
    parentSlug: '/sample-audio-files',
    title: 'ALAC'
  };

  const files = [
    {
      attr0: '16-bit',
      attr1: '705.6kB',
      attr2: '30s',
      downloadUrl: '/mocksample_alac_16bit_705_6kB_30s.alac'
    },
    {
      attr0: '24-bit',
      attr1: '1.06MB',
      attr2: '30s',
      downloadUrl: '/mocksample_alac_24bit_1_06MB_30s.alac'
    }
  ];

  const faqs = [
    {
      question: 'What is an ALAC file?',
      answer:
        'ALAC (Apple Lossless Audio Codec) is a lossless audio compression format developed by Apple Inc. It allows for reduced file sizes compared to uncompressed formats like WAV while preserving the original audio quality.'
    },
    {
      question: 'What are the advantages of using ALAC files?',
      answer:
        'ALAC files offer a good balance between audio quality and file size. They provide lossless compression, ensuring that the audio remains identical to the original source, while taking up less storage space compared to uncompressed formats.'
    },
    {
      question: 'What are the disadvantages of using ALAC files?',
      answer:
        'ALAC files may not be as widely supported as some other lossless formats like FLAC. However, they are compatible with Apple devices and software, as well as some other media players and audio editing tools.'
    },
    {
      question: 'How does ALAC compare to other lossless formats like FLAC?',
      answer:
        'Both ALAC and FLAC are lossless audio formats, meaning they preserve the original audio quality. ALAC is generally considered to have slightly lower compression efficiency compared to FLAC, resulting in slightly larger file sizes. However, the difference in quality is negligible, and both formats offer excellent audio fidelity.'
    },
    {
      question: 'What are the different bit depths available for ALAC files?',
      answer:
        'ALAC files can support various bit depths, including 16-bit and 24-bit. Higher bit depths provide a greater dynamic range and more accurate representation of the audio signal.'
    },
    {
      question: 'What are MIME types?',
      answer:
        'MIME stands for Multipurpose Internet Mail Extension. MIME types are labels that identify the format of a file, allowing web browsers and servers to understand what kind of data they are dealing with. The correct MIME type for ALAC files is "audio/alac".'
    },
    {
      question: 'What bit depths and file sizes do your sample audios come in?',
      answer:
        "Our free ALAC sample audios are available in both 16-bit and 24-bit depths, with file sizes ranging from 705.6kB to 1.06MB. We're constantly working to expand our collection, so be sure to check back for more options in the future."
    },
    {
      question: 'Can I use these sample audios in my commercial projects?',
      answer:
        'Yes, you can! Our free ALAC sample audios are available for both personal and commercial use. Feel free to download and incorporate them into your projects without any licensing restrictions.'
    },
    {
      question: 'Where can I learn more about ALAC format and lossless audio compression?',
      answer:
        'You can find comprehensive information about the ALAC format and lossless audio compression on various online resources and audio engineering websites. Some relevant terms to search for include "Apple Lossless Audio Codec", "lossless audio compression", and "digital audio formats".'
    },
    {
      question: 'How can I play or edit ALAC files?',
      answer:
        'ALAC files are compatible with Apple devices and software, including iTunes, QuickTime Player, and Logic Pro. They can also be played or edited using other media players and audio editing tools that support the ALAC format, such as VLC Media Player and Audacity.'
    }
  ];

  const metaTitle = 'Sample ALAC Files Free Download | MockSample';
  const metaDescription =
    'Download free, royalty-free ALAC audio samples for testing and development. Explore our collection of short audio clips in various bit depths and file sizes.';
  const metaKeywords =
    'alac samples, free alac files, sample audios, test audios, audio samples, royalty-free audios, alac clips, audio testing, audio development, mock audios';
  const title = 'Sample ALAC Files Free Download';
  const description = `Download free, royalty-free <strong>ALAC audio samples</strong> in various bit depths and file sizes to fit your project's needs. Choose from a wide range of short audio clips in different bit depths and file sizes. These samples are perfect for testing audio players, developing software and websites, or creating mockups and prototypes. Get started now and download your free ALACs!`;

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
