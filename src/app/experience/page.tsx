import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, experience } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: experience.title,
    description: experience.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(experience.title)}`,
    path: experience.path,
  });
}

export default function Experience() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={experience.path}
        title={experience.title}
        description={experience.description}
        image={`/api/og/generate?title=${encodeURIComponent(experience.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {experience.title}
      </Heading>
      {/* TODO: mapear experience.experiences para mostrar trabajos */}
    </Column>
  );
}
