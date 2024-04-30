<script>
	import FileDownloadPage from '$lib/components/FileDownloadPage.svelte';

	const breadcrumb = {
		parentTitle: 'Video Files',
		parentSlug: '/sample-video-files',
		title: 'MP4'
	};

	const files = [
		{
			attr0: '750kB',
			attr1: '480x270',
			attr2: '30s',
			downloadUrl: '/mocksample_avi_750kB_480x270_30s.mp4'
		},
		{
			attr0: '800kB',
			attr1: '640x360',
			attr2: '30s',
			downloadUrl: '/mocksample_avi_800kB_640x360_30s.mp4'
		},
		{
			attr0: '1.5MB',
			attr1: '1280x720',
			attr2: '30s',
			downloadUrl: '/mocksample_avi_1_5MB_1280x720_30s.mp4'
		},
		{
			attr0: '2.3MB',
			attr1: '1280x720',
			attr2: '30s',
			downloadUrl: '/mocksample_mp4_1_5MB_1280x720_30s.mp4'
		}
	];

	const faqs = [
		{
			question: "What's the mime types",
			answer: 'video/mp4<br/>application/mp4'
		}
	];

	const metaTitle = 'Sample MP4 Files Free Download | MockSample';
	const metaDescription = 'Free Sample Files and Mock Data';
	const title = 'Sample MP4 Files Free Download';
	const description = `<strong>An MP4</strong> file is a file saved in a multimedia container format created by Microsoft. The MP4 format is based on the Resource Interchange File Format (RIFF). The MP4 format is supported by various video players.
Choose the size or resolution and get MP4 video sample file for free.`;

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
