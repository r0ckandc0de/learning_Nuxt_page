export const state = () => ({
    foo: 'bar',
    movies: [
        {
            id:1,
            title:'Fight Club',
            url:'https://www.youtube.com/embed/N9H8gcpZhss',
            climber:'alex megos',
            instagram:'https://www.instagram.com/alexandermegos/',
            problem:'Fight Club',
            flag:"flag-icon flag-icon-jp",
        },
        {
            id:2,
            title:'Jakob Schubert - Perfecto Mundo 9b+',
            url:'https://www.youtube.com/embed/nmYXe2u0juM',
            climber:'jakob schubert',
            instagram:'https://www.instagram.com/jakob.schubert/',
            problem:'Perfecto Mundo',
            flag:"flag-icon flag-icon-jp",
        },
        {
            id:3,
            title:'BD Athlete Adam Ondra: The Just Do It (5.14c) Onsight',
            url:'https://www.youtube.com/embed/krEwPAcQi9M',
            climber:'adam ondra',
            instagram:'https://www.instagram.com/adam.ondra/',
            problem:'The Just Do It',
            flag:'flag-icon flag-icon-jp',
        },
        {
            id:4,
            title:'Uncut: Decided (8B+/V14) FLASH - Tomoa Narasaki',
            url:'https://www.youtube.com/embed/gBWjmjwpcc0',
            climber:'tomoa narasaki',
            instagram:'https://www.instagram.com/tomoa_narasaki/',
            problem:'Decided',
            flag:'flag-icon flag-icon-jp',
        },
        {
            id:5,
            title:'MihoNonaka EnjoyClimbing',
            url:'https://www.youtube.com/embed/fQ2N1htKs88',
            climber:'miho nonaka',
            instagram:'https://www.instagram.com/nonaka_miho/',
            problem:'KUMITE',
            flag:'flag-icon flag-icon-jp',
        },
        {
            id:6,
            title:'Team Sportiva Rock Tour in 九州 －後編－',
            url:'https://www.youtube.com/embed/R6paOK50RrU',
            climber:'akiyo noguchi',
            instagram:'https://www.instagram.com/noguchi_akiyo/',
            problem:'デルビヨ',
            flag:'flag-icon flag-icon-jp',
        },
        {
            id:7,
            title:'My next step -Climbing Journey HOKKAIDO- /Akiyo Noguchi',
            url:'https://www.youtube.com/embed/ORFbi9JsbKE',
            climber:'akiyo noguchi',
            instagram:'https://www.instagram.com/noguchi_akiyo/',
            problem:'日高源流エサオマン',
            flag:'flag-icon flag-icon-jp',
        },
        {
            id:8,
            title:'THE NORTH FACE Rock Trip #01 SHIKOKU',
            url:'https://www.youtube.com/embed/WjAmnLFlkbk',
            climber:'tomoa narasaki',
            instagram:'https://www.instagram.com/tomoa_narasaki/',
            problem:'Deadline',
            flag:'flag-icon flag-icon-jp',
        },
        {
            id:9,
            title:'Jakob Schubert - Off the Wagon UNCUT',
            url:'https://www.youtube.com/embed/5OFtEZXEw8E',
            climber:'jakob schubert',
            instagram:'https://www.instagram.com/jakob.schubert/',
            problem:'Off the Wagon',
            flag:'flag-icon flag-icon-at',
        },
        {
            id:10,
            title:'Rotpunkt: Bibliographie | Alex Megos climbs his hardest project yet',
            url:'https://www.youtube.com/embed/SbWvFjUIt5k',
            climber:'alex megos',
            instagram:'https://www.instagram.com/alexandermegos/',
            problem:'Perfecto Mundo',
            flag:'flag-icon flag-icon-de',
        },
        {
            id:11,
            title:'Silence',
            url:'https://www.youtube.com/embed/ZRTNHDd0gL8',
            climber:'adam ondra',
            instagram:'https://www.instagram.com/adam.ondra/',
            problem:'Silence',
            flag:'flag-icon flag-icon-cz',
        },
        {
            id:12,
            title:'Climbing The Highest Chimney In Europe | w/ Janja Garnbret and Domen Škofic',
            url:'https://www.youtube.com/embed/bpDymGNQy_I',
            climber:'janja garnbret',
            instagram:'https://www.instagram.com/janja_garnbret/',
            problem:'Trbovlje Power Station',
            flag:'flag-icon flag-icon-si',
        },
        {
            id:13,
            title:"Shauna Coxsey's Idea of a Relaxing Climb is Miles Away From Yours",
            url:'https://www.youtube.com/embed/AsZTanBZJBI',
            climber:['shauna coxsey', 'coxsy'],
            instagram:'https://www.instagram.com/shaunacoxsey/',
            problem:'ROOF A BABY BUDDHA',
            flag:'flag-icon flag-icon-gb',
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
})

export const mutations = {
  changeFoo(state, text) {
    state.foo = text
  }
}

export const actions = {
  sendHoge(ctx, text) {
    console.log(ctx)
  }
}