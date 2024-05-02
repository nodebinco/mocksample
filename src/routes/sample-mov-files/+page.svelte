<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Video Files',
		parentSlug: '/sample-video-files',
		title: 'MOV'
	};

	const files = [
		{
			attr0: '717KB',
			attr1: '426x240 (240p)',
			attr2: '7s',
			attr3: '30fps',
			file: 'mocksample_mov_717KB_426x240_240p_7s_30fps.mov'
		},
		{
			attr0: '2MB',
			attr1: '640x360 (360p)',
			attr2: '7s',
			attr3: '30fps',
			file: 'mocksample_mov_2MB_640x360_360p_7s_30fps.mov'
		},
		{
			attr0: '3MB',
			attr1: '854x480 (480p)',
			attr2: '7s',
			attr3: '30fps',
			file: 'mocksample_mov_3MB_854x480_480p_7s_30fps.mov'
		},
		{
			attr0: '7MB',
			attr1: '1280x720 (720p)',
			attr2: '7s',
			attr3: '30fps',
			file: 'mocksample_mov_7MB_1280x720_720p_7s_30fps.mov'
		},
		{
			attr0: '19MB',
			attr1: '1920x1080 (1080p)',
			attr2: '7s',
			attr3: '30fps',
			file: 'mocksample_mov_19MB_1920x1080_1080p_7s_30fps.mov'
		},
		{
			attr0: '14MB',
			attr1: '2560x1440 (2k)',
			attr2: '7s',
			attr3: '30fps',
			file: 'mocksample_mov_14MB_2560x1440_2k_7s_30fps.mov'
		},
		{
			attr0: '21MB',
			attr1: '3840x2160 (4k)',
			attr2: '7s',
			attr3: '30fps',
			file: 'mocksample_mov_21MB_3840x2160_4k_7s_30fps.mov'
		},
		{
			attr0: '634KB',
			attr1: '240x426 (240p)',
			attr2: '4s',
			attr3: '30fps',
			file: 'mocksample_mov_634KB_240x426_240p_4s_30fps.mov'
		},
		{
			attr0: '1MB',
			attr1: '360x640 (360p)',
			attr2: '4s',
			attr3: '30fps',
			file: 'mocksample_mov_1MB_360x640_360p_4s_30fps.mov'
		},
		{
			attr0: '2MB',
			attr1: '480x854 (480p)',
			attr2: '4s',
			attr3: '30fps',
			file: 'mocksample_mov_2MB_480x854_480p_4s_30fps.mov'
		},
		{
			attr0: '5MB',
			attr1: '720x1280 (720p)',
			attr2: '4s',
			attr3: '30fps',
			file: 'mocksample_mov_5MB_720x1280_720p_4s_30fps.mov'
		},
		{
			attr0: '5MB',
			attr1: '1080x1920 (1080p)',
			attr2: '4s',
			attr3: '30fps',
			file: 'mocksample_mov_5MB_1080x1920_1080p_4s_30fps.mov'
		},
		{
			attr0: '9MB',
			attr1: '1440x2560 (2k)',
			attr2: '4s',
			attr3: '30fps',
			file: 'mocksample_mov_9MB_1440x2560_2k_4s_30fps.mov'
		},
		{
			attr0: '13MB',
			attr1: '2180x3840 (4k)',
			attr2: '4s',
			attr3: '30fps',
			file: 'mocksample_mov_13MB_2180x3840_4k_4s_30fps.mov'
		}
	];

	const faqs = [
		{
			question: 'What is an MOV file?',
			answer:
				'MOV is a multimedia container file format developed by Apple and commonly used for storing video, audio, and text. It is the native format for QuickTime and is widely supported by macOS and iOS devices. MOV files can contain various types of data, including video and audio streams, subtitles, and chapter information.'
		},
		{
			question: 'What are the advantages of using MOV files?',
			answer:
				'MOV files offer high quality and compatibility with Apple devices and software. They are also versatile and can accommodate different codecs, making them suitable for a wide range of video editing and playback applications.'
		},
		{
			question: 'What are MIME types?',
			answer:
				'MIME stands for Multipurpose Internet Mail Extension. MIME types are labels that identify the format of a file, allowing web browsers and servers to understand what kind of data they are dealing with. For MOV files, the correct MIME type is "video/quicktime".'
		},
		{
			question: 'What resolutions and file sizes do your sample videos come in?',
			answer:
				"Our free MOV sample videos come in a variety of resolutions and file sizes to suit your needs. We offer options ranging from 320x240 at 500kB to 720x480 at 1.5MB. We'll be continuously adding more options, so check back for the latest selection."
		},
		{
			question: 'Can I use these sample videos in my commercial projects?',
			answer:
				'Absolutely! Our free MOV sample videos are intended for commercial use as well. Feel free to download and utilize them in your projects without any licensing restrictions.'
		},
		{
			question: 'Where can I learn more about MOV formats and codecs?',
			answer: `You can find detailed information about the MOV format and its codecs on Apple's developer documentation and various online resources. Some relevant terms to search for include "QuickTime file format", "H.264 codec", and "AAC codec".`
		},
		{
			question: 'How can I play or edit MOV files?',
			answer:
				'MOV files can be played using QuickTime Player, VLC Media Player, and other media players that support the format. For editing MOV files, you can use video editing software like Final Cut Pro, Adobe Premiere Pro, or iMovie.'
		}
	];

	const metaTitle = 'Sample MOV Files Free Download | MockSample';
	const metaDescription =
		'Download free, royalty-free MOV video samples for testing and development. Explore our collection of short video clips in various resolutions and file sizes.';
	const metaKeywords =
		'mov samples, free mov files, sample videos, test videos, video samples, royalty-free videos, mov clips, video testing, video development, mock videos';
	const title = 'Sample MOV Files Free Download';
	const description = `Download free, royalty-free <strong>MOV video samples</strong> in various sizes and resolutions to fit your project's needs. Choose from a wide range of short video clips in different resolutions and file sizes. These samples are perfect for testing video players, developing software and websites, or creating mockups and prototypes. Get started now and download your free MOVs!`;

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
