/**
 * Get cats pictures
 * @param {number} length
 * @returns {Promise<Array<{ title: string, url:string }>}
 */

import { catJSON } from "./data";

export const getImages = (length = 10) => {
    // return fetch(`https://api.thecatapi.com/v1/breeds`)
    //     .then((response) => response.json())
    //     .then((response) => {
    //         const images: { content: string; url: string }[] = [];
    //         response.forEach(
    //             (c: { description: string; image: { url: string } }) => {
    //                 const content = c?.description;
    //                 const url = c?.image?.url;

    //                 images.push({ content, url });
    //             }
    //         );
    //         return images.slice(0, length); // remove the extra cats
    //     });

    return catJSON.data;
};
