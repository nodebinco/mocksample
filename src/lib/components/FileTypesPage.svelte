<script>
  export let data;
</script>

<svelte:head>
  <title>{data.metaTitle}</title>
  <meta name="description" content={data.metaDescription} />
  <meta name="keywords" content={data.metaKeywords} />
</svelte:head>

<section class="text-center max-w-5xl mx-auto">
  <div class="text-sm breadcrumbs">
    <ul class="-ml-8">
      <li><a data-sveltekit-preload-data="hover" href="/">Home</a></li>
      <li class="text-gray-500">{data.breadcrumb.title}</li>
    </ul>
  </div>

  <h1>{data.title}</h1>
  <p class="mt-2 text-left">{@html data.description}</p>

  <div class="overflow-x-auto mt-4 pb-4">
    <table class="table table-zebra md:table-lg">
      <tbody>
        {#each data.files as file, i}
          <tr>
            <th>{i + 1}</th>
            <td><a data-sveltekit-preload-data="hover" href={file.slug}>{file.title}</a></td>
            <td
              ><a
                data-sveltekit-preload-data="hover"
                class="btn rounded-full btn-secondary md:text-base"
                href={file.slug}>View Files</a
              ></td
            >
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>
