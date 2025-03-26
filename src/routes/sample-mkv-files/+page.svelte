<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Video Files',
    parentSlug: '/sample-video-files',
    title: 'MKV'
  };

  const files = [
    {
      attr0: '715KB',
      attr1: '426x240 (240p)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_mkv_715KB_426x240_240p_7s_30fps.mkv'
    },
    {
      attr0: '2MB',
      attr1: '640x360 (360p)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_mkv_2MB_640x360_360p_7s_30fps.mkv'
    },
    {
      attr0: '3MB',
      attr1: '854x480 (480p)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_mkv_3MB_854x480_480p_7s_30fps.mkv'
    },
    {
      attr0: '7MB',
      attr1: '1280x720 (720p)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_mkv_7MB_1280x720_720p_7s_30fps.mkv'
    },
    {
      attr0: '9MB',
      attr1: '1920x1080 (1080p)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_mkv_9MB_1920x1080_1080p_7s_30fps.mkv'
    },
    {
      attr0: '14MB',
      attr1: '2560x1440 (2k)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_mkv_14MB_2560x1440_2k_7s_30fps.mkv'
    },
    {
      attr0: '21MB',
      attr1: '3840x2160 (4k)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_mkv_21MB_3840x2160_4k_7s_30fps.mkv'
    },
    {
      attr0: '631KB',
      attr1: '240x426 (240p)',
      attr2: '4s',
      attr3: '30fps',
      file: 'mocksample_mkv_631KB_240x426_240p_4s_30fps.mkv'
    },
    {
      attr0: '1MB',
      attr1: '360x640 (360p)',
      attr2: '4s',
      attr3: '30fps',
      file: 'mocksample_mkv_1MB_360x640_360p_4s_30fps.mkv'
    },
    {
      attr0: '2MB',
      attr1: '480x854 (480p)',
      attr2: '4s',
      attr3: '30fps',
      file: 'mocksample_mkv_2MB_480x854_480p_4s_30fps.mkv'
    },
    {
      attr0: '5MB',
      attr1: '720x1280 (720p)',
      attr2: '4s',
      attr3: '30fps',
      file: 'mocksample_mkv_5MB_720x1280_720p_4s_30fps.mkv'
    },
    {
      attr0: '5MB',
      attr1: '1080x1920 (1080p)',
      attr2: '4s',
      attr3: '30fps',
      file: 'mocksample_mkv_5MB_1080x1920_1080p_4s_30fps.mkv'
    },
    {
      attr0: '9MB',
      attr1: '1440x2560 (2k)',
      attr2: '4s',
      attr3: '30fps',
      file: 'mocksample_mkv_9MB_1440x2560_2k_4s_30fps.mkv'
    },
    {
      attr0: '13MB',
      attr1: '2180x3840 (4k)',
      attr2: '4s',
      attr3: '30fps',
      file: 'mocksample_mkv_13MB_2180x3840_4k_4s_30fps.mkv'
    }
  ];

  const faqs = [
    {
      question: 'What is an MKV file?',
      answer:
        'MKV (Matroska Video) is a versatile and open-standard multimedia container format that can store an unlimited number of video, audio, picture, or subtitle tracks in one file. It is known for its flexibility and support for a wide range of codecs.'
    },
    {
      question: 'What are the advantages of using MKV files?',
      answer:
        'MKV files offer several advantages, including: <ul><li>Flexibility: Support for multiple video, audio, and subtitle tracks.</li><li>Open Standard: Not restricted by proprietary codecs or licensing fees.</li><li>High Quality: Can handle high-definition video and audio.</li><li>Error Resilience: Can recover from errors and corruption.</li><li>Chapter and Menu Support: Enables navigation within the video.</li></ul>'
    },
    {
      question: 'What are MIME types?',
      answer:
        'MIME stands for Multipurpose Internet Mail Extension. MIME types are labels that identify the format of a file, allowing web browsers and servers to understand what kind of data they are dealing with. For MKV files, the correct MIME type is "video/x-matroska".'
    },
    {
      question: 'What resolutions and file sizes do your sample videos come in?',
      answer:
        "Our free MKV sample videos come in a variety of resolutions and file sizes to suit your needs. We offer options ranging from 320x240 at 500kB to 720x480 at 1.5MB. We'll be continuously adding more options, so check back for the latest selection."
    },
    {
      question: 'Can I use these sample videos in my commercial projects?',
      answer:
        'Absolutely! Our free MKV sample videos are intended for commercial use as well. Feel free to download and utilize them in your projects without any licensing restrictions.'
    },
    {
      question: 'Where can I learn more about MKV formats and codecs?',
      answer: `You can find detailed information about the MKV format and its codecs on the official Matroska website and various online resources. Some relevant terms to search for include "Matroska", "MKV container", and "MKV codecs".`
    },
    {
      question: 'How can I play or edit MKV files?',
      answer:
        'MKV files can be played using media players that support the Matroska format, such as VLC Media Player, MPC-HC, and Kodi. For editing MKV files, you can use video editing software like Handbrake, MKVToolNix, or Avidemux.'
    }
  ];

  const metaTitle = 'Sample MKV Files Free Download | MockSample';
  const metaDescription =
    'Download free, royalty-free MKV video samples for testing and development. Explore our collection of short video clips in various resolutions and file sizes.';
  const metaKeywords =
    'mkv samples, free mkv files, sample videos, test videos, video samples, royalty-free videos, mkv clips, video testing, video development, mock videos';
  const title = 'Sample MKV Files Free Download';
  const description = `Download free, royalty-free <strong>MKV video samples</strong> in various sizes and resolutions to fit your project's needs. Choose from a wide range of short video clips in different resolutions and file sizes. These samples are perfect for testing video players, developing software and websites, or creating mockups and prototypes. Get started now and download your free MKVs!`;

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
