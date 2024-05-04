<script>
  import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

  const breadcrumb = {
    parentTitle: 'Video Files',
    parentSlug: '/sample-video-files',
    title: 'FLV'
  };

  const files = [
    {
      attr0: '680KB',
      attr1: '426x240 (240p)',
      attr2: '15s',
      attr3: '30fps',
      file: 'mocksample_flv_680KB_426x240_240p_15s_30fps.flv'
    },
    {
      attr0: '1MB',
      attr1: '640x360 (360p)',
      attr2: '15s',
      attr3: '30fps',
      file: 'mocksample_flv_1MB_640x360_360p_15s_30fps.flv'
    },
    {
      attr0: '3MB',
      attr1: '854x480 (480p)',
      attr2: '15s',
      attr3: '30fps',
      file: 'mocksample_flv_3MB_854x480_480p_15s_30fps.flv'
    },
    {
      attr0: '16MB',
      attr1: '1280x720 (720p)',
      attr2: '15s',
      attr3: '30fps',
      file: 'mocksample_flv_16MB_1280x720_720p_15s_30fps.flv'
    },
    {
      attr0: '28MB',
      attr1: '1920x1080 (1080p)',
      attr2: '15s',
      attr3: '30fps',
      file: 'mocksample_flv_28MB_1920x1080_1080p_15s_30fps.flv'
    },
    {
      attr0: '32MB',
      attr1: '2560x1440 (2k)',
      attr2: '15s',
      attr3: '30fps',
      file: 'mocksample_flv_32MB_2560x1440_2k_15s_30fps.flv'
    },
    {
      attr0: '58MB',
      attr1: '3840x2160 (4k)',
      attr2: '15s',
      attr3: '30fps',
      file: 'mocksample_flv_58MB_3840x2160_4k_15s_30fps.flv'
    },
    {
      attr0: '641KB',
      attr1: '240x426 (240p)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_flv_641KB_240x426_240p_7s_30fps.flv'
    },
    {
      attr0: '1MB',
      attr1: '360x640 (360p)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_flv_1MB_360x640_360p_7s_30fps.flv'
    },
    {
      attr0: '2MB',
      attr1: '480x854 (480p)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_flv_2MB_480x854_480p_7s_30fps.flv'
    },
    {
      attr0: '5MB',
      attr1: '720x1280 (720p)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_flv_5MB_720x1280_720p_7s_30fps.flv'
    },
    {
      attr0: '32MB',
      attr1: '1080x1920 (1080p)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_flv_32MB_1080x1920_1080p_7s_30fps.flv'
    },
    {
      attr0: '35MB',
      attr1: '1440x2560 (2k)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_flv_35MB_1440x2560_2k_7s_30fps.flv'
    },
    {
      attr0: '55MB',
      attr1: '2180x3840 (4k)',
      attr2: '7s',
      attr3: '30fps',
      file: 'mocksample_flv_55MB_2180x3840_4k_7s_30fps.flv'
    }
  ];

  const faqs = [
    {
      question: 'What is an FLV file?',
      answer:
        'FLV (Flash Video) is a multimedia container file format used to deliver video over the internet. It was originally developed by Macromedia (now Adobe) for the Flash Player and is widely supported by various web browsers and media players.'
    },
    {
      question: 'What are the advantages of using FLV files?',
      answer:
        'FLV files offer efficient compression, streaming capabilities, and widespread compatibility with web browsers and media players that support Flash. They are also relatively simple and lightweight, making them suitable for online video delivery.'
    },
    {
      question: 'What are MIME types?',
      answer:
        'MIME stands for Multipurpose Internet Mail Extension. MIME types are labels that identify the format of a file, allowing web browsers and servers to understand what kind of data they are dealing with. For FLV files, the correct MIME type is "video/x-flv".'
    },
    {
      question: 'What resolutions and file sizes do your sample videos come in?',
      answer:
        "Our free FLV sample videos come in a variety of resolutions and file sizes to suit your needs. We offer options ranging from 320x240 at 500kB to 720x480 at 1.5MB. We'll be continuously adding more options, so check back for the latest selection."
    },
    {
      question: 'Can I use these sample videos in my commercial projects?',
      answer:
        'Absolutely! Our free FLV sample videos are intended for commercial use as well. Feel free to download and utilize them in your projects without any licensing restrictions.'
    },
    {
      question: 'Where can I learn more about FLV formats and codecs?',
      answer: `You can find detailed information about the FLV format and its codecs on Adobe's official documentation and various online resources. Some relevant terms to search for include "FLV file format", "Sorenson Spark codec", and "VP6 codec".`
    },
    {
      question: 'How can I play or edit FLV files?',
      answer:
        'FLV files can be played using media players that support Flash, such as Adobe Flash Player, VLC Media Player, and various web browsers with the Flash plugin installed. For editing FLV files, you can use video editing software like Adobe Premiere Pro or handbrake.'
    }
  ];

  const metaTitle = 'Sample FLV Files Free Download | MockSample';
  const metaDescription =
    'Download free, royalty-free FLV video samples for testing and development. Explore our collection of short video clips in various resolutions and file sizes.';
  const metaKeywords =
    'flv samples, free flv files, sample videos, test videos, video samples, royalty-free videos, flv clips, video testing, video development, mock videos';
  const title = 'Sample FLV Files Free Download';
  const description = `Download free, royalty-free <strong>FLV video samples</strong> in various sizes and resolutions to fit your project's needs. Choose from a wide range of short video clips in different resolutions and file sizes. These samples are perfect for testing video players, developing software and websites, or creating mockups and prototypes. Get started now and download your free FLVs!`;

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
