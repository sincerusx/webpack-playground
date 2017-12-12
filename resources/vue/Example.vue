<template>
	<div class="container">
		<div class="row">
			<div class="col-md-8 col-md-offset-2">
				<div class="panel panel-default">
					<h3 class="panel-heading">Example Vue Component</h3>

					<div class="panel-body">
						I am a Single File Component and I am rendered with Vue.js
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		mounted() {
			console.log( 'Component mounted.' )
		}
	}
</script>
