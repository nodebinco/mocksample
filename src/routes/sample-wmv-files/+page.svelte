<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Video Files',
		parentSlug: '/sample-video-files',
		title: 'WMV'
	};

	const files = [
		{
			attr0: '750kB',
			attr1: '480x270',
			attr2: '30s',
			downloadUrl: '/mocksample_wmv_750kB_480x270_30s.wmv'
		},
		{
			attr0: '800kB',
			attr1: '640x360',
			attr2: '30s',
			downloadUrl: '/mocksample_wmv_800kB_640x360_30s.wmv'
		},
		{
			attr0: '1.5MB',
			attr1: '1280x720',
			attr2: '30s',
			downloadUrl: '/mocksample_wmv_1_5MB_1280x720_30s.wmv'
		},
		{
			attr0: '2.3MB',
			attr1: '1280x720',
			attr2: '30s',
			downloadUrl: '/mocksample_wmv_1_5MB_1280x720_30s.wmv'
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
