<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Video Files',
    parentSlug: '/sample-video-files',
    title: 'WEBM'
  };

  const files = [
    {
      attr0: '1MB',
      attr1: '426x240 (240p)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_webm_1MB_426x240_240p_7s_30fps.webm'
    },
    {
      attr0: '3MB',
      attr1: '640x360 (360p)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_webm_3MB_640x360_360p_7s_30fps.webm'
    },
    {
      attr0: '4MB',
      attr1: '854x480 (480p)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_mebm_4MB_854x480_480p_7s_30fps.webm'
    },
    {
      attr0: '8MB',
      attr1: '1280x720 (720p)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_webm_8MB_1280x720_720p_7s_30fps.webm'
    },
    {
      attr0: '6MB',
      attr1: '1920x1080 (1080p)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_webm_6MB_1920x1080_1080p_7s_30fps.webm'
    },
    {
      attr0: '9MB',
      attr1: '2560x1440 (2k)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_webm_9MB_2560x1440_2k_7s_30fps.webm'
    },
    {
      attr0: '20MB',
      attr1: '3840x2160 (4k)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_webm_20MB_3840x2160_4k_7s_30fps.webm'
    },
    {
      attr0: '870KB',
      attr1: '240x426 (240p)',
      attr2: '4s',
      attr3: '30fps',
      file: 'mocksample_webm_870KB_240x426_240p_4s_30fps.webm'
    },
    {
      attr0: '2MB',
      attr1: '360x640 (360p)',
      attr2: '4s',
      attr3: '30fps',
      file: 'mocksample_webm_2MB_360x640_360p_4s_30fps.webm'
    },
    {
      attr0: '2MB',
      attr1: '480x854 (480p)',
      attr2: '4s',
      attr3: '30fps',
      file: 'mocksample_webm_2MB_480x854_480p_4s_30fps.webm'
    },
    {
      attr0: '5MB',
      attr1: '720x1280 (720p)',
      attr2: '4s',
      attr3: '30fps',
      file: 'mocksample_webm_5MB_720x1280_720p_4s_30fps.webm'
    },
    {
      attr0: '6MB',
      attr1: '1080x1920 (1080p)',
      attr2: '4s',
      attr3: '30fps',
      file: 'mocksample_webm_6MB_1080x1920_1080p_4s_30fps.webm'
    },
    {
      attr0: '9MB',
      attr1: '1440x2560 (2k)',
      attr2: '4s',
      attr3: '30fps',
      file: 'mocksample_webm_9MB_1440x2560_2k_4s_30fps.webm'
    },
    {
      attr0: '19MB',
      attr1: '2180x3840 (4k)',
      attr2: '4s',
      attr3: '30fps',
      file: 'mocksample_webm_19MB_2180x3840_4k_4s_30fps.webm'
    }
  ];

  const faqs = [
    {
      question: 'What is a WebM file?',
      answer:
        'WebM is an open-source and royalty-free multimedia container file format designed for web video. It uses the VP8 or VP9 video codecs and the Vorbis or Opus audio codecs. WebM files are known for their efficient compression and high-quality video playback.'
    },
    {
      question: 'What are the advantages of using WebM files?',
      answer:
        'WebM files offer several benefits, including efficient compression, which reduces file size and bandwidth usage, making them ideal for online streaming and web delivery. They are also royalty-free and open-source, eliminating licensing costs and ensuring broad compatibility. Additionally, WebM files support high-quality video playback and are compatible with modern web browsers.'
    },
    {
      question: 'What are MIME types?',
      answer:
        'MIME stands for Multipurpose Internet Mail Extension. MIME types are labels that identify the format of a file, allowing web browsers and servers to understand what kind of data they are dealing with. For WebM files, the correct MIME type is "video/webm".'
    },
    {
      question: 'What resolutions and file sizes do your sample videos come in?',
      answer:
        "Our free WebM sample videos come in a variety of resolutions and file sizes to suit your needs. We offer options ranging from 320x240 at 500kB to 720x480 at 1.5MB. We'll be continuously adding more options, so check back for the latest selection."
    },
    {
      question: 'Can I use these sample videos in my commercial projects?',
      answer:
        'Absolutely! Our free WebM sample videos are intended for commercial use as well. Feel free to download and utilize them in your projects without any licensing restrictions.'
    },
    {
      question: 'Where can I learn more about WebM formats and codecs?',
      answer: `You can find detailed information about the WebM format and its codecs on the WebM Project's official website and various online resources. Some relevant terms to search for include "WebM file format", "VP8 codec", "VP9 codec", "Vorbis codec", and "Opus codec".`
    },
    {
      question: 'How can I play or edit WebM files?',
      answer:
        'WebM files can be played using modern web browsers such as Google Chrome, Mozilla Firefox, and Microsoft Edge. They are also supported by various media players like VLC Media Player. For editing WebM files, you can use video editing software that supports the format, such as Adobe Premiere Pro or OpenShot.'
    }
  ];

  const metaTitle = 'Sample WebM Files Free Download | MockSample';
  const metaDescription =
    'Download free, royalty-free WebM video samples for testing and development. Explore our collection of short video clips in various resolutions and file sizes.';
  const metaKeywords =
    'webm samples, free webm files, sample videos, test videos, video samples, royalty-free videos, webm clips, video testing, video development, mock videos';
  const title = 'Sample WebM Files Free Download';
  const description = `Download free, royalty-free <strong>WebM video samples</strong> in various sizes and resolutions to fit your project's needs. Choose from a wide range of short video clips in different resolutions and file sizes. These samples are perfect for testing video players, developing software and websites, or creating mockups and prototypes. Get started now and download your free WebMs!`;

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
