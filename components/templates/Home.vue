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
                    <TagButton v-for="climber in climbers" :key="climber.id" :buttonTitle="climber.name" :buttonValue="climber.name" @click="category = climber.name"/>
                </div>
            </div>
            <div class="movies">
                <div class="content organism" v-for="movie in MoviesfilterByCategory" :key="movie.id">
                    <iframe width="560" height="315" :src="movie.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <a :href="movie.url"><p class="climber">{{ movie.title }}</p></a>
                    <a :href="movie.instagram"><p class="problem">{{ movie.climber }}</p></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            movies: [
            {
                id:1,
                title:'Fight Club',
                url:'https://www.youtube.com/embed/N9H8gcpZhss',
                climber:'alex megos',
                instagram:'https://www.instagram.com/alexandermegos/',
                problem:'Fight Club'
            },
            {
                id:2,
                title:'Jakob Schubert - Perfecto Mundo 9b+',
                url:'https://www.youtube.com/embed/nmYXe2u0juM',
                climber:'jakob schubert',
                instagram:'https://www.instagram.com/jakob.schubert/',
                problem:'Perfecto Mundo'
            },
            {
                id:3,
                title:'BD Athlete Adam Ondra: The Just Do It (5.14c) Onsight',
                url:'https://www.youtube.com/embed/krEwPAcQi9M',
                climber:'adam ondra',
                instagram:'https://www.instagram.com/adam.ondra/',
                problem:'The Just Do It'
            },
            {
                id:4,
                title:'Uncut: Decided (8B+/V14) FLASH - Tomoa Narasaki',
                url:'https://www.youtube.com/embed/gBWjmjwpcc0',
                climber:'tomoa narasaki',
                instagram:'https://www.instagram.com/tomoa_narasaki/',
                problem:'Decided'
            },
            {
                id:5,
                title:'MihoNonaka EnjoyClimbing',
                url:'https://www.youtube.com/embed/fQ2N1htKs88',
                climber:'miho nonaka',
                instagram:'https://www.instagram.com/nonaka_miho/',
                problem:'KUMITE'
            },
            {
                id:6,
                title:'Team Sportiva Rock Tour in 九州 －後編－',
                url:'https://www.youtube.com/embed/R6paOK50RrU',
                climber:'akiyo noguchi',
                instagram:'https://www.instagram.com/noguchi_akiyo/',
                problem:'デルビヨ'
            },
            {
                id:7,
                title:'My next step -Climbing Journey HOKKAIDO- /Akiyo Noguchi',
                url:'https://www.youtube.com/embed/ORFbi9JsbKE',
                climber:'akiyo noguchi',
                instagram:'https://www.instagram.com/noguchi_akiyo/',
                problem:'日高源流エサオマン'
            },
            {
                id:8,
                title:'THE NORTH FACE Rock Trip #01 SHIKOKU',
                url:'https://www.youtube.com/embed/WjAmnLFlkbk',
                climber:'tomoa narasaki',
                instagram:'https://www.instagram.com/tomoa_narasaki/',
                problem:'Deadline'
            },
            {
                id:9,
                title:'Jakob Schubert - Off the Wagon UNCUT',
                url:'https://www.youtube.com/embed/5OFtEZXEw8E',
                climber:'jakob schubert',
                instagram:'https://www.instagram.com/jakob.schubert/',
                problem:'Off the Wagon'
            },
            {
                id:10,
                title:'Rotpunkt: Bibliographie | Alex Megos climbs his hardest project yet',
                url:'https://www.youtube.com/embed/SbWvFjUIt5k',
                climber:'alex megos',
                instagram:'https://www.instagram.com/alexandermegos/',
                problem:'Perfecto Mundo'
            },
            {
                id:11,
                title:'Silence',
                url:'https://www.youtube.com/embed/ZRTNHDd0gL8',
                climber:'adam ondra',
                instagram:'https://www.instagram.com/adam.ondra/',
                problem:'Silence'
            },
            {
                id:12,
                title:'Climbing The Highest Chimney In Europe | w/ Janja Garnbret and Domen Škofic',
                url:'https://www.youtube.com/embed/bpDymGNQy_I',
                climber:'janja garnbret',
                instagram:'https://www.instagram.com/janja_garnbret/',
                problem:'Trbovlje Power Station'
            },
            {
                id:13,
                title:"Shauna Coxsey's Idea of a Relaxing Climb is Miles Away From Yours",
                url:'https://www.youtube.com/embed/AsZTanBZJBI',
                climber:['shauna coxsey', 'coxsy'],
                instagram:'https://www.instagram.com/shaunacoxsey/',
                problem:'ROOF A BABY BUDDHA'
            },
            ],
            climbers:[
                {
                    id:1,
                    name:'Alex Megos'
                },
                {
                    id:2,
                    name:'Jakob Schubert'
                },
                {
                    id:3,
                    name:'Adam Ondra'
                },
                {
                    id:4,
                    name:'Tomoa Narasaki'
                },
                {
                    id:5,
                    name:'Miho Nonaka'
                },
                {
                    id:6,
                    name:'Akiyo Noguchi'
                },
                {
                    id:7,
                    name:'Janja Garnbret'
                },
                {
                    id:8,
                    name:'Shauna Coxsey'
                },

            ],
            category:'',
        }
    },
    computed:{
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