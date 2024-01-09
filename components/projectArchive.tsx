import React from "react";

import Link from "next/link";
import Button from "./button";

export default function ProjectArchive() {
  const archiveData = [
    {
      projectName: "Personal Portfolio",
      tech: "Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting",
      link: "attila.dev",
    },
    {
      projectName: "E-commerce website",
      tech: "WordPress, PHP, WooCommerce, CSS",
      link: "gullfoss.is",
    },
    {
      projectName: "Annual Report - Built at Kolibri digital agency",
      tech: "Next.js, TypeScript, SCSS, GraphQL, Prismic, Framer Motion",
      link: "arsskyrsla-2021.lifbru.is",
    },
    {
      projectName: "Workshop",
      tech: "Next.js, Heroku, Vercel",
      link: "nextjs-rendering-phi.vercel.app",
    },
    {
      projectName: "Community Platform",
      tech: "WordPress, BuddyBoss",
      link: "birdsface.com",
    },
    {
      projectName: "Property Market Data visualization",
      tech: "React, Microsoft Power BI",
      link: "fasti.is",
    },
    {
      projectName: "Internship project",
      tech: "Next.js, TypeScript, SCSS, Prismic, GraphQL",
      link: "gefn-website.vercel.app",
    },
    {
      projectName: "Searchable database of street art in Reykjavik",
      tech: "Next.js, GraphCMS, MapBox",
      link: "reykjavikstreet.art",
    },
  ];

  return (
    <section className="md:w-[67.5rem] justify-center items-center mb-12 xl:mb-56">
      <div className="md:flex mb-12">
        <Button link={"/#projects"}>Go Back</Button>
      </div>
      <div className="w-full overflow-x-hidden">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium dark:text-white uppercase tracking-wider">
                Project
              </th>
              <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium dark:text-white uppercase tracking-wider">
                Built with
              </th>
              <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium dark:text-white uppercase tracking-wider">
                Link
              </th>
            </tr>
          </thead>
          <tbody>
            {archiveData.map((item, index) => (
              <tr
                key={index}
                className="bg-white dark:bg-gray-900 border-b border-primary dark:border-white border-opacity-25 transition duration-300 ease-in-out hover:bg-secondary dark:hover:bg-secondary "
              >
                <td className="max-w-[320px] whitespace-normal px-6 py-4 text-sm dark:text-white">
                  <div className="hidden md:table-cell">{item.projectName}</div>
                  <Link
                    href={`https://${item.link}`}
                    target="_blank"
                    className="md:hidden"
                  >
                    {item.projectName}
                  </Link>
                </td>
                <td className="hidden max-w-[450px] whitespace-normal px-6 py-4 md:flex text-sm dark:text-white">
                  {item.tech}
                </td>
                <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm dark:text-white">
                  {index === 0 ? (
                    <Link
                      href={`https://github.com/Attila-101/portfolio-draft`}
                      target="_blank"
                    >
                      {item.link}
                    </Link>
                  ) : (
                    <Link href={`https://${item.link}`} target="_blank">
                      {item.link}
                    </Link>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
