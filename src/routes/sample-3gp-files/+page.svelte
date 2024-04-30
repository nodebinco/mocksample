<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Video Files',
		parentSlug: '/sample-video-files',
		title: '3GP'
	};

	const files = [
		{
			attr0: '750kB',
			attr1: '480x270',
			attr2: '30s',
			downloadUrl: '/mocksample_3gp_750kB_480x270_30s.3gp'
		},
		{
			attr0: '800kB',
			attr1: '640x360',
			attr2: '30s',
			downloadUrl: '/mocksample_3gp_800kB_640x360_30s.3gp'
		},
		{
			attr0: '1.5MB',
			attr1: '1280x720',
			attr2: '30s',
			downloadUrl: '/mocksample_3gp_1_5MB_1280x720_30s.3gp'
		},
		{
			attr0: '2.3MB',
			attr1: '1280x720',
			attr2: '30s',
			downloadUrl: '/mocksample_3gp_1_5MB_1280x720_30s.3gp'
		}
	];

	const faqs = [
		{
			question: 'What is a 3GP file?',
			answer:
				'3GP (3GPP file format) is a multimedia container format designed for transmitting audio and video files on 3G mobile phones. It is a simplified version of the MPEG-4 Part 14 (MP4) format, optimized for low bandwidth and storage limitations of mobile devices.'
		},
		{
			question: 'What are the advantages of using 3GP files?',
			answer:
				'3GP files are highly compressed, making them ideal for mobile devices with limited storage and bandwidth. They are also widely compatible with most 3G-enabled mobile phones and other portable devices. Additionally, 3GP supports various audio and video codecs, allowing for flexibility in content delivery.'
		},
		{
			question: 'What are MIME types?',
			answer:
				'MIME stands for Multipurpose Internet Mail Extension. MIME types are labels that identify the format of a file, allowing web browsers and servers to understand what kind of data they are dealing with. For 3GP files, the common MIME types include "video/3gpp" and "audio/3gpp", depending on the content.'
		},
		{
			question: 'What resolutions and file sizes do your sample videos come in?',
			answer:
				"Our free 3GP sample videos come in a variety of resolutions and file sizes to suit your needs. We offer options ranging from 176x144 at 200kB to 640x480 at 1.5MB. We'll be continuously adding more options, so check back for the latest selection."
		},
		{
			question: 'Can I use these sample videos in my commercial projects?',
			answer:
				'Absolutely! Our free 3GP sample videos are intended for commercial use as well. Feel free to download and utilize them in your projects without any licensing restrictions.'
		},
		{
			question: 'Where can I learn more about 3GP formats and codecs?',
			answer:
				'You can find detailed information about the 3GP format and its codecs on the official 3GPP website and various online resources. Some relevant terms to search for include "3GPP file format", "H.263 video codec", and "AMR audio codec".'
		},
		{
			question: 'How can I play or edit 3GP files?',
			answer:
				'3GP files can be played using media players that support the format, such as VLC Media Player, QuickTime Player, and many mobile phone media players. For editing 3GP files, you can use video editing software like Adobe Premiere Pro or Final Cut Pro, or specialized mobile video editing apps.'
		}
	];

	const metaTitle = 'Sample 3GP Files Free Download | MockSample';
	const metaDescription =
		'Download free, royalty-free 3GP video samples for testing and development. Explore our collection of short video clips in various resolutions and file sizes.';
	const metaKeywords =
		'3gp samples, free 3gp files, sample videos, test videos, video samples, royalty-free videos, 3gp clips, video testing, video development, mock videos';
	const title = 'Sample 3GP Files Free Download';
	const description = `Download free, royalty-free <strong>3GP video samples</strong> in various sizes and resolutions to fit your project's needs. Choose from a wide range of short video clips in different resolutions and file sizes. These samples are perfect for testing video players, developing software and websites, or creating mockups and prototypes. Get started now and download your free 3GPs!`;

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
