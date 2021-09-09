<template>
  <div class="container-fluid">
    <div class="loading" v-if="loading">Loading...</div>
    <div class="content" v-if="post">
      <h1>{{ post.title }}</h1>
      <img v-if="post.image" :src="imageUrlFor(post.image).width(440)" />
      <h6>Provided by: {{ post.name }}</h6>
      <p>{{ post.excerpt }}</p>
     <!-- <block-content :blocks="blocks" /> -->
    </div>
  </div>
</template>

<script>
import sanity from "../client";
// import BlockContent from 'sanity-blocks-vue-component'
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);

const query = `*[slug.current == $slug] {
  _id,
  title,
  slug,
  body,
  excerpt,
 "image": mainImage{
  asset->{
  _id,
  url
}
},
"name":author->name,
"authorImage":author->image
}[0]
`;

export default {
  name: "Post",
 // components: { BlockContent },
  data() {
    return {
      loading: true,
      post: [],
      blocks: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
    fetchData() {
      this.error = this.post = null;
      this.loading = true;

      sanity.fetch(query, { slug: this.$route.params.slug }).then(
        (post) => {
          this.loading = false;
          this.post = post;
          this.blocks = post.body;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 42em;
}
.comments-section {
  display: flex;
  flex-direction: column;
}
textarea {
  margin-top: 1rem;
  margin-bottom: 2rem;
}
h1 {
  text-align: center;
}
h6 {
  color: #aaa;
  padding: 1em;
}
img {
  max-width: 100%;
}

hr {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(66, 185, 131, 1),
    rgba(0, 0, 0, 0)
  );
  border: 0;
  height: 2px;
  margin: 40px auto;
}

blockquote {
  border-left: 4px solid #cccccc;
  font-size: 1.4em;
  font-style: italic;
  margin: 2rem 0;
  padding-left: 2rem;
  padding-right: 2rem;
}

.content h1 {
  font-size: 3em;
  margin: 1em 0;
}

@media (max-width: 1020px) {
  h1 {
    font-size: 3em;
  }

  .content h1 {
    font-size: 2.4em;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 14px;
  }

  p,
  ul,
  ol {
    font-size: 1.2rem;
    margin: 1em 0;
  }
}
</style>
