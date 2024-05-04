<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Audio Files',
    parentSlug: '/sample-audio-files',
    title: 'OGG'
  };

  const files = [
    {
      attr0: '750kB',
      attr1: '480x270',
      attr2: '30s',
      downloadUrl: '/mocksample_ogg_750kB_480x270_30s.ogg'
    },
    {
      attr0: '800kB',
      attr1: '640x360',
      attr2: '30s',
      downloadUrl: '/mocksample_ogg_800kB_640x360_30s.ogg'
    },
    {
      attr0: '1.5MB',
      attr1: '1280x720',
      attr2: '30s',
      downloadUrl: '/mocksample_ogg_1_5MB_1280x720_30s.ogg'
    },
    {
      attr0: '2.3MB',
      attr1: '1280x720',
      attr2: '30s',
      downloadUrl: '/mocksample_ogg_1_5MB_1280x720_30s.ogg'
    }
  ];

  const faqs = [
    {
      question: 'What is an OGG file?',
      answer:
        'OGG is a free and open-source container format for multimedia, including audio and video. It is designed to provide efficient streaming and high-quality playback for both compressed and uncompressed content.'
    },
    {
      question: 'What are the advantages of using OGG files?',
      answer:
        'OGG files offer several benefits, including efficient compression, excellent audio quality, and royalty-free licensing. They are also supported by a wide range of media players and web browsers, making them a versatile choice for audio content.'
    },
    {
      question: 'What are MIME types?',
      answer:
        'MIME stands for Multipurpose Internet Mail Extension. MIME types are labels that identify the format of a file, allowing web browsers and servers to understand what kind of data they are dealing with. For OGG audio files, the correct MIME type is "audio/ogg".'
    },
    {
      question: 'What resolutions and file sizes do your sample audio files come in?',
      answer:
        "Our free OGG sample audio files come in a variety of resolutions and file sizes to suit your needs. We offer options ranging from 480x270 at 750kB to 1280x720 at 2.3MB. We'll be continuously adding more options, so check back for the latest selection."
    },
    {
      question: 'Can I use these sample audio files in my commercial projects?',
      answer:
        'Absolutely! Our free OGG sample audio files are intended for commercial use as well. Feel free to download and utilize them in your projects without any licensing restrictions.'
    },
    {
      question: 'Where can I learn more about OGG formats and codecs?',
      answer: `You can find detailed information about the OGG format and its codecs on the official OGG website and various online resources. Some relevant terms to search for include "OGG container format", "Vorbis audio codec", and "Opus audio codec".`
    },
    {
      question: 'How can I play or edit OGG files?',
      answer:
        'OGG files can be played using a variety of media players, such as VLC Media Player, Foobar2000, and most web browsers with HTML5 audio support. For editing OGG files, you can use audio editing software like Audacity, Adobe Audition, or Ocenaudio.'
    }
  ];

  const metaTitle = 'Sample OGG Files Free Download | MockSample';
  const metaDescription =
    'Download free, royalty-free OGG audio samples for testing and development. Explore our collection of short audio clips in various resolutions and file sizes.';
  const metaKeywords =
    'ogg samples, free ogg files, sample audio, test audio, audio samples, royalty-free audio, ogg clips, audio testing, audio development, mock audio';
  const title = 'Sample OGG Files Free Download';
  const description = `Download free, royalty-free <strong>OGG audio samples</strong> in various sizes and resolutions to fit your project's needs. Choose from a wide range of short audio clips in different resolutions and file sizes. These samples are perfect for testing audio players, developing software and websites, or creating mockups and prototypes. Get started now and download your free OGGs!`;

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
