<template>
  <div>
    <!-- <mu-circular-progress :size="40" v-if="loading"/> -->
    <p v-html="html"></p>
  </div>
</template>
<style>
</style>
<script>
import { returnBaseUrl, get, post } from "@/api/ajax";
export default {
  name: "vhtmlpanel",
  // 使用时请使用 :url.sync=""传值
  props: {
    url: {
      required: true
    }
  },
  data() {
    return {
      loading: false,
      html: ""
    };
  },
  watch: {
    url(value) {
      this.load(value);
    }
  },
  mounted() {
      console.log(this.url);
    this.load(this.url);
  },
  methods: {
    load(url) {
      if (url && url.length > 0) {
        // 加载中
        this.loading = true;
        let param = {
          // accept: "text/html, text/plain"
        };
        get(url, param)
          .then(response => {
            this.loading = false;
            // 处理HTML显示
            console.log(response);
            this.html = response;
          })
          .catch(() => {
            this.loading = false;
            this.html = "加载失败";
          });
      }
    }
  }
};
</script>