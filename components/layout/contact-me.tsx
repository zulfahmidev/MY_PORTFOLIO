"use client"

import Image from "next/image";
import { AnimatedShinyText } from "../ui/animated-shiny-text";
import { ShineBorder } from "../ui/shine-border";
import { BorderBeam } from "../ui/border-beam";
import { LightRays } from "../ui/light-rays";
import { FaEnvelope } from "react-icons/fa";
import { useState } from "react";

export default function ContactMe() {
    const [fullname, setFullname] = useState('')
    const [message, setMessage] = useState('')

    return (
        <section className="container mx-auto my-8" id="contact">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-16 items-center">
                <div className="col-span-1 p-5 lg:p-0">
                    <h2 className="text-primary text-xl">Connect With Me</h2>
                    <p className="text-5xl font-bold my-2">
                        <AnimatedShinyText>{"Let's start a collaborate together"}</AnimatedShinyText>
                    </p>
                    <figure className="mt-6 p-12 border rounded-xl relative">
                        <LightRays />
                        <div className="w-21 h-21 relative rounded-full mx-auto">
                            <Image 
                                className="rounded-full"
                                src={'/assets/profile.jpeg'}
                                alt="profile picture zulfahmi"
                                fill />

                            <BorderBeam
                                duration={4}
                                size={100}
                                borderWidth={3}
                                reverse
                                className="from-transparent via-yellow-500 to-transparent"
                            />
                        </div>
                        <figcaption className="font-semibold text-xl text-center mt-3">Zulfahmi</figcaption>
                        <blockquote className="w-[80%] opacity-50 text-center mx-auto">I believe the best works are born from collaboration and shared ideas. Feel free to contact me, and let’s create something impactful together.</blockquote>
                        <a href="mailto:contact.zulfahmi@gmail.com" className="flex gap-3 items-center font-semibold w-fit py-3 px-4 rounded-lg bg-foreground mx-auto text-background mt-3 relative">
                            <span><FaEnvelope /></span>
                            <span>Email Me</span>
                        </a>
                    </figure>
                </div>

                <div className="col-span-1 px-5 lg:px-10 lg:py-5">
                    <div className="relative p-8 rounded-xl border border-foreground/15">
                        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                        <div className="mb-3">
                            <label htmlFor="">Fullname</label>
                            <input type="text" onInput={(v) => {
                                setFullname(v.currentTarget.value)
                            }} className="py-2 px-3 rounded-md border w-full my-2" placeholder="Type fullname" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="">Message</label>
                            <textarea onInput={(v) => {
                                setMessage(v.currentTarget.value)
                            }} className="py-2 px-3 rounded-md border w-full my-2" rows={5} placeholder="Type messages"></textarea>
                        </div>
                        <div className="">
                            <a 
                                href={`mailto:contact.zulfahmi@gmail.com?subject=${encodeURIComponent(`Email From ${fullname}`)}&body=${encodeURIComponent(message)}`}
                                className="py-2 px-4 text-background bg-primary rounded-lg cursor-pointer inline-block">
                                Kirim
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}