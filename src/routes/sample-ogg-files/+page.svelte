<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Video Files',
		parentSlug: '/sample-video-files',
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
				'OGG files offer several benefits, including efficient compression, excellent audio and video quality, and royalty-free licensing. They are also supported by a wide range of media players and web browsers, making them a versatile choice for multimedia content.'
		},
		{
			question: 'What are MIME types?',
			answer:
				'MIME stands for Multipurpose Internet Mail Extension. MIME types are labels that identify the format of a file, allowing web browsers and servers to understand what kind of data they are dealing with. For OGG video files, the correct MIME type is "video/ogg".'
		},
		{
			question: 'What resolutions and file sizes do your sample videos come in?',
			answer:
				"Our free OGG sample videos come in a variety of resolutions and file sizes to suit your needs. We offer options ranging from 320x240 at 500kB to 720x480 at 1.5MB. We'll be continuously adding more options, so check back for the latest selection."
		},
		{
			question: 'Can I use these sample videos in my commercial projects?',
			answer:
				'Absolutely! Our free OGG sample videos are intended for commercial use as well. Feel free to download and utilize them in your projects without any licensing restrictions.'
		},
		{
			question: 'Where can I learn more about OGG formats and codecs?',
			answer: `You can find detailed information about the OGG format and its codecs on the official OGG website and various online resources. Some relevant terms to search for include "OGG container format", "Theora video codec", and "Vorbis audio codec".`
		},
		{
			question: 'How can I play or edit OGG files?',
			answer:
				'OGG files can be played using a variety of media players, such as VLC Media Player, Miro, and most web browsers with HTML5 video support. For editing OGG files, you can use video editing software like OpenShot, Shotcut, or Avidemux.'
		}
	];

	const metaTitle = 'Sample OGG Files Free Download | MockSample';
	const metaDescription =
		'Download free, royalty-free OGG video samples for testing and development. Explore our collection of short video clips in various resolutions and file sizes.';
	const metaKeywords =
		'ogg samples, free ogg files, sample videos, test videos, video samples, royalty-free videos, ogg clips, video testing, video development, mock videos';
	const title = 'Sample OGG Files Free Download';
	const description = `Download free, royalty-free <strong>OGG video samples</strong> in various sizes and resolutions to fit your project's needs. Choose from a wide range of short video clips in different resolutions and file sizes. These samples are perfect for testing video players, developing software and websites, or creating mockups and prototypes. Get started now and download your free OGGs!`;

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
