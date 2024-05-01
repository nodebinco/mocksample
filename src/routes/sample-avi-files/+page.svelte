<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Video Files',
		parentSlug: '/sample-video-files',
		title: 'AVI' // Changed title to AVI
	};

	const files = [
		{
			attr0: '609KB',
			attr1: '426x240 (240p)',
			attr2: '15s',
			attr3: '30fps',
			file: 'mocksample_avi_609KB_426x240_240p_15s_30fps.avi'
		},
		{
			attr0: '1MB',
			attr1: '640x360 (360p)',
			attr2: '15s',
			attr3: '30fps',
			file: 'mocksample_avi_1MB_640x360_360p_15s_30fps.avi'
		},
		{
			attr0: '3MB',
			attr1: '854x480 (480p)',
			attr2: '15s',
			attr3: '30fps',
			file: 'mocksample_avi_3MB_854x480_480p_15s_30fps.avi'
		},
		{
			attr0: '5MB',
			attr1: '1280x720 (720p)',
			attr2: '15s',
			attr3: '30fps',
			file: 'mocksample_avi_5MB_1280x720_720p_15s_30fps.avi'
		},
		{
			attr0: '8MB',
			attr1: '1920x1080 (1080p)',
			attr2: '15s',
			attr3: '30fps',
			file: 'mocksample_avi_8MB_1920x1080_1080p_15s_30fps.avi'
		},
		{
			attr0: '10MB',
			attr1: '2560x1440 (2k)',
			attr2: '15s',
			attr3: '30fps',
			file: 'mocksample_avi_10MB_2560x1440_2k_15s_30fps.avi'
		},
		{
			attr0: '22MB',
			attr1: '3840x2160 (4k)',
			attr2: '15s',
			attr3: '30fps',
			file: 'mocksample_avi_22MB_3840x2160_4k_15s_30fps.avi'
		},
		{
			attr0: '622KB',
			attr1: '240x426 (240p)',
			attr2: '7s',
			attr3: '30fps',
			file: 'mocksample_avi_622KB_240x426_240p_7s_30fps.avi'
		},
		{
			attr0: '969KB',
			attr1: '360x640 (360p)',
			attr2: '7s',
			attr3: '30fps',
			file: 'mocksample_avi_969KB_360x640_360p_7s_30fps.avi'
		},
		{
			attr0: '2MB',
			attr1: '480x854 (480p)',
			attr2: '7s',
			attr3: '30fps',
			file: 'mocksample_avi_2MB_480x854_480p_7s_30fps.avi'
		},
		{
			attr0: '5MB',
			attr1: '720x1280 (720p)',
			attr2: '7s',
			attr3: '30fps',
			file: 'mocksample_avi_5MB_720x1280_720p_7s_30fps.avi'
		},
		{
			attr0: '8MB',
			attr1: '1080x1920 (1080p)',
			attr2: '7s',
			attr3: '30fps',
			file: 'mocksample_avi_8MB_1080x1920_1080p_7s_30fps.avi'
		},
		{
			attr0: '10MB',
			attr1: '1440x2560 (2k)',
			attr2: '7s',
			attr3: '30fps',
			file: 'mocksample_avi_10MB_1440x2560_2k_7s_30fps.avi'
		},
		{
			attr0: '20MB',
			attr1: '2180x3840 (4k)',
			attr2: '7s',
			attr3: '30fps',
			file: 'mocksample_avi_20MB_2180x3840_4k_7s_30fps.avi'
		}
	];

	const faqs = [
		{
			question: 'What is an AVI file?',
			answer:
				'AVI (Audio Video Interleave) is a multimedia container format developed by Microsoft. It stores audio and video data in a single file, allowing for synchronous playback. AVI files are widely supported by various media players and operating systems.'
		},
		{
			question: 'What are the advantages and disadvantages of using AVI files?',
			answer:
				'Advantages:<ul><li>Wide compatibility with media players and editing software.</li><li>Supports various video and audio codecs, offering flexibility.</li><li>Relatively simple format structure.</li></ul>Disadvantages:<ul><li>Can result in larger file sizes compared to newer formats.</li><li>May require specific codecs for playback.</li><li>Limited support for advanced features like subtitles and chapters.</li></ul>'
		},
		{
			question: 'What are common codecs used in AVI files?',
			answer:
				'AVI files can utilize various video and audio codecs, including:<ul><li>Video codecs: DivX, Xvid, MPEG-4, H.264, etc.</li><li>Audio codecs: MP3, AC3, PCM, etc.</li></ul>The specific codecs used will determine the file size, quality, and playback compatibility.'
		},
		{
			question: 'What resolutions and file sizes do your sample AVI videos come in?',
			answer:
				'Our free AVI sample videos come in various resolutions and file sizes to suit your needs. We offer options ranging from standard definition (SD) to high definition (HD). The exact file sizes will vary depending on the video length and chosen codecs.'
		},
		{
			question: 'Can I use these sample videos in my commercial projects?',
			answer:
				'Absolutely! Our free AVI sample videos are intended for commercial use as well. Feel free to download and utilize them in your projects without any licensing restrictions.'
		},
		{
			question: 'How can I play or edit AVI files?',
			answer:
				'AVI files can be played using popular media players such as VLC Media Player, Windows Media Player, and others. For editing, you can use video editing software like Adobe Premiere Pro, Final Cut Pro, or free options like OpenShot and Shotcut.'
		},
		{
			question: 'Are there any online resources for learning more about AVI files?',
			answer:
				'Yes, you can find more information about AVI files on various online resources, including:<ul><li>Wikipedia: AVI</li><li>Microsoft Developer Network (MSDN)</li><li>VideoHelp Forum</li></ul>'
		}
	];

	const metaTitle = 'Sample AVI Files Free Download | MockSample';
	const metaDescription =
		'Download free, royalty-free AVI video samples for testing and development. Explore our collection of short video clips in various resolutions and file sizes.';
	const metaKeywords =
		'avi samples, free avi files, sample videos, test videos, video samples, royalty-free videos, avi clips, video testing, video development, mock videos';
	const title = 'Sample AVI Files Free Download';
	const description = `Download free, royalty-free <strong>AVI video samples</strong> in various sizes and resolutions to fit your project's needs. Choose from a wide range of short video clips in different resolutions and file sizes. These samples are perfect for testing video players, developing software and websites, or creating mockups and prototypes. Get started now and download your free AVIs!`;

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
