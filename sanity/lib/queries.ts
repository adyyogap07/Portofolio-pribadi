import { defineQuery } from "next-sanity";

export const profileQuery = defineQuery(`
  *[_type == "profile"][0]{
    fullName, headline, tagline,
    "bio": array::join(bio[].children[].text, " "),
    email, location,
    githubUrl, linkedinUrl,
    "avatar": avatar{alt, "url": asset->url},
    "cvUrl": cvFile.asset->url
  }
`);

export const featuredProjectsQuery = defineQuery(`
  *[_type == "project" && featured == true && defined(slug.current)] | order(order asc){
    _id, title, "slug": slug.current, summary,
    "thumbnail": thumbnail{alt, "url": asset->url},
    techStack, category, demoUrl, repoUrl
  }
`);

export const allProjectsQuery = defineQuery(`
  *[_type == "project" && defined(slug.current)] | order(order asc){
    _id, title, "slug": slug.current, summary,
    "thumbnail": thumbnail{alt, "url": asset->url},
    techStack, category, demoUrl, repoUrl
  }
`);

export const projectBySlugQuery = defineQuery(`
  *[_type == "project" && slug.current == $slug][0]{
    _id, title, "slug": slug.current, summary,
    "description": array::join(description[].children[].text, " "),
    "thumbnail": thumbnail{alt, "url": asset->url},
    "gallery": gallery[]{alt, "url": asset->url},
    techStack, category, demoUrl, repoUrl, highlights
  }
`);

export const projectSlugsQuery = defineQuery(`
  *[_type == "project" && defined(slug.current)].slug.current
`);

export const skillsQuery = defineQuery(`
  *[_type == "skill"] | order(category asc, order asc){
    _id, name, category, level, icon
  }
`);

export const experiencesQuery = defineQuery(`
  *[_type == "experience"] | order(startDate desc){
    _id, kind, organization, title, startDate, endDate,
    "description": array::join(description[].children[].text, " ")
  }
`);