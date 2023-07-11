<script lang="ts">
	import type { IPost } from "../../interfaces/Post";

	export let post: IPost;
</script>

<section>
    <h1>{post.title}</h1>
    {post.content}
</section>