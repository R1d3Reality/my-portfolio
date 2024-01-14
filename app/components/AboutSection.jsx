'use client';
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from '../components/TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>JavaScript</li>
                <li>React</li>
                <li>Next JS</li>
                <li>Strapi</li>
                <li>HTML</li>
                <li>CSS / SCSS</li>
            </ul>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="pl-2">
                <li>Bachelor in Software Engineering</li>
                <li>IFNTUNG, Ivano-Frankivsk, Ukraine</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="pl-2">
                <li>BeetRoot Academy</li>
                <li>Semester course Frontend development</li>
            </ul>
        ),
    },
];

const AboutSection = () => {

    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
    return (
        <section className='text-white' id='#about'>
            <div className='md: grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image
                    width={500}
                    height={500}
                    src='/images/about-image.png'
                    alt='Computer image' />
                <div className='mt-4 md:mt-0 text-lef flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                        About Me
                    </h2>
                    <p className='text-base lg:text-lg'>
                        Im a front-end web developer specializing in JavaScript, React, Next.js, Redux, Strapi, HTML, CSS/SCSS, and Git.
                        With a focus on creating interactive and stylish websites, I help businesses stand out in the digital space
                        by crafting effective online interfaces to engage clients.
                        My passion lies in delivering exceptional user experiences and collaborating with teams to build innovative
                        web applications.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <TabButton
                            selectedTab={() => handleTabChange('skills')}
                            active={tab === 'skills'}>
                            Skills
                        </TabButton>
                        <TabButton
                            selectedTab={() => handleTabChange('education')}
                            active={tab === 'education'}>
                            Education
                        </TabButton>
                        <TabButton
                            selectedTab={() => handleTabChange('certifications')}
                            active={tab === 'certifications'}>
                            Certifications
                        </TabButton>
                    </div>
                    <div className='mt-8'>
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>

    )
}
export default AboutSection;