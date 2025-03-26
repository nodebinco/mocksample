<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Audio Files',
    parentSlug: '/sample-audio-files',
    title: 'MP3'
  };

  const files = [
    {
      attr0: '320kbps',
      attr1: '2.6MB',
      attr2: '30s',
      downloadUrl: '/mocksample_mp3_320kbps_2_6MB_30s.mp3'
    },
    {
      attr0: '128kbps',
      attr1: '1MB',
      attr2: '30s',
      downloadUrl: '/mocksample_mp3_128kbps_1MB_30s.mp3'
    },
    {
      attr0: '64kbps',
      attr1: '520kB',
      attr2: '30s',
      downloadUrl: '/mocksample_mp3_64kbps_520kB_30s.mp3'
    }
  ];

  const faqs = [
    {
      question: 'What is an MP3 file?',
      answer:
        'MP3 (MPEG-1 Audio Layer III) is a popular audio coding format that uses lossy compression to reduce the size of audio files while maintaining acceptable sound quality. It is widely supported by various media players, devices, and platforms.'
    },
    {
      question: 'What are the advantages of using MP3 files?',
      answer:
        'MP3 files offer a good balance between audio quality and file size, making them suitable for a wide range of applications, including online streaming, music distribution, and portable audio playback. They are also highly compatible and supported by most devices and software.'
    },
    {
      question: 'What are the different bitrates available for MP3 files?',
      answer:
        'MP3 files can be encoded at various bitrates, typically ranging from 32kbps to 320kbps. Higher bitrates generally result in better audio quality but larger file sizes. The choice of bitrate depends on the specific needs of the application and the desired balance between quality and size.'
    },
    {
      question: 'What are MIME types?',
      answer:
        'MIME stands for Multipurpose Internet Mail Extension. MIME types are labels that identify the format of a file, allowing web browsers and servers to understand what kind of data they are dealing with. For MP3 files, the correct MIME type is "audio/mpeg".'
    },
    {
      question: 'What bitrates and file sizes do your sample audios come in?',
      answer:
        "Our free MP3 sample audios come in a variety of bitrates and file sizes to suit your needs. We offer options ranging from 64kbps at 520kB to 320kbps at 2.6MB. We'll be continuously adding more options, so check back for the latest selection."
    },
    {
      question: 'Can I use these sample audios in my commercial projects?',
      answer:
        'Absolutely! Our free MP3 sample audios are intended for commercial use as well. Feel free to download and utilize them in your projects without any licensing restrictions.'
    },
    {
      question: 'Where can I learn more about MP3 formats and codecs?',
      answer: `You can find detailed information about the MP3 format and its codecs on the official MPEG website and various online resources. Some relevant terms to search for include "MPEG-1 Audio Layer III", "MP3 compression", and "MP3 encoding".`
    },
    {
      question: 'How can I play or edit MP3 files?',
      answer:
        'MP3 files can be played using a wide range of media players, including Windows Media Player, VLC Media Player, iTunes, and many others. For editing MP3 files, you can use audio editing software like Audacity, Adobe Audition, or other compatible tools.'
    }
  ];

  const metaTitle = 'Sample MP3 Files Free Download | MockSample';
  const metaDescription =
    'Download free, royalty-free MP3 audio samples for testing and development. Explore our collection of short audio clips in various bitrates and file sizes.';
  const metaKeywords =
    'mp3 samples, free mp3 files, sample audios, test audios, audio samples, royalty-free audios, mp3 clips, audio testing, audio development, mock audios';
  const title = 'Sample MP3 Files Free Download';
  const description = `Download free, royalty-free <strong>MP3 audio samples</strong> in various bitrates and file sizes to fit your project's needs. Choose from a wide range of short audio clips in different bitrates and file sizes. These samples are perfect for testing audio players, developing software and websites, or creating mockups and prototypes. Get started now and download your free MP3s!`;

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
