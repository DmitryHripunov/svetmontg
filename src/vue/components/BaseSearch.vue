<template>
  <div class="search-top js-search-menu">
    <div class="container">
      <form class="search-top__form" method="GET">
        <vue-simple-suggest
          v-model="chosen"
          :list="suggestionList"
          @select="onSuggestSelect"
          :max-suggestions="4"
          :debounce="200"
          :min-length="3"
          ref="suggest"
          :filter-by-query="true"
        >
          <div class="search-top__wrapper">
            <template slot="misc-item-above" slot-scope="scope">
              <div class="search-top__wrapper">
                <div
                  class="autocomplete-search__item search-top__label"
                  v-if="count === 0"
                >
                  Ничего не найдено :(
                </div>
              </div>
            </template>

            <input
              class="search-top__input"
              type="search"
              placeholder="Поиск по каталогу"
              autocomplete="off"
              :is-visible="true"
              ref="input"
            />

            <button
              type="submit"
              class="search-top__btn btn btn_medium btn_primary"
            >
              найти
            </button>
          </div>

          <div class="search-top__bottom containr" slot="suggestion-item" slot-scope="scope">
            <a
              :href="scope.suggestion.href || '#'"
              class="autocomplete-search__item"
            >
            </a>
          </div>

          <div slot="misc-item-below" slot-scope="scope">
            <div class="search-top__bottom" v-if="count > 0">
              <a :href="pathShowAll" class="search-top__link">
                Все результаты ({{ count }})
              </a>
            </div>
          </div>
        </vue-simple-suggest>
      </form>
    </div>
  </div>
</template>

<script>
import VueSimpleSuggest from "vue-simple-suggest";
import axios from "axios";

export default {
  components: {
    VueSimpleSuggest,
  },

  props: {
    //   urlAjax: {
    //     type: String,
    //     default: "/api/search/",
    //   },
    //   urlForm: {
    //     type: String,
    //     default: "/search/",
    //   },
  },

  data() {
    return {
      phrase: '',
      chosen: '',
      isLoading: false,
      count: '',
      error: null,
    };
  },

  computed: {
    getUri() {
      return (this.uri = uri);
    },
  },

  watch: {
    isVisible(val) {
      if (val) {
        this.$refs.input.focus();
      }
    },
  },

  computed: {
    pathShowAll() {
      return `?phrase=${this.phrase}`;
    },
  },

  methods: {
    suggestionList() {
     axios
        .get('https://gorest.co.in/public-api/products')
        .then((response) => {
          const resultData = response.data.data;
          for (let i in resultData) {
            this.count = resultData[i].id
            resultData[i].name;
          }
        });
    },
    onSuggestSelect({ href }) {
      window.location.href = href;
    },
    boldenSuggestion(scope) {
      if (!scope) {
        return scope;
      }
      const { suggestion, query } = scope;
      const result = suggestion.data.data[0].name;
      if (!query) return result;
      const texts = query.split(/[\s-_/\\|.]/gm).filter((t) => !!t) || [""];
      return result.replace(
        new RegExp(`(.*?)(${texts.join("|")})(.*?)`, "gi"),
        '$1<b class="highlight">$2</b>$3'
      );
    },
  },
};
</script>