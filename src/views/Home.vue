<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm12 md6>
        <List 
            :items="items" 
            listActionIcon="star" 
            headerIcon="add_comment"
            headerColor="blue"
            @button-clicked="getJokes"
            @element-clicked="setFavourite">
            <h4 slot="title">Random Chuck Norris Jokes</h4>
            <small slot="subtitle"> Get Jokes: </small>
        </List>
      </v-flex>
      <v-flex xs12 sm12 md6>
        <List 
            :items="favourites" 
            listActionIcon="delete"
            headerColor="green"
            @element-clicked="removeFavourite">
            <h4 slot="title">My Favourites</h4>
        </List>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import List from './../components/List';

export default {
    components: {
        List
    },
    data() {
        return {
        }
    },
    computed: {
        items(){
            return this.$store.getters.GET_JOKES_LIST;
        },
        favourites(){
            return this.$store.getters.GET_FAVOURITES_LIST;
        }
    },
    methods: {
        getJokes(){
            this.$store.dispatch('GET_JOKES', this.$store.getters.GET_JOKES_LIST_LIMIT);
        },
        setFavourite(item){
            this.$store.dispatch('ADD_FAVOURITE_JOKE', item);
        },
        removeFavourite(item){
            this.$store.commit('UNSET_FAVOURITE_JOKE', item);
        }
    }
    
}
</script>
