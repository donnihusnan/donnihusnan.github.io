/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import IconCloud from '@/components/magicui/icon-cloud';
import Meteors from '@/components/magicui/meteors';

const slugs = [
  'typescript',
  'javascript',
  'react',
  'html5',
  'css3',
  'nodedotjs',
  'nextdotjs',
  'amazonaws',
  'firebase',
  'vercel',
  'git',
  'github',
  'visualstudiocode',
  'tailwindcss',
  'bootstrap',
  'basecamp',
  'vuedotjs',
];

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen w-full overflow-hidden bg-gradient-to-tr from-gray-50 via-gray-150 to-gray-200 dark:bg-gray-900">
      <Meteors number={30} />

      <main className="flex-grow flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-6 md:p-16 lg:p-24 flex flex-col justify-center">
          <div className="max-w-md mx-auto text-center mt-16 md:text-left">
            <header className="mb-6 md:mb-8">
              <p className="text-sm font-semibold md:text-base text-gray-600 dark:text-gray-300">
                Hello There... My Name is{' '}
              </p>
              <h1 className="mb-2 text-3xl md:text-5xl font-bold text-gray-800 dark:text-white">
                Donni Husnan
              </h1>
              <h2 className="text-lg md:text-xl font-semibold text-gray-600 dark:text-gray-300">
                a Self Taught Web Dev
              </h2>
            </header>

            <section>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                I'm having keen interest in creating efficient solutions. My
                journey in web development has equipped me with a diverse skill
                set and a problem-solving mindset.
              </p>
            </section>
          </div>
        </div>

        <div className="w-full md:w-1/2 mb-3 p-6 flex flex-col flex-grow mx-auto justify-center">
          <IconCloud iconSlugs={slugs} />
        </div>
      </main>

      <footer className="py-4 text-center">
        <div className="mb-2">
          <a
            href="https://www.linkedin.com/in/donni-husnan-00366b1ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mr-4 text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/donnihusnan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white"
          >
            <Github size={24} />
          </a>
        </div>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
          &copy; {new Date().getFullYear()} Donni Husnan. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
