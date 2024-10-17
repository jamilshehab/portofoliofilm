import { FaVideo, FaPalette, FaClipboardList, FaVolumeUp, FaFilm, FaPlayCircle } from "react-icons/fa";

// Define the type for a service item
interface ServiceItem {
    title: string;
    desc: string;
    img: string;
}
interface PortofolioItem {
    title: string;
    image: string;
    name: string;
}


export const serviceItems: ServiceItem[] = [
    {
        title: "TV Shows",
        desc: "Experience the power of storytelling through captivating TV shows.  ",
        img: '/assets/images/services/1.webp'
    },
    {
        title: "Short Film",
        desc: "Discover Noxe's collection of captivating short films.  ",
        img: '/assets/images/services/2.webp'
    },
    {
        title: "Documentary",
        desc: "Explore the world through captivating documentaries.  ",
        img: '/assets/images/services/3.webp'

    },
    {
        title: "Trailers",
        desc: "Get a sneak peek into  upcoming films with our thrilling trailers. ",
        img: '/assets/images/services/4.webp'

    },
    {
        title: "Animation",
        desc: "Immerse yourself in the world of animation  .  ",
        img: '/assets/images/services/5.webp'

    },

];
export const portofolioItem: PortofolioItem[] = [
    {
        title: "Adventure, Horror, Thriller",
        name: "Devil Island",
        image: "/assets/images/portofolio/1.webp"
    },
    {
        title: "Documentary",
        name: "Wildlife Diary",
        image: "/assets/images/portofolio/2.webp"

    },
    {
        title: "Biography, Comedy, Family.",
        name: "Miss Lucy",
        image: "/assets/images/portofolio/3.webp"

    },
    {
        title: "Animation,Documentary.",
        name: "The Birds",
        image: "/assets/images/portofolio/4.webp"

    },
    {
        title: "Musical, Comedy, Music. ",
        name: "Dragon’s Daughter",
        image: "/assets/images/portofolio/5.webp"

    },
    {
        title: "Adventure, Film-Noir, Thriller",
        name: "Darkness Lisa.",
        image: "/assets/images/portofolio/6.webp"

    },
];
export const portfolioImage = [
    "/assets/images/portofolio/1.webp", "/assets/images/portofolio/2.webp", "/assets/images/portofolio/3.webp", "/assets/images/portofolio/4.webp", "/assets/images/portofolio/5.webp", "/assets/images/portofolio/6.webp", "/images/portfolio/1.webp", "/images/portfolio/2.webp", "/images/portfolio/3.webp", "/images/portfolio/4.webp", "/images/portfolio/5.webp", "/images/portfolio/6.webp",
]