import{ createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url/";

export const config = {

    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "st8z0yhc" ,
    apiVersion: "2023-10-14",
    useCdn: false, //process.env.NODE_ENV === "production",

};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => 
    createImageUrlBuilder(config).image(source);