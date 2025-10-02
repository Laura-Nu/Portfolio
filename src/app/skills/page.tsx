import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL, about, person, skills } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: skills.title,
    description: skills.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(skills.title)}`,
    path: skills.path,
  });
}

export default function Skills() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={skills.path}
        title={skills.title}
        description={skills.description}
        image={`/api/og/generate?title=${encodeURIComponent(skills.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {skills.title}
      </Heading>
      {/* TODO: aquí podés mapear skills.skills para listarlos */}
    </Column>
  );
}
