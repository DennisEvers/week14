import React from 'react';
import Movie from './movie';

// this is the database that stores all the movie information for the reviews that i am using. It 
// stores the component of moviewlist to be called back and that contains the image for the movie
// the synopsis and all ratings reviews and name of reviewers. it also handles 
// the handle review and render functions are also on this page.
// the handlereview which maps through all the movie reveiwes and updates the reveiws card if any are changed or added.
export default class MovieList extends React.Component  {
    constructor(props)  {
        super(props);
        this.state = {
            movies: [
                {

                    id: 1,
                    title: 'The Last Samurai',
                    rating: [5,5,5],
                    synopsis: "Capt. Nathan Algren (Tom Cruise) is an American military officer hired by the Emperor of Japan to train the country's first army in the art of modern warfare. As the government attempts to eradicate the ancient Samurai warrior class in preparation for more Westernized and trade-friendly policies, Algren finds himself unexpectedly affected by his encounters with the Samurai, which places him at the center of a struggle between two eras and two worlds.",
                    image: 'https://benjweinberg.files.wordpress.com/2020/03/1-997.jpg?w=768',
                    reviews: [
                        {
                            name: 'Tim',
                            review: "Best movie ever I could not look away from the beautiful cinimatography or the incredible story!",
                            rating: 5,
                        },
                        {
                            name: 'Dennis',
                            review: "Incredible movie, beautiful, amazing, story and characters you really care about.",
                            rating: 5, 
                        },
                      
                    {
                        name: 'Tristan',
                        review: "Such a moving story and you can really feel the emotions in it SUPER well done one of my all time favorites.",
                        rating: 5, 
                    },
                    ],
                },

                    {

                        id: 2,
                        title: 'Star Wars: Rise of Skywalker',
                        rating: [2,4],
                        synopsis: "When it's discovered that the evil Emperor Palpatine did not die at the hands of Darth Vader, the rebels must race against the clock to find out his whereabouts. Finn and Poe lead the Resistance to put a stop to the First Order's plans to form a new Empire, while Rey anticipates her inevitable confrontation with Kylo Ren. Warning: Some flashing-lights scenes in this film may affect photosensitive viewers.",
                        image: 'https://i.etsystatic.com/18242346/r/il/9e630d/2119475822/il_1140xN.2119475822_pxgf.jpg',
                        reviews: [
                            {
                                name: 'BJ',
                                review: "Great Movie love the action the space battle was INCREDIBLE!",
                                rating: 2,
                            },
                            {
                                name: 'Bones',
                                review: "Great installment loved seeing old enemies and the space battle was just glorious.",
                                rating: 4,
                            },
                            ],
                        },

                        {

                            id: 3,
                            title: 'Tansformers',
                            rating: [5,5],
                            synopsis: "The fate of humanity is at stake when two races of robots, the good Autobots and the villainous Decepticons, bring their war to Earth. The robots have the ability to change into different mechanical objects as they seek the key to ultimate power. Only a human youth, Sam Witwicky (Shia LaBeouf) can save the world from total destruction.",
                            image: 'https://m.media-amazon.com/images/I/51m2UmuaxuL._AC_UF894,1000_QL80_.jpg',
                            reviews: [
                                {
                                    name: 'Kylo',
                                    review: "Amazing Movie Really brings the toys to life makes you feel like it could really happen cant wait to watch it again and the music is AMAZING!",
                                    rating: 5,
                                },
                                {
                                    name: 'Calvin',
                                    review: 'Love the Giant Robot battles and loved seeing my child hood memories come alive it was a GREAT addaptation.',
                                    rating: 5,
                                },
                                ],
                            },
                            {

                                id: 4,
                                title: 'The Mummy Returns',
                                rating: [4,5],
                                synopsis: "The evil mummy Imhotep returns to wreak havoc as he resumes his relentless search for power and immortality. To make matters worse, another ancient evil has been unleashed, even more dangerous than Imhotep. Only the heroic Rick O'Connell and his intrepid Egyptologist wife stand in the way of these twin terrors as they embark upon a desperate mission to save the world.",
                                image: 'https://upload.wikimedia.org/wikipedia/en/b/b7/The_Mummy_Returns_poster.jpg',
                                reviews: [
                                    {
                                        name: 'Rick',
                                        review: "Great movie little hiccup at the end but watching them explore through all egypt was amazing.",
                                        rating: 4,
                                    },
                                    {
                                        name: 'Jeremey',
                                        review: 'Great Movie Loved seeing all the different settings and loved the oasis at the end.',
                                        rating: 5, 
                                    },
                                    ],
                                },
                                {

                                   id: 5,
                                    title: 'Emperors New Groove',
                                    rating: [4,5],
                                    synopsis: "Arrogant young Emperor Kuzco is transformed into a llama by his power-hungry advisor -- the devious diva Yzma. Stranded in the jungle, Kuzco's only chance to get back home and reclaim the high life rests with a good-hearted peasant named Pacha. Together, they must return Kuzco to the throne before Yzma tracks them down and finishes him off.",
                                    image: 'https://i.kym-cdn.com/entries/icons/original/000/018/640/4ed.jpg',
                                    reviews: [
                                        {
                                            name: 'Jessica',
                                            review: "Hilarious, Kronk is my new hero i could not stop laughing from start to finish.",
                                            rating: 4,
                                        },
                                        {
                                            name: 'Howard',
                                            review: 'Hilarious and beautiful hand drawn animation, funny movie, and great story that gets you loving all the characters.',
                                            rating: 5,
                                        },
                                        ],
                                    }, 
                                    {

                                        id: 6,
                                         title: 'Battlefield Earth',
                                         rating: [2,1],
                                         synopsis: 'In the year 3000, there are no countries, no cities... Earth is a wasteland. And man is an endangered species. As the leader of the evil Psychlos, Terl and his race have taken over the worlds natural resources and disregarded everyone and everything else. Its up to Jonnie "Goodboy" Tyler, a brave human, to battle the Psychlos and restore normalcy to the world.',
                                         image: 'https://forcefedscifi.com/wp-content/uploads/2021/10/Battlefield-Earth-Poster.jpg',
                                         reviews: [
                                             {
                                                 name: 'Sandy',
                                                 review: "Terrible Movie boring made no sense and just forgetable in every way.",
                                                 rating: 2,
                                             },
                                             {
                                                 name: 'Cyrus',
                                                 review: 'AWFUL movie just boring and forgettable and would be a great movie to go to sleep to as it would help greatly, the only way i wanna watch it is while unconcious.',
                                                 rating: 1, 
                                             },
                                             ],
                                         }, 
                            
                            
          
                    ]
                };


            


        }

    handleMovieReview = (movieId, review) => {
        const updateMovies = this.state.movies.map(movie => {
            if(movie.id === movieId) {
                return {
                    ...movie,
                    reviews: [...movie.reviews, review]
                };
            }
        return movie;
         })
            this.setState({ movies: updateMovies });
    }

    render() {
        const movies = this.state.movies.map(movie => (
            <Movie
                key={movie.id}
                title={movie.title}
                image={movie.image}
                synopsis={movie.synopsis}
                rating={movie.rating}
                reviews={movie.reviews}
            />
        ));
        return <div className='card'>{movies}</div>;
    }

}

