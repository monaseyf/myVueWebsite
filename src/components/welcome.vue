<template>
	
	<div id="welcome">
	<v-container>
		<div class="titlesBack">
				
				<vue-typed-js :strings="['Hi my name is mona seyf', 'I am an architecture an UI/UX designer']">
 				 <h1 class="typing"></h1>
				</vue-typed-js>
				
			</div>	
	</v-container>
	</div>
</template>

<script>
export default {
	data: () => ({
	
	})
}
</script>
<style scoped>
#welcome {
    width: 100%;
    min-height: 100vh;
    background-color: rgb(26, 26, 26);
    background-image: url("../images/blackBackMona2.jpg");
    background-position: right center;
    background-size: cover;
}
h1 {
	color: white;
}
.titlesBack{
	padding-top: 20%;
}
</style>