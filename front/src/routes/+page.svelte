<script lang="ts">

	import Hero from "../components/Hero.svelte";
	import PostList from "../components/PostList.svelte";
	import Projects from "../components/Projects.svelte";
	import type { IPost } from "../interfaces/Post";

    const posts: IPost[] = [
        {id: "1", title: "First Post", content: "Hello world!", date: "2023-07-11"},
    ]

</script>
<Hero />
<Projects />
<PostList posts={posts} />
