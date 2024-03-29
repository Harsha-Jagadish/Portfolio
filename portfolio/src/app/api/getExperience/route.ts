// app/api/experiences.tsx
import { NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { sanityClient } from "../../../../sanity/sanity";
import { Experience } from '../../../../typings';

const query = groq`
*[_type == "experience"]{
    ...,
    technologies[]->
}
`;

export async function GET() {
    const experiences: Experience[] = await sanityClient.fetch(query);
    return NextResponse.json({ experiences }, { status: 200 });
}
