<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Audio Files',
		parentSlug: '/sample-audio-files',
		title: 'AAC'
	};

	const files = [
		{
			attr0: '320kbps',
			attr1: '2.2MB',
			attr2: '30s',
			downloadUrl: '/mocksample_aac_320kbps_2_2MB_30s.aac'
		},
		{
			attr0: '128kbps',
			attr1: '880kB',
			attr2: '30s',
			downloadUrl: '/mocksample_aac_128kbps_880kB_30s.aac'
		},
		{
			attr0: '64kbps',
			attr1: '440kB',
			attr2: '30s',
			downloadUrl: '/mocksample_aac_64kbps_440kB_30s.aac'
		}
	];

	const faqs = [
		{
			question: 'What is an AAC file?',
			answer:
				'AAC (Advanced Audio Coding) is a lossy audio compression format that offers high-quality audio at lower bitrates compared to older formats like MP3. It is commonly used for online music distribution, streaming services, and digital audio players.'
		},
		{
			question: 'What are the advantages of using AAC files?',
			answer:
				'AAC files provide excellent audio quality while maintaining relatively small file sizes. They are also widely supported by various devices and platforms, including Apple products, Android devices, and many media players.'
		},
		{
			question: 'What are the different bitrates available for AAC files?',
			answer:
				'AAC files can be encoded at various bitrates, typically ranging from 32kbps to 320kbps. Higher bitrates generally result in better audio quality but larger file sizes. The choice of bitrate depends on the specific needs of the application and the desired balance between quality and size.'
		},
		{
			question: 'What are MIME types?',
			answer:
				'MIME stands for Multipurpose Internet Mail Extension. MIME types are labels that identify the format of a file, allowing web browsers and servers to understand what kind of data they are dealing with. For AAC files, the common MIME type is "audio/aac".'
		},
		{
			question: 'What bitrates and file sizes do your sample audios come in?',
			answer:
				"Our free AAC sample audios come in a variety of bitrates and file sizes to suit your needs. We offer options ranging from 64kbps at 440kB to 320kbps at 2.2MB. We'll be continuously adding more options, so check back for the latest selection."
		},
		{
			question: 'Can I use these sample audios in my commercial projects?',
			answer:
				'Absolutely! Our free AAC sample audios are intended for commercial use as well. Feel free to download and utilize them in your projects without any licensing restrictions.'
		},
		{
			question: 'Where can I learn more about AAC formats and codecs?',
			answer: `You can find detailed information about the AAC format and its codecs on the official MPEG website and various online resources. Some relevant terms to search for include "Advanced Audio Coding", "AAC compression", and "AAC encoding".`
		},
		{
			question: 'How can I play or edit AAC files?',
			answer:
				'AAC files can be played using a wide range of media players, including iTunes, VLC Media Player, Windows Media Player (with appropriate codecs), and many others. For editing AAC files, you can use audio editing software like Audacity, Adobe Audition, or other compatible tools that support AAC.'
		}
	];

	const metaTitle = 'Sample AAC Files Free Download | MockSample';
	const metaDescription =
		'Download free, royalty-free AAC audio samples for testing and development. Explore our collection of short audio clips in various bitrates and file sizes.';
	const metaKeywords =
		'aac samples, free aac files, sample audios, test audios, audio samples, royalty-free audios, aac clips, audio testing, audio development, mock audios';
	const title = 'Sample AAC Files Free Download';
	const description = `Download free, royalty-free <strong>AAC audio samples</strong> in various bitrates and file sizes to fit your project's needs. Choose from a wide range of short audio clips in different bitrates and file sizes. These samples are perfect for testing audio players, developing software and websites, or creating mockups and prototypes. Get started now and download your free AACs!`;

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
