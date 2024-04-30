<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Audio Files',
		parentSlug: '/sample-audio-files',
		title: 'WMA'
	};

	const files = [
		{
			attr0: '320kbps',
			attr1: '2.1MB',
			attr2: '30s',
			downloadUrl: '/mocksample_wma_320kbps_2_1MB_30s.wma'
		},
		{
			attr0: '128kbps',
			attr1: '830kB',
			attr2: '30s',
			downloadUrl: '/mocksample_wma_128kbps_830kB_30s.wma'
		},
		{
			attr0: '64kbps',
			attr1: '420kB',
			attr2: '30s',
			downloadUrl: '/mocksample_wma_64kbps_420kB_30s.wma'
		}
	];

	const faqs = [
		{
			question: 'What is a WMA file?',
			answer:
				'WMA (Windows Media Audio) is a series of audio codecs and their corresponding audio coding formats developed by Microsoft. It is a proprietary format primarily associated with Windows Media Player and is designed for efficient audio compression and streaming.'
		},
		{
			question: 'What are the advantages of using WMA files?',
			answer:
				'WMA files offer good audio quality with relatively small file sizes, making them suitable for online streaming and storage. They also support various bitrates and features like digital rights management (DRM) for copyright protection.'
		},
		{
			question: 'What are the different types of WMA formats?',
			answer:
				'There are several types of WMA formats, including WMA, WMA Pro, WMA Lossless, and WMA Voice. Each format has different characteristics and compression levels, catering to various audio quality and file size requirements.'
		},
		{
			question: 'What are MIME types?',
			answer:
				'MIME stands for Multipurpose Internet Mail Extension. MIME types are labels that identify the format of a file, allowing web browsers and servers to understand what kind of data they are dealing with. For WMA files, the common MIME types include "audio/x-ms-wma" and "audio/wma".'
		},
		{
			question: 'What bitrates and file sizes do your sample audios come in?',
			answer:
				"Our free WMA sample audios come in a variety of bitrates and file sizes to suit your needs. We offer options ranging from 64kbps at 420kB to 320kbps at 2.1MB. We'll be continuously adding more options, so check back for the latest selection."
		},
		{
			question: 'Can I use these sample audios in my commercial projects?',
			answer:
				'Absolutely! Our free WMA sample audios are intended for commercial use as well. Feel free to download and utilize them in your projects without any licensing restrictions.'
		},
		{
			question: 'Where can I learn more about WMA formats and codecs?',
			answer: `You can find detailed information about the WMA format and its codecs on Microsoft's official documentation and various online resources. Some relevant terms to search for include "Windows Media Audio", "WMA codecs", and "WMA specifications".`
		},
		{
			question: 'How can I play or edit WMA files?',
			answer:
				'WMA files can be played using media players that support the format, such as Windows Media Player, VLC Media Player, and other compatible software. For editing WMA files, you may need specialized audio editing software that supports the format or conversion to a more widely editable format like WAV or MP3.'
		}
	];

	const metaTitle = 'Sample WMA Files Free Download | MockSample';
	const metaDescription =
		'Download free, royalty-free WMA audio samples for testing and development. Explore our collection of short audio clips in various bitrates and file sizes.';
	const metaKeywords =
		'wma samples, free wma files, sample audios, test audios, audio samples, royalty-free audios, wma clips, audio testing, audio development, mock audios';
	const title = 'Sample WMA Files Free Download';
	const description = `Download free, royalty-free <strong>WMA audio samples</strong> in various bitrates and file sizes to fit your project's needs. Choose from a wide range of short audio clips in different bitrates and file sizes. These samples are perfect for testing audio players, developing software and websites, or creating mockups and prototypes. Get started now and download your free WMAs!`;

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
