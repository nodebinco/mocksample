<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Video Files',
		parentSlug: '/sample-video-files',
		title: 'WMV'
	};

	const files = [
		{
			attr0: '867KB',
			attr1: '426x240 (240p)',
			attr2: '7s',
			attr3: '30fps',
			file: 'mocksample_wmv_2MB_426x240_240p_7s_30fps.wmv'
		},
		{
			attr0: '6MB',
			attr1: '640x360 (360p)',
			attr2: '7s',
			attr3: '30fps',
			file: 'mocksample_wmv_6MB_640x360_360p_7s_30fps.wmv'
		},
		{
			attr0: '12MB',
			attr1: '854x480 (480p)',
			attr2: '7s',
			attr3: '30fps',
			file: 'mocksample_wmv_12MB_854x480_480p_7s_30fps.wmv'
		},
		{
			attr0: '20MB',
			attr1: '1280x720 (720p)',
			attr2: '7s',
			attr3: '30fps',
			file: 'mocksample_wmv_20MB_1280x720_720p_7s_30fps.wmv'
		},
		{
			attr0: '33MB',
			attr1: '1920x1080 (1080p)',
			attr2: '7s',
			attr3: '30fps',
			file: 'mocksample_wmv_33MB_1920x1080_1080p_7s_30fps.wmv'
		},
		{
			attr0: '47MB',
			attr1: '2560x1440 (2k)',
			attr2: '7s',
			attr3: '30fps',
			file: 'mocksample_wmv_47MB_2560x1440_2k_7s_30fps.wmv'
		},
		{
			attr0: '79MB',
			attr1: '3840x2160 (4k)',
			attr2: '7s',
			attr3: '30fps',
			file: 'mocksample_wmv_79MB_3840x2160_4k_7s_30fps.wmv'
		},
		{
			attr0: '3MB',
			attr1: '240x426 (240p)',
			attr2: '4s',
			attr3: '30fps',
			file: 'mocksample_wmv_3MB_240x426_240p_4s_30fps.wmv'
		},
		{
			attr0: '4MB',
			attr1: '360x640 (360p)',
			attr2: '4s',
			attr3: '30fps',
			file: 'mocksample_wmv_4MB_360x640_360p_4s_30fps.wmv'
		},
		{
			attr0: '6MB',
			attr1: '480x854 (480p)',
			attr2: '4s',
			attr3: '30fps',
			file: 'mocksample_wmv_6MB_480x854_480p_4s_30fps.wmv'
		},
		{
			attr0: '10MB',
			attr1: '720x1280 (720p)',
			attr2: '4s',
			attr3: '30fps',
			file: 'mocksample_wmv_10MB_720x1280_720p_4s_30fps.wmv'
		},
		{
			attr0: '18MB',
			attr1: '1080x1920 (1080p)',
			attr2: '4s',
			attr3: '30fps',
			file: 'mocksample_wmv_18MB_1080x1920_1080p_4s_30fps.wmv'
		},
		{
			attr0: '25MB',
			attr1: '1440x2560 (2k)',
			attr2: '4s',
			attr3: '30fps',
			file: 'mocksample_wmv_25MB_1440x2560_2k_4s_30fps.wmv'
		},
		{
			attr0: '44MB',
			attr1: '2180x3840 (4k)',
			attr2: '4s',
			attr3: '30fps',
			file: 'mocksample_wmv_44MB_2180x3840_4k_4s_30fps.wmv'
		}
	];

	const faqs = [
		{
			question: 'What is a WMV file?',
			answer:
				'WMV (Windows Media Video) is a series of video codecs and their corresponding video coding formats developed by Microsoft. It is a common format for storing video on personal computers and is widely supported by various media players and video editing software.'
		},
		{
			question: 'What are the advantages of using WMV files?',
			answer:
				'WMV files offer good compression efficiency, maintaining relatively high video quality while keeping file sizes manageable. They are also well-suited for streaming and online video delivery due to their support for progressive download and adaptive streaming technologies.'
		},
		{
			question: 'What are MIME types?',
			answer:
				'MIME stands for Multipurpose Internet Mail Extension. MIME types are labels that identify the format of a file, allowing web browsers and servers to understand what kind of data they are dealing with. For WMV files, the correct MIME type is "video/x-ms-wmv".'
		},
		{
			question: 'What resolutions and file sizes do your sample videos come in?',
			answer:
				"Our free WMV sample videos come in a variety of resolutions and file sizes to suit your needs. We offer options ranging from 320x240 at 500kB to 720x480 at 1.5MB. We'll be continuously adding more options, so check back for the latest selection."
		},
		{
			question: 'Can I use these sample videos in my commercial projects?',
			answer:
				'Absolutely! Our free WMV sample videos are intended for commercial use as well. Feel free to download and utilize them in your projects without any licensing restrictions.'
		},
		{
			question: 'Where can I learn more about WMV formats and codecs?',
			answer: `You can find detailed information about the WMV format and its codecs on Microsoft's official documentation and various online resources. Some relevant terms to search for include "WMV file format", "Windows Media codecs", and "VC-1 codec".`
		},
		{
			question: 'How can I play or edit WMV files?',
			answer:
				'WMV files can be played using a wide range of media players, including Windows Media Player, VLC Media Player, and other popular video playback software. For editing WMV files, you can use video editing software like Adobe Premiere Pro, Sony Vegas Pro, or other compatible applications.'
		}
	];

	const metaTitle = 'Sample WMV Files Free Download | MockSample';
	const metaDescription =
		'Download free, royalty-free WMV video samples for testing and development. Explore our collection of short video clips in various resolutions and file sizes.';
	const metaKeywords =
		'wmv samples, free wmv files, sample videos, test videos, video samples, royalty-free videos, wmv clips, video testing, video development, mock videos';
	const title = 'Sample WMV Files Free Download';
	const description = `Download free, royalty-free <strong>WMV video samples</strong> in various sizes and resolutions to fit your project's needs. Choose from a wide range of short video clips in different resolutions and file sizes. These samples are perfect for testing video players, developing software and websites, or creating mockups and prototypes. Get started now and download your free WMVS!`;

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
