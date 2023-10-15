// app/api/skills.tsx
import { NextResponse } from 'next/server';
import { groq } from 'next-sanity';
import { sanityClient } from '../../../../sanity';
import { Skill } from '../../typings';

const query = groq`
    *[ _type == "skill"]
`;

export async function GET() {
    const skills: Skill[] = await sanityClient.fetch(query);
    return NextResponse.json({ skills });
}
