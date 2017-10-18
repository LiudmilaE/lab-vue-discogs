<template>
	<div>
		<div class="field has-addons">
			<div class="control">
				<input class="input" type="text" placeholder="Find a repository" v-model="query">
			</div>
			<div class="control">
				<a class="button is-info" @click="search">
					Search
				</a>
			</div>
		</div>
		<thumbnails-list :artists="artists"></thumbnails-list>
	</div>
</template>

<script>
	import ThumbnailsList from '@/components/ThumbnailsList'
	import { searchArtists } from '@/api'

	export default {
		data () {
			return {
				artists: [],
				query: ''
			}
		},
		components: {
			ThumbnailsList
		},
		methods: {
			search () {
				searchArtists(this.query).then( artists => {
					if (artists) {
						this.artists = artists;
					} else {
						this.$router.push('/');
					}
				});
			}
		}
	}
</script>