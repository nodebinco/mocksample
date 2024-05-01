<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Video Files',
		parentSlug: '/sample-video-files',
		title: 'MP4'
	};

	const files = [
		{
			attr0: '48MB',
			attr1: '3840x2160',
			attr2: '15s',
			attr3: '50fps',
			file: 'mocksample_mp4_48MB_3840x2160_15s_50fps.mp4'
		},
		{
			attr0: '800kB',
			attr1: '640x360',
			attr2: '30s',
			file: '/mocksample_mp4_800kB_640x360_30s.mp4'
		},
		{
			attr0: '1.5MB',
			attr1: '1280x720',
			attr2: '30s',
			file: '/mocksample_mp4_1_5MB_1280x720_30s.mp4'
		},
		{
			attr0: '2.3MB',
			attr1: '1280x720',
			attr2: '30s',
			file: '/mocksample_mp4_1_5MB_1280x720_30s.mp4'
		}
	];

	const faqs = [
		{
			question: 'What is an MP4 file?',
			answer:
				"An MP4 (MPEG-4 Part 14) file is a digital multimedia container format that can store video, audio, subtitles, and other data streams based on ISO/IEC 14496-12:2004. It's widely supported by most video players and devices, making it a popular choice for sharing videos online and offline."
		},
		{
			question: 'What are the advantages of using MP4 files?',
			answer:
				'MP4 files offer several advantages, including efficient compression, support for various codecs (e.g., H.264, AAC), and compatibility with a wide range of devices and platforms. They also allow for metadata embedding and streaming capabilities.'
		},
		{
			question: 'What are MIME types?',
			answer:
				'MIME stands for Multipurpose Internet Mail Extension. MIME types are labels that identify the format of a file, allowing web browsers and servers to understand what kind of data they are dealing with. For MP4 files, the correct MIME type is "video/mp4" or "application/mp4".'
		},
		{
			question: 'What resolutions and file sizes do your sample videos come in?',
			answer:
				"Our free MP4 sample videos come in a variety of resolutions and file sizes to suit your needs. We offer options ranging from 480x270 at 750kB to 1280x720 at 2.3MB. We'll be continuously adding more options, so check back for the latest selection."
		},
		{
			question: 'Can I use these sample videos in my commercial projects?',
			answer:
				'Absolutely! Our free MP4 sample videos are intended for commercial use as well. Feel free to download and utilize them in your projects without any licensing restrictions.'
		},
		{
			question: 'Where can I learn more about MP4 formats and codecs?',
			answer:
				'There are many resources available online to learn more about MP4 formats and codecs. You can search for terms like "MP4 container format", "H.264 codec", or "AAC audio codec" to find detailed information. Additionally, organizations like the Moving Picture Experts Group (MPEG) and the Internet Engineering Task Force (IETF) provide technical specifications and guidelines.'
		},
		{
			question: 'How can I play or edit MP4 files?',
			answer:
				'Most modern media players and video editing software support MP4 files out of the box. Popular options include VLC Media Player, QuickTime Player, Windows Media Player, and video editors like Adobe Premiere Pro, Final Cut Pro, and DaVinci Resolve.'
		}
	];

	const metaTitle = 'Sample MP4 Files Free Download | MockSample';
	const metaDescription =
		'Download free, royalty-free MP4 video samples for testing and development. Explore our collection of short video clips in various resolutions and file sizes.';
	const metaKeywords =
		'mp4 samples, free mp4 files, sample videos, test videos, video samples, royalty-free videos, mp4 clips, video testing, video development, mock videos';
	const title = 'Sample MP4 Files Free Download';
	const description = `Download free, royalty-free <strong>MP4 video samples</strong> in various sizes and resolutions to fit your project's needs. Choose from a wide range of short video clips in different resolutions and file sizes. These samples are perfect for testing video players, developing software and websites, or creating mockups and prototypes. Get started now and download your free MP4s!`;

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
