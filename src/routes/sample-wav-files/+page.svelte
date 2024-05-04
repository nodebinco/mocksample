<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Audio Files',
    parentSlug: '/sample-audio-files',
    title: 'WAV'
  };

  const files = [
    {
      attr0: '16-bit PCM',
      attr1: '1.41MB',
      attr2: '30s',
      downloadUrl: '/mocksample_wav_16bit_pcm_1_41MB_30s.wav'
    },
    {
      attr0: '24-bit PCM',
      attr1: '2.12MB',
      attr2: '30s',
      downloadUrl: '/mocksample_wav_24bit_pcm_2_12MB_30s.wav'
    },
    {
      attr0: '32-bit Float',
      attr1: '2.82MB',
      attr2: '30s',
      downloadUrl: '/mocksample_wav_32bit_float_2_82MB_30s.wav'
    }
  ];

  const faqs = [
    {
      question: 'What is a WAV file?',
      answer:
        'WAV (Waveform Audio File Format) is a standard audio file format developed by Microsoft and IBM. It is an uncompressed, lossless format that stores audio data in its raw form, preserving the original quality of the recording.'
    },
    {
      question: 'What are the advantages of using WAV files?',
      answer:
        'WAV files offer the highest audio quality due to their lossless nature, making them ideal for professional audio editing, archiving, and applications where audio fidelity is critical. They are also widely supported by various audio software and devices.'
    },
    {
      question: 'What are the disadvantages of using WAV files?',
      answer:
        'The main disadvantage of WAV files is their large file size compared to lossy compressed formats like MP3. This can make them less suitable for online streaming or storage on devices with limited capacity.'
    },
    {
      question: 'What are the different bit depths available for WAV files?',
      answer:
        'WAV files can have different bit depths, typically 16-bit, 24-bit, or 32-bit float. Higher bit depths allow for a greater dynamic range and more accurate representation of the audio signal.'
    },
    {
      question: 'What are MIME types?',
      answer:
        'MIME stands for Multipurpose Internet Mail Extension. MIME types are labels that identify the format of a file, allowing web browsers and servers to understand what kind of data they are dealing with. For WAV files, the correct MIME type is "audio/wav" or "audio/x-wav".'
    },
    {
      question: 'What bit depths and file sizes do your sample audios come in?',
      answer:
        "Our free WAV sample audios come in a variety of bit depths and file sizes to suit your needs. We offer options ranging from 16-bit at 1.41MB to 32-bit float at 2.82MB. We'll be continuously adding more options, so check back for the latest selection."
    },
    {
      question: 'Can I use these sample audios in my commercial projects?',
      answer:
        'Absolutely! Our free WAV sample audios are intended for commercial use as well. Feel free to download and utilize them in your projects without any licensing restrictions.'
    },
    {
      question: 'Where can I learn more about WAV formats and PCM audio?',
      answer: `You can find detailed information about the WAV format and PCM (Pulse-Code Modulation) audio on various online resources and audio engineering websites. Some relevant terms to search for include "Waveform Audio File Format", "PCM audio", and "digital audio principles".`
    },
    {
      question: 'How can I play or edit WAV files?',
      answer:
        'WAV files can be played using a wide range of media players, including Windows Media Player, VLC Media Player, iTunes, and many others. For editing WAV files, you can use audio editing software like Audacity, Adobe Audition, or other compatible tools.'
    }
  ];

  const metaTitle = 'Sample WAV Files Free Download | MockSample';
  const metaDescription =
    'Download free, royalty-free WAV audio samples for testing and development. Explore our collection of short audio clips in various bit depths and file sizes.';
  const metaKeywords =
    'wav samples, free wav files, sample audios, test audios, audio samples, royalty-free audios, wav clips, audio testing, audio development, mock audios';
  const title = 'Sample WAV Files Free Download';
  const description = `Download free, royalty-free <strong>WAV audio samples</strong> in various bit depths and file sizes to fit your project's needs. Choose from a wide range of short audio clips in different bit depths and file sizes. These samples are perfect for testing audio players, developing software and websites, or creating mockups and prototypes. Get started now and download your free WAVs!`;

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
