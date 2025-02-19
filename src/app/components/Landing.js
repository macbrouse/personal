import {Github, Mail, Linkedin } from "lucide-react"
const socialLinks = [
    { Icon: Github , href: 'https://github.com/macbrouse', label: 'GitHub' },
    { Icon: Mail, href: 'mailto:macbrouse@gmail.com', label: 'Email' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/sarthak-varmani-7293363b/', label: 'LinkedIn' }
  ]

import { Socials } from "./Socials"
export function Landing() {
    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20" />
            <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
                <div className="space-y-6">
                    <h2 className="text-6xl font-bold">
                        <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Sarthak Varmani
                        </span>
                        <span className="block text-4xl mt-4">
                            Software Engineer
                        </span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl">
                    A dedicated engineer with hands-on experience in crafting robust web applications. 
                    Passionate about creating innovative solutions to real-world problems, 
                    I focus on writing clean, efficient code to deliver exceptional digital experiences. 
                    Driven by a desire to improve user outcomes through well-designed, scalable systems.
                    </p>
                    <Socials links={socialLinks} />
                </div>
            </div>
        </section>
    )
}