<template>
  <div class="articles">
    <h1>rotorink</h1>
    <p>betting, dfs hockey lineups and prospect articles</p>
    <div class="posts">
      <div class="loading" v-if="loading">Loading...</div>
      <div class="container">
        <div class="content" v-if="posts">
          <div v-for="post in posts" class="post-item" :key="post._id">
            <!-- <router-link :to="{name: 'Post', params: { slug } }"> -->
            <router-link :to="`/blog/${post.slug.current}`">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  v-if="post.image"
                  class="w-full"
                  :src="imageUrlFor(post.image).width(480)"
                  alt="hockey post image"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{{ post.title }}</div>
                  <p class="text-gray-700 text-base">
                    {{ post.excerpt }}
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >#nhlbetting</span
                  >
                  <span
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >#nhldfs</span
                  >
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sanity from "../client";
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);

const query = `*[_type == "post"]{
  _id,
  title,
  slug,
  excerpt,
  "image": mainImage{
  asset->{
  _id,
  url
}
},
}[0...50]`;

export default {
  name: "Blog",
  data() {
    return {
      loading: true,
      posts: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.error = this.post = null;
      this.loading = true;
      sanity.fetch(query).then(
        (posts) => {
          this.loading = false;
          this.posts = posts;
        },
        (error) => {
          this.error = error;
        }
      );
    },
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
  },
};
</script>

<style scoped>
.articles h1 {
  text-align: center;
}
.container {
  margin: 0 auto;
  max-width: 80em;
  width: 100%;
}
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.post-item {
  box-sizing: border-box;
  margin: 1rem;
}
</style>