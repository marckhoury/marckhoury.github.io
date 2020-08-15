<script>
    import Twitter from 'svelte-icons/fa/FaTwitter.svelte';
    import Github from 'svelte-icons/fa/FaGithub.svelte';
    import Linkedin from 'svelte-icons/fa/FaLinkedin.svelte';
    import Twitch from 'svelte-icons/fa/FaTwitch.svelte';
	export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(212,70,56,0.1);
		font-weight: 300;
		padding: 0 1em;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(212,70,56);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

    .font-bold {
        font-weight: 700;
    }   
 
    .icon {
        width: 32px;
        height: 32px;
    }
    
    .twitter {
        color: #1DA1F2;
    }
    .linkedin {
        color: #2867B2;
    }
    .twitch {
        color: #6441A5;
    } 
</style>

<nav>
	<ul>
		<li class="font-bold"><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
        <li class="font-bold"><a aria-current="{segment === 'publications' ? 'page' : undefined}" href="publications">publications</a></li>
        <li class="font-bold"><a aria-current="{segment === 'hobbies' ? 'page' : undefined}" href="hobbies">hobbies</a></li>
		<li class="font-bold"><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>
    </ul>
    <ul>
		<li><a href="https://twitter.com/marckkhoury"><div class="icon twitter"><Twitter/></div></a></li>
		<li><a href="https://github.com/marckhoury"><div class="icon"><Github/></div></a></li>
        <li><a href="https://www.linkedin.com/in/marckhoury/"><div class="icon linkedin"><Linkedin/></div></a></li>
        <li><a href="https://www.twitch.tv/thinkswithtwitch"><div class="icon twitch"><Twitch/></div></a></li>
    </ul>
</nav>
