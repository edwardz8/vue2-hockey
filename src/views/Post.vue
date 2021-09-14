<template>
  <div class="container-fluid post-container">
    <div class="loading" v-if="loading">Loading...</div>
    <div v-if="post">
      <div class="content">
        <h1>{{ post.title }}</h1>
        <img
          v-if="post.image"
          :src="imageUrlFor(post.image).width(440)"
          class="post-image"
        />
        <h6>Provided by: {{ post.name }}</h6>
        <p>{{ post.excerpt }}</p>
      </div>
      <div v-html="overviewHtml" class="body mx-1">
        <p class="text">{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import sanity from "../client";
import blocksToHtml from "@sanity/block-content-to-html";
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
      overviewHtml: {},
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

      const serializers = {
        types: {
          summaries: (props) => {
            const h = blocksToHtml.h;
            if (!props.node.summaries) {
              return false;
            }
            const summariesArray = props.node.summaries.map((summary) => {
              return h("div", null, [
                h("p", null, summary.summary),
                h("span", null, "—"),
                h("a", { href: summary.url }, summary.author),
              ]);
            });
            return h("div", [
              h("h1", null, props.node.caption),
              h("div", null, summariesArray),
            ]);
          },
        },
      };

      sanity.fetch(query, { slug: this.$route.params.slug }).then(
        (post) => {
          this.loading = false;
          this.post = post;
          // this.blocks = post.body;
          this.overviewHtml = blocksToHtml({
            blocks: this.post.body,
            serializers: serializers,
            dataset: sanity.clientConfig.dataset,
            projectId: sanity.clientConfig.projectId,
          });
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
.post-container {
  margin-left: 1rem;
  margin-right: 1rem;
}
.content {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 42em;
}
.body {
  margin: 0 auto;
  max-width: 42em;
  margin-bottom: 20rem;
  margin-top: 5rem;
  text-align: left;
  font-size: 18px;
}
.text {
  margin-top: 1rem !important;
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

.post-image {
  border-radius: 8px;
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
    margin: 1em 1rem;
  }
}
</style>
