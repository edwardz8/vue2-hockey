<template>
  <div>
    <component :blok="story.content" :is="story.content.component"></component>
  </div>
</template>

<script>
// 1. Require the Storyblok client
import StoryblokClient from "storyblok-js-client";

// 2. Set your token - you will be able to create a new space later.
const token = "XbOJswBKB1a3xWzCrQ5NEwtt";

// 3. Initialize the client with the preview token so we can access our API easily
// from your space dashboard at https://app.storyblok.com
let storyapi = new StoryblokClient({
  accessToken: token,
});

export default {
  name: "Blog_",
  data() {
    return {
      msg: "rotorink hockey articles ⛸️",
      story: {
        content: {
          body: [],
        },
      },
    };
  },
  created() {
    // 4. Initialize the Storyblok Client Bridge to allow us to subscribe to events
    // from the editor itself.
    window.storyblok.init({
      accessToken: token,
    });
    window.storyblok.on("change", () => {
      // this will indicate to load the home story, exchange that with the full slug of your content
      // either it is the page URL or hardcoded as in the example below
      this.getStory("home", "draft");
    });
    window.storyblok.pingEditor(() => {
      if (window.storyblok.isInEditor()) {
        this.getStory("home", "draft");
      } else {
        this.getStory("home", "published");
      }
    });
  },
  methods: {
    getStory(slug, version) {
      storyapi
        .get("cdn/stories/" + slug, {
          version: version,
        })
        .then((response) => {
          this.story = response.data.story;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
