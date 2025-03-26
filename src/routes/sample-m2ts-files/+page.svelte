<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Video Files',
    parentSlug: '/sample-video-files',
    title: 'M2TS'
  };

  const files = [
    {
      attr0: '867KB',
      attr1: '426x240 (240p)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_m2ts_867KB_426x240_240p_7s_30fps.m2ts'
    },
    {
      attr0: '2MB',
      attr1: '640x360 (360p)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_m2ts_2MB_640x360_360p_7s_30fps.m2ts'
    },
    {
      attr0: '3MB',
      attr1: '854x480 (480p)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_m2ts_3MB_854x480_480p_7s_30fps.m2ts'
    },
    {
      attr0: '8MB',
      attr1: '1280x720 (720p)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_m2ts_8MB_1280x720_720p_7s_30fps.m2ts'
    },
    {
      attr0: '10MB',
      attr1: '1920x1080 (1080p)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_m2ts_10MB_1920x1080_1080p_7s_30fps.m2ts'
    },
    {
      attr0: '15MB',
      attr1: '2560x1440 (2k)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_m2ts_15MB_2560x1440_2k_7s_30fps.m2ts'
    },
    {
      attr0: '23MB',
      attr1: '3840x2160 (4k)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_m2ts_23MB_3840x2160_4k_7s_30fps.m2ts'
    },
    {
      attr0: '732KB',
      attr1: '240x426 (240p)',
      attr2: '4s',
      attr3: '30fps',
      file: 'mocksample_m2ts_732KB_240x426_240p_4s_30fps.m2ts'
    },
    {
      attr0: '1MB',
      attr1: '360x640 (360p)',
      attr2: '4s',
      attr3: '30fps',
      file: 'mocksample_m2ts_1MB_360x640_360p_4s_30fps.m2ts'
    },
    {
      attr0: '2MB',
      attr1: '480x854 (480p)',
      attr2: '4s',
      attr3: '30fps',
      file: 'mocksample_m2ts_2MB_480x854_480p_4s_30fps.m2ts'
    },
    {
      attr0: '5MB',
      attr1: '720x1280 (720p)',
      attr2: '4s',
      attr3: '30fps',
      file: 'mocksample_m2ts_5MB_720x1280_720p_4s_30fps.m2ts'
    },
    {
      attr0: '6MB',
      attr1: '1080x1920 (1080p)',
      attr2: '4s',
      attr3: '30fps',
      file: 'mocksample_m2ts_6MB_1080x1920_1080p_4s_30fps.m2ts'
    },
    {
      attr0: '10MB',
      attr1: '1440x2560 (2k)',
      attr2: '4s',
      attr3: '30fps',
      file: 'mocksample_m2ts_10MB_1440x2560_2k_4s_30fps.m2ts'
    },
    {
      attr0: '15MB',
      attr1: '2180x3840 (4k)',
      attr2: '4s',
      attr3: '30fps',
      file: 'mocksample_m2ts_15MB_2180x3840_4k_4s_30fps.m2ts'
    }
  ];

  const faqs = [
    {
      question: 'What is an M2TS file?',
      answer:
        'M2TS is a file format used for multiplexing audio, video, and other streams. It is commonly used for storing high-definition video content on Blu-ray discs.'
    },
    {
      question: 'What are the advantages of using M2TS files?',
      answer:
        'M2TS files offer high-quality video and audio playback, making them suitable for storing high-definition content. They also support multiple audio and video streams, as well as advanced features like subtitles and menu navigation.'
    },
    {
      question: 'What resolutions and file sizes do your sample videos come in?',
      answer:
        "Our free M2TS sample videos come in a variety of resolutions and file sizes to suit your needs. We offer options ranging from 1920x1080 at 2MB to 1920x1080 at 4MB. We'll be continuously adding more options, so check back for the latest selection."
    },
    {
      question: 'Can I use these sample videos in my commercial projects?',
      answer:
        'Absolutely! Our free M2TS sample videos are intended for commercial use as well. Feel free to download and utilize them in your projects without any licensing restrictions.'
    },
    {
      question: 'Where can I learn more about M2TS formats and codecs?',
      answer: `You can find detailed information about the M2TS format and its codecs on various online resources. Some relevant terms to search for include "MPEG Transport Stream", "H.264 video codec", and "AC3 audio codec".`
    },
    {
      question: 'How can I play or edit M2TS files?',
      answer:
        'M2TS files can be played using media players like VLC Media Player, Windows Media Player, and software that supports Blu-ray disc playback. For editing M2TS files, you can use video editing software like Adobe Premiere Pro, Final Cut Pro, or Sony Vegas Pro.'
    }
  ];

  const metaTitle = 'Sample M2TS Files Free Download | MockSample';
  const metaDescription =
    'Download free, royalty-free M2TS video samples for testing and development. Explore our collection of short video clips in various resolutions and file sizes.';
  const metaKeywords =
    'm2ts samples, free m2ts files, sample videos, test videos, video samples, royalty-free videos, m2ts clips, video testing, video development, mock videos';
  const title = 'Sample M2TS Files Free Download';
  const description = `Download free, royalty-free <strong>M2TS video samples</strong> in various sizes and resolutions to fit your project's needs. Choose from a wide range of short video clips in different resolutions and file sizes. These samples are perfect for testing video players, developing software and websites, or creating mockups and prototypes. Get started now and download your free M2TS files!`;

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
