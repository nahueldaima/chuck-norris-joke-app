<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-toolbar :color="headerColor" dark>
            <v-toolbar-title>
              <slot name="title"></slot>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <slot name="subtitle"></slot>
            <v-btn @click="buttonClicked" icon v-if="headerIcon != ''">
              <v-icon>{{ headerIcon }}</v-icon>
            </v-btn>
          </v-toolbar>
          <v-layout align-center justify-center row fill-height v-for="item in items" :key="item.id"
          @click="elementClicked(item)" class="listItem">
            <v-flex xs10>
                <v-card-text>{{item.joke}}</v-card-text>
            </v-flex>
            <v-flex xs2>
                <v-layout align-center justify-center>
                    <v-icon :color="item.active ? 'teal' : 'grey'">{{ listActionIcon }}</v-icon>
                </v-layout>
            </v-flex>            
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return [];
      }
    },
    listActionIcon: {
      type: String,
      default: ""
    },
    headerIcon: {
      type: String,
      default: ""
    },
    headerColor: {
      type: String,
      default: "indigo"
    }
  },
  data() {
    return {};
  },
  methods: {
    buttonClicked() {
      this.$emit("button-clicked");
    },
    elementClicked(value) {
      this.$emit("element-clicked", value);
    }
  }
};
</script>

<style>

.listItem {
    cursor: pointer;
    box-shadow: 0px 1px 0px 0px rgba(0, 0, 0, 0.10);
}
.listItem:hover{
  background: rgba(0, 0, 0, 0.027);
}
.listItem:hover .v-icon{
  color: #82b1ff !important;
}

.v-toolbar__title {
    font-size: 2vh!important;
}

</style>