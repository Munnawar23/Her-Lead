import unicornAnim from '../../public/animations/unicorn.json';
import emojiAnim from '../../public/animations/emoji.json';
import reactAnim from '../../public/animations/react.json';
import minionAnim from '../../public/animations/minion.json';
import bunnyAnim from '../../public/animations/bunny.json';

export const socialPosts = [
    {
        id: 1,
        user: "herlead_agency",
        image: "/images/general/lion.webp",
        animation: bunnyAnim,
        likes: "12.4k",
        rotation: -6,
    },
    {
        id: 2,
        user: "herlead_agency",
        image: "/images/services/7.webp",
        animation: unicornAnim,
        likes: "8.9k",
        rotation: 6,
    },
    {
        id: 3,
        user: "herlead_agency",
        image: "/images/services/4.webp",
        animation: emojiAnim,
        likes: "15.2k",
        rotation: -4,
    },
    {
        id: 4,
        user: "herlead_agency",
        image: "/images/general/lion.webp",
        animation: reactAnim,
        likes: "10.1k",
        rotation: 8,
    },
];
