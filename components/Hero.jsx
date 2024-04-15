"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Download, Send } from 'lucide-react'

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
} from 'react-icons/ri'

import DevImg from './DevImg'
import Badge from './Badge'
import Socials from './Socials'



const Hero = () => {

    const handleDownload = () => {
       
        const link = document.createElement('a');
        link.href = '/fawad_iqbal_CV.pdf'; // Specify the path to your CV file
        link.download = 'fawad_iqbal_CV.pdf'; // Specify the filename for the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <section className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none'>
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    {/* {text} */}
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Software Developer</div>
                        <h1 className='h1 mb-4'>Hello, I am Fawad Iqbal</h1>
                        <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>Brief description with insights into myself, my vocational journey and what i engage in profeesion</p>

                        <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                            <Link href={'/contact'}>
                                <Button className='gap-x-2'>Contact me <Send size={18}/></Button>
                            </Link>
                          
                                <Button onClick={handleDownload} variant='secondary' className='gap-x-2'>Download CV <Download path='mycv.png' size={18}/></Button>
                           
                        </div>

                        <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'/>
                    </div>
                    {/* {img} */}
                    <div className="hidden xl:flex relative">
                        {/* <Badge containerStyles="absolute top-[24%] -left-[5rem]" icon={<RiBriefcase4Fill/>} endCountNum={3} badgeText="Years of experience" /> */}
                        <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[580px] bg-no-repeat absolute -top-1 -right-2'>
                            <DevImg containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/about/developer.png'/>
                        </div>
                    </div>
                </div>
                {/* {icon} */}
                <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                    <RiArrowDownSLine className='text-3xl text-primary'/>
                </div>
            </div>
        </section>
    )
}

export default Hero