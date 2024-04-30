<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Video Files',
		parentSlug: '/sample-video-files',
		title: 'WEBM'
	};

	const files = [
		{
			attr0: '750kB',
			attr1: '480x270',
			attr2: '30s',
			downloadUrl: '/mocksample_webm_750kB_480x270_30s.webm'
		},
		{
			attr0: '800kB',
			attr1: '640x360',
			attr2: '30s',
			downloadUrl: '/mocksample_webm_800kB_640x360_30s.webm'
		},
		{
			attr0: '1.5MB',
			attr1: '1280x720',
			attr2: '30s',
			downloadUrl: '/mocksample_webm_1_5MB_1280x720_30s.webm'
		},
		{
			attr0: '2.3MB',
			attr1: '1280x720',
			attr2: '30s',
			downloadUrl: '/mocksample_webm_1_5MB_1280x720_30s.webm'
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
		title,
		description,
		breadcrumb,
		faqs
	};
</script>

<FileDownloadPage {data} />
