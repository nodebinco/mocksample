<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Audio Files',
    parentSlug: '/sample-audio-files',
    title: 'FLAC'
  };

  const files = [
    {
      attr0: '16-bit',
      attr1: '3.2MB',
      attr2: '30s',
      downloadUrl: '/mocksample_flac_16bit_3_2MB_30s.flac'
    },
    {
      attr0: '24-bit',
      attr1: '4.8MB',
      attr2: '30s',
      downloadUrl: '/mocksample_flac_24bit_4_8MB_30s.flac'
    }
  ];

  const faqs = [
    {
      question: 'What is a FLAC file?',
      answer:
        'FLAC (Free Lossless Audio Codec) is an audio coding format for lossless compression of digital audio. This means that audio is compressed without any loss in quality, preserving the original audio data perfectly.'
    },
    {
      question: 'What are the advantages of using FLAC files?',
      answer:
        'FLAC files offer the highest audio quality possible while still providing a significant reduction in file size compared to uncompressed formats like WAV. They are ideal for archiving audio, professional audio editing, and situations where preserving audio fidelity is crucial.'
    },
    {
      question: 'What are the different bit depths available for FLAC files?',
      answer:
        'FLAC supports various bit depths, commonly 16-bit and 24-bit. Higher bit depths offer a greater dynamic range and more precise audio representation, but they also result in larger file sizes.'
    },
    {
      question: 'What are MIME types?',
      answer:
        'MIME stands for Multipurpose Internet Mail Extension. MIME types are labels that identify the format of a file, allowing web browsers and servers to understand what kind of data they are dealing with. For FLAC files, the correct MIME type is "audio/flac".'
    },
    {
      question: 'What bit depths and file sizes do your sample audios come in?',
      answer:
        'Our free FLAC sample audios come in 16-bit and 24-bit depths. The 16-bit version is around 3.2MB, while the 24-bit version is approximately 4.8MB. We are continuously working to expand our selection, so stay tuned for more options!'
    },
    {
      question: 'Can I use these sample audios in my commercial projects?',
      answer:
        'Absolutely! Our free FLAC sample audios are available for both personal and commercial use. Feel free to download and utilize them in your projects without any licensing restrictions.'
    },
    {
      question: 'Where can I learn more about FLAC formats and codecs?',
      answer:
        'For more information on the FLAC format and its codecs, you can visit the official FLAC website and explore various online resources. Key terms to search for include "Free Lossless Audio Codec", "FLAC compression", and "lossless audio".'
    },
    {
      question: 'How can I play or edit FLAC files?',
      answer:
        'Many media players support FLAC playback, including VLC Media Player, Foobar2000, and Winamp. For editing FLAC files, you can use audio editing software such as Audacity, Adobe Audition, or other tools compatible with lossless audio formats.'
    }
  ];

  const metaTitle = 'Sample FLAC Files Free Download | MockSample';
  const metaDescription =
    'Download free, royalty-free FLAC audio samples for testing and development. Explore our collection of short audio clips in 16-bit and 24-bit depths.';
  const metaKeywords =
    'flac samples, free flac files, sample audios, test audios, audio samples, royalty-free audios, flac clips, audio testing, audio development, mock audios';
  const title = 'Sample FLAC Files Free Download';
  const description = `Download free, royalty-free <strong>FLAC audio samples</strong> in 16-bit and 24-bit depths to suit your project's needs. Choose from a selection of short audio clips perfect for testing audio players, developing software and websites, or creating mockups and prototypes. Get your free FLACs today!`;

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
