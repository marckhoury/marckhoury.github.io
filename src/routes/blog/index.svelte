<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
    .post {
        display: flex;
        flex-direction: row;
        align-items: baseline;
        margin-bottom: 2rem;
    }
    .date {
        width: 8rem;
        margin-right: 1rem;
        flex-grow: 1;
    }
    .text-base {
        font-size: 1rem;
    }
    .font-bold {
        font-weight: 700;
    }
    .font-light {
        font-weight: 300;
    }
    .no-underline {
        text-decoration: none;
    }
    .text-sm {
        font-size: .875rem;
    }
    .w-full {
        width: 100%
    }
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<ul>
	{#each posts as post}
		<div class="post">
            <div class="date text-sm"> {post.date} </div>
            <div class="w-full">
                <h2 class="text-base font-bold"> 
                    <a class="no-underline" rel='prefetch' href='blog/{post.slug}'>{post.title}</a> 
                </h2>
                {#if post.description.length !== 0}
                <div class="font-light text-sm"> 
                    {post.description}
                </div>
                {/if}
            </div>
        </div>
	{/each}
</ul>