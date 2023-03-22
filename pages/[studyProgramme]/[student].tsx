import { allBios, allProjects, Bio, Project } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Head from "next/head";
import Image from "next/image";
import ErrorPage from "next/error";
import Layout from "../../components/layout/layout";
import Container from "../../components/layout/container";
import {
  BehanceLogo,
  CaretDown,
  Envelope,
  Globe,
  InstagramLogo,
  LinkedinLogo,
  CaretLeft,
} from "@phosphor-icons/react";
import { useLiveReload } from 'next-contentlayer/hooks';
import Link from "next/link";
import { useRouter } from "next/router";

export async function getStaticPaths() {
  const paths: string[] = allBios.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post: Bio = allBios.find((post) => post.slug === params.student);
  const projects = allProjects.filter(
    (post) => post.slug === params.student && post.title !== ""
  );

  return {
    props: {
      student: post,
      projects,
    },
  };
}

const PostLayout = ({
  student,
  projects,
}: {
  student: Bio;
  projects: Project[];
}) => {
  const BioContent = useMDXComponent(student.body.code);
  useLiveReload() // this only runs during development and has no impact on production

  const studentProjects = [];
  projects.forEach((value, index) => {
    studentProjects.push({
      title: value.title,
      heading: value.heading,
      image: value.image,
      content: useMDXComponent(value.body.code),
    });
  });

  const router = useRouter();
  if (!router.isFallback && !student?.studyProgram) {
    return <ErrorPage statusCode={404} />;
  }

  const socialMediaLinks = [
    { name: "email", url: student.email },
    { name: "portfolio", url: student.portfolio },
    { name: "linkedin", url: student.linkedin },
    { name: "behance", url: student.behance },
    { name: "instagram", url: student.instagram },
  ];

  return (
    <Layout>
      <Head>
        <title>{`Avgangsutstilling 2023 - ${student.title}`}</title>
      </Head>

      <Container>
        {router.isFallback ? (
          <p>Loading…</p>
        ) : (
          <>
            <main>
              <div className="mt-[4em] mb-[1em]">
                <Link
                  className={`hidden md:flex items-center hover:text-${student.studyProgram}`}
                  href={`/${student.studyProgram}`}
                >
                  <CaretLeft size={32} />
                  {student.studyProgram === "bmed"
                    ? "Grafisk design"
                    : student.studyProgram === "bixd"
                    ? "Interaksjonsdesign"
                    : student.studyProgram === "bwu"
                    ? "Webutvikling"
                    : ""}
                </Link>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6  md:flex-row">
                <div>
                  <Image
                    src={`/${student.studyProgram}/${student.slug}/${student.profile_picture}`}
                    alt={student.title}
                    width={512}
                    height={512}
                    className="w-full h-auto"
                    priority
                  />
                  <div className="flex gap-2 sm:gap-5 mt-4 md:mt-6">
                    {socialMediaLinks.map((link, index) => {
                      if (link.url !== "") {
                        if (link.name === "email") {
                          return (
                            <a
                              href={`mailto:${link.url}?subject=Avgangsutstilling-2023`}
                              key={index}
                              target="_blank"
                              rel="noopenner norefferer"
                            >
                              <Envelope
                                size={44}
                                className={`hover:text-${student.studyProgram} transition`}
                              />
                            </a>
                          );
                        }
                        if (link.name === "portfolio") {
                          return (
                            <a
                              href={link.url}
                              key={index}
                              target="_blank"
                              rel="noopenner norefferer"
                            >
                              <Globe
                                size={44}
                                className={`hover:text-${student.studyProgram} transition`}
                              />
                            </a>
                          );
                        } else if (link.name === "linkedin") {
                          return (
                            <a
                              href={link.url}
                              key={index}
                              target="_blank"
                              rel="noopenner norefferer"
                            >
                              <LinkedinLogo
                                size={44}
                                className={`hover:text-${student.studyProgram} transition`}
                              />
                            </a>
                          );
                        } else if (link.name === "behance") {
                          return (
                            <a
                              href={link.url}
                              key={index}
                              target="_blank"
                              rel="noopenner norefferer"
                            >
                              <BehanceLogo
                                size={44}
                                className={`hover:text-${student.studyProgram} transition`}
                              />
                            </a>
                          );
                        } else if (link.name === "instagram") {
                          return (
                            <a
                              href={link.url}
                              key={index}
                              target="_blank"
                              rel="noopenner norefferer"
                            >
                              <InstagramLogo
                                size={44}
                                className={`hover:text-${student.studyProgram} transition`}
                              />
                            </a>
                          );
                        }
                      }
                    })}
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <h1
                    className={`text-2xl md:text-4xl text-${student.studyProgram} font-bold`}
                  >
                    {student.title}
                  </h1>
                  <hr className="border-gray-3 my-8 2xl:my-4 " />
                  <div className="prose lg:prose-lg max-w-[75ch]">
                    <BioContent />
                  </div>
                </div>
              </div>

              <div className="flex justify-center invisible object-contain object-bottom md:visible 2xl:visible 2xl:items-center">
                <a href="#prosjekter">
                  <div className="md:mt-[1em] w-[10em] flex justify-center">
                    <CaretDown
                      size={44}
                      className={`text-${student.studyProgram}`}
                    />
                  </div>
                </a>
              </div>
            </main>
            <section id="prosjekter" className="mb-12">
              <h2 className="text-xl font-bold mb-1 sm:mt-16 md:mt-12">
                Prosjekter
              </h2>
              {studentProjects.map((project, index) => {
                return (
                  <div
                    className="grid lg:grid-cols-2 border-t border-gray-3"
                    key={index}
                  >
                    <Image
                      className="object-contain object-center my-5 md:my-10 sm:col-span-2 sm:self-center lg:col-span-1"
                      src={`/${student.studyProgram}/${student.slug}/${project.image}`}
                      width={400}
                      height={400}
                      alt={project.title}
                      style={{ width: "auto" }}
                    />

                    <div className="mx-0 smd:mx-4 2xl:mx-12 mb-5 md:my-10">
                      <h4 className="text-xs md:text-sm">{project.heading}</h4>
                      <h3
                        className={`font-bold text-xl md:text-2xl 2xl:text-4xl mb-4 text-${student.studyProgram}`}
                      >
                        {project.title}
                      </h3>
                      <div className="prose prose-sm lg:prose-md m-w-[75ch]">
                        <project.content />
                      </div>
                    </div>
                  </div>
                );
              })}
            </section>
          </>
        )}
      </Container>
    </Layout>
  );
};
export default PostLayout;
