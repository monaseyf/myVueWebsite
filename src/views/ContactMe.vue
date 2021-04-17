<template>
<div class="contactSection">
	<div class="section">
		<h1 class="sectionTitle">Contact Me</h1>
				<v-row class="">
					<v-col lg="5" md="5" sm="12" text-center>
						<p>Tehran, Iran </p>
						<p><span>Monaseyf25 <span>@</span>gmail.com
						</span>
						</p>
						
						<p>+989354365170</p>
					</v-col>
					
					<v-col lg="7" md="7" sm="12">
						<v-form v-model="formValidity">
							<v-row class=" text-center">
								<v-col md="12">
									<v-text-field label="Name" type="text" theme--dark/>	
								</v-col>
								<v-col md="12">
									 <v-text-field label="Email" type="email" v-model="email" :rules="emailRules" required></v-text-field>
								</v-col>
								<v-col md="12">
									<v-text-field label="Subject" type="text"/>
									 <v-textarea  label="Message"></v-textarea>
								</v-col>
							</v-row>
							<v-btn type="submit" color="primary" :disabled="!formValidity">Submit</v-btn>
						</v-form>
					</v-col>
				
					
				</v-row>	
	</div>
</div>
</template>

<script>
export default {
	data: () => ({
		email:'',
		 emailRules: [
      (value) => !!value || "Email is required.",
      (value) => value.indexOf("@") !== 0 || "Email should have a username.",
      (value) => value.includes("@") || "Email should include an @ symbol.",
      (value) =>value.indexOf(".") - value.indexOf("@") > 1 ||
        "Email should contain a valid domain.",
      (value) => value.includes(".") || "Email should include a period symbol.",
      (value) =>
        value.indexOf(".") <= value.length - 3 ||
        "Email should contain a valid domain extension.",
    ],
	formValidity: false,
	})
}
</script>
<style >
.contactSection{
  background-image: url("../images/blackBack.jpg");
    background-size: cover;
    width: 100%;
    min-height: 100vh;
}
</style>