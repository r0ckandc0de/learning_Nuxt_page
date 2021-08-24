<template>
    <div class="template">
        <div class="top organism">
            <div class="message">
                <p>from Olympics</p>
                <p>to</p>
                <p>THE WILD</p>
            </div>
        </div>
        <div class="container">
            <div class="filter-container">
                <div class="search-bar">
                    <input type="text" v-model="category">
                </div>
                <div class="tags">
                    <TagButton buttonTitle="ALL" buttonValue="" @click='category = ""'/>
                    <TagButton v-for="climber in climbers" :key="climber.id" :flagIcon="climber.flag" :buttonTitle="climber.name" :buttonValue="climber.name"  @click="category = climber.name"/>
                </div>
            </div>
            <div class="movies">
                <div class="content organism" v-for="movie in MoviesfilterByCategory" :key="movie.id">
                    <iframe width="560" height="315" :src="movie.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <a :href="movie.url"><p class="climber">{{ movie.title }}</p></a>
                    <a :href="movie.instagram"><p class="problem"><i class="las la-hashtag"></i>{{ movie.climber }}</p></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import 'flag-icon-css/css/flag-icon.css'

export default {
    data(){
        return{
            category:'',
        }
    },
    computed:{
      ...mapState(['movies','climbers']),
      
      MoviesfilterByCategory(){
          return this.movies.filter( movie => !movie.climber.indexOf((this.category.toLowerCase())))
        }
    }
}
</script>

<style lang="scss" scoped>

.top{
    height: 100vh;
    background-image: url("/image/top.jpeg");
    display: flex;
    justify-content: center;
    align-items: center;

    .message{
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    p{
        color: $cPink;
        font-size: 80px;
        line-height: 84px;
    }
}

.container{
    display: flex;
    flex-direction: column;
}


.filter-container {
    margin: 32px;
    display: flex;
    flex-direction: column;

    .search-bar {
        margin: 8px 56px 8px 64px;
    }

    .tags {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin: 8px 56px;
    }
}


.movies{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 32px;

    .content.organism {
        display: flex;
        flex-direction: column;
        margin: 16px;

        p.climber {
            margin-top: 16px;
            margin-bottom: 0px;
        }

        p.problem {
            margin-top: 8px;
        }
    }
}

</style>