<template>
<div>
<div class="header">
  <img src="@/assets/rotorink.jpeg" alt="hockey" style="width:100%;">
</div>

<div class="container mx-auto">
    <div class="header-group items-center justify-center py-2 px-4 sm:px-2 lg:px-2">
     <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">rotorink newsletter 🏒</h2>
     <h2 class="text-sm tracking-tight text-gray-500">coming soon</h2>
    <div class="max-w-md w-full form-container">
      <form id="newsletterForm" method="post" name="newsletter" ref="formTag" data-netlify="true" action="/" class="mt-2 space-y-3">
        <!-- <input class="hidden" name="hpfield" value="newsletter" /> -->
        <div class="rounded-md shadow-sm">
          <div>
            <label for="email" class="sr-only">Email address</label>
            <input v-model="email" id="email" name="email" type="email" autocomplete="email" class="cursor-not-allowed appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
        </div>
        <div>
          <button @click.prevent="sendForm" type="submit" class="cursor-not-allowed group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Get Newsletter
          </button>
        </div>
      </form>
    </div>
  </div>
  </div>

  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
        email: ''
    };
  },
  methods: {
		async sendForm() {
			let formName = this.$refs.formTag.getAttribute('name');
		
			let formData = new FormData();
			formData.append('email', this.email);
			formData.append('form-name', formName);

			let resp = await fetch('https://rotorink0.netlify.app/#/contact', {
				method:'POST',
				body:formData
			});
			alert('Submitted!');


		}
	}
 /* 
            .then(data => console.log(data))
            .catch(error => console.log(error))
            .then(document.getElementById("newsletterForm").innerHTML = `
                <div>
                    Thanks for subscribing to the rotorink hockey metaverse newsletter. 
                </div>
            `)
        }
  } */
};
</script>

<style scoped>
.header {
  position: relative;
  text-align: center;
  color: white;
  height: auto;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  font-size: 30px;
  width: 100%;
  margin-bottom: 2rem;
}

.header-group {
    display: flex; 
    flex-direction: column;
}

/* for positioning div and text over header image */
/* .centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
} */

</style>