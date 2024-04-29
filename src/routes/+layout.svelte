<script>
	import Header from './Header.svelte';
	import '../app.css';
	import logo from '$lib/images/logo.svg';

	const menus = [
		{
			title: 'Video Files',
			slug: '/sample-video-files',
			submenus: [
				{
					title: 'MP4',
					slug: '/sample-mp4-video-files-download'
				},
				{
					title: 'FLV',
					slug: '/sample-flv-video-files-download'
				},
				{
					title: 'AVI',
					slug: '/sample-avi-video-files-download'
				},
				{
					title: 'MOV',
					slug: '/sample-mov-video-files-download'
				},
				{
					title: 'OGG',
					slug: '/sample-ogg-video-files-download'
				},
				{
					title: 'WMV',
					slug: '/sample-wmv-video-files-download'
				},
				{
					title: 'WEBM',
					slug: '/sample-webm-video-files-download'
				},
				{
					title: 'MKV',
					slug: '/sample-mkv-video-files-download'
				},
				{
					title: '3GP',
					slug: '/sample-3gp-video-files-download'
				}
			]
		},
		{
			title: 'Audio Files',
			slug: '/sample-audio-files',
			submenus: [
				{
					title: 'MP3',
					slug: '/sample-mp3-files'
				},
				{
					title: 'WAV',
					slug: '/sample-wav-files'
				},
				{
					title: 'OGG',
					slug: '/sample-ogg-files'
				},
				{
					title: 'M4A',
					slug: '/sample-m4a-files'
				},
				{
					title: 'FLAC',
					slug: '/sample-flac-files'
				},
				{
					title: 'WMA',
					slug: '/sample-wma-files'
				},
				{
					title: 'AAC',
					slug: '/sample-aac-files'
				}
			]
		},
		{
			title: 'Document Files',
			slug: '/sample-document-files',
			submenus: [
				{
					title: 'PDF',
					slug: '/sample-pdf-files'
				},
				{
					title: 'PDF',
					slug: '/sample-pdf-files'
				},
				{
					title: 'CSV',
					slug: '/sample-csv-files'
				},
				{
					title: 'DOC',
					slug: '/sample-doc-files'
				},
				{
					title: 'DOCX',
					slug: '/sample-docx-files'
				},
				{
					title: 'PPT',
					slug: '/sample-ppt-files'
				},
				{
					title: 'XLS',
					slug: '/sample-xls-files'
				},
				{
					title: 'XLSX',
					slug: '/sample-xlsx-files'
				},
				{
					title: 'ODT',
					slug: '/sample-odt-files'
				},
				{
					title: 'PPS',
					slug: '/sample-pps-files'
				},
				{
					title: 'TXT',
					slug: '/sample-txt-files'
				}
			]
		},
		{
			title: 'Image Files',
			slug: '/sample-image-files',
			submenus: [
				{
					title: 'JPG',
					slug: '/sample-jpg-files'
				},
				{
					title: 'PNG',
					slug: '/sample-png-files'
				},
				{
					title: 'GIF',
					slug: '/sample-gif-files'
				},
				{
					title: 'SVG',
					slug: '/sample-svg-files'
				},
				{
					title: 'TIFF',
					slug: '/sample-tiff-files'
				},
				{
					title: 'ICO',
					slug: '/sample-ico-files'
				},
				{
					title: 'WEBP',
					slug: '/sample-webp-files'
				},
				{
					title: 'AVIF',
					slug: '/sample-avif-files'
				},
				{
					title: 'BMP',
					slug: '/sample-bmp-files'
				}
			]
		},
		{
			title: 'Other Files',
			slug: '/sample-image-files',
			submenus: [
				{
					title: 'JSON',
					slug: '/sample-json-files'
				},
				{
					title: 'XML',
					slug: '/sample-xml-files'
				},
				{
					title: 'HTML',
					slug: '/sample-html-files'
				},
				{
					title: 'ZIP',
					slug: '/sample-zip-files'
				},
				{
					title: 'RAR',
					slug: '/sample-rar-files'
				},
				{
					title: 'TAR GZ',
					slug: '/sample-tar-gz-files'
				},
				{
					title: 'PSD',
					slug: '/sample-psd-files'
				},
				{
					title: 'AI',
					slug: '/sample-ai-files'
				}
			]
		}
	];
</script>

<div class="app">
	<Header />

	<div class="flex flex-col-reverse lg:flex-row">
		<div class="w-full lg:w-1/5 p-6 mt-0 lg:mt-8">
			<ul
				class="list-none bg-gray-50 border border-gray-400 border-dashed rounded-lg py-3 grid grid-cols-2 lg:grid-cols-1"
			>
				{#each Object.entries(menus) as [key, value]}
					<li class="mt-4">
						<strong class="text-gray-900">{value.title}</strong>
						<ul class="list-none mt-2">
							{#each Object.entries(value.submenus) as [k, v]}
								<li class="-ml-5 py-1">
									<a data-sveltekit-preload-data="tap" href={v.slug}>{v.title}</a>
								</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ul>
		</div>
		<main class="p-6">
			<slot />
		</main>
	</div>

	<footer class="footer py-6 bg-base-200 text-base-content">
		<div class="text-center px-6">
			<a class="font-bold text-xl" data-sveltekit-preload-data="tap" href="/">MockSample</a>
			<p>
				Copyright © 2024 Powered by <a href="/">MockSample.com</a>
			</p>
		</div>
		<div>
			<ul class="whitespace-nowrap inline-block space-x-4">
				<li class="inline-block"><a data-sveltekit-preload-data="tap" href="/blog">Blog</a></li>
				<li class="inline-block">
					<a data-sveltekit-preload-data="tap" href="/about">About Us</a>
				</li>
				<li class="inline-block">
					<a data-sveltekit-preload-data="tap" href="/contact">Contact Us</a>
				</li>
				<li class="inline-block">
					<a data-sveltekit-preload-data="tap" href="/privacy-policy">Privacy Policy</a>
				</li>
			</ul>
		</div>
	</footer>
</div>
