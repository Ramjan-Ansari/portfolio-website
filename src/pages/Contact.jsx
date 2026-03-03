import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch, Twitter } from 'lucide-react'
import React, { useState } from 'react'
import { cn } from '../lib/util'


const Contact = () => {
    const [result, setResult] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();

        setResult("Sending...");

        const formData = new FormData(event.target);

        let ACCESS_KEY = import.meta.env.VITE_WEB3_SECRET_KEY;

        formData.append("access_key", ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            e.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
    }
    }
  return (
    <div>
        <section id='contact' className='py-24 px-4 relative bg-secondry/30'>
            <div className='container mx-auto max-w-5xl'>

                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center opacity-0 animate-fade-in-delay-1'>Get In <span className='text-primary'>Touch</span></h2>

                <p className='text-center md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-2'>
                    Have a Project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunity.
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-11 '>
                    <div className='space-y-8 opacity animate-slide-right'>
                        <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>

                        <div className='space-y-6 justify-center '>
                            <div className='flex items-start space-x-4 '>
                                <div className='p-3 rounded-full bg-primary/10 '>
                                    <Mail className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-mediam text-start'>Email</h4>
                                    <a href="mailto:ramjanansari32426@gmail.com" className='text-muted-foreground hover:primary transition-colors'>ramjanansari32436@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-6 justify-center text-start'>
                            <div className='flex items-start space-x-4 '>
                                <div className='p-3 rounded-full bg-primary/10 '>
                                    <Phone className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-mediam'>Phone</h4>
                                    <a href="tel:+917294884303" className='text-muted-foreground hover:primary transition-colors'>+91 7294884303</a>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-6 justify-center '>
                            <div className='flex items-start space-x-4 '>
                                <div className='p-3 rounded-full bg-primary/10 '>
                                    <MapPin className='h-6 w-6 text-primary' />
                                </div>
                                <div>
                                    <h4 className='font-mediam text-start'>Location</h4>
                                    <a className='text-muted-foreground hover:primary transition-colors'>Patna, Bihar </a>
                                </div>
                            </div>
                        </div>


                        <div className='pt-8 '>
                            <h4 className='font-mediam mb-4'>Connect With Me</h4>
                            <div className="flex space-x-4 justify-center ">
                                <a href="https://www.linkedin.com/in/ramjan-ansari-426b91315/" target='_blank' ><Linkedin /></a>
                                <a href="https://github.com/Ramjan-Ansari" target='_blank' ><Github /></a>
                                <a href="https://www.linkedin.com/in/ramjan-ansari-426b91315/" target='_blank' ><Instagram /></a>
                                <a href="https://www.linkedin.com/in/ramjan-ansari-426b91315/" target='_blank' ><Twitter /></a>
                            </div>
                        </div>

                    </div>

                    <div className='bg-card p-8 rounded-lg shadow-xs opacity-0 animate-slide-left'>
                        <h3 className='text-2xl font-semibold mb-6 '>Send a Message</h3>

                        <form className='space-y-6' onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className='block text-sm font-mediam mb-2 text-start'>Name</label>
                                <input type="text" id='name' name='name' placeholder='Your Name..' required  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' />
                            </div>
                            <div>
                                <label htmlFor="email" className='block text-sm font-mediam mb-2 text-start'>Email</label>
                                <input type="email" id='email' name='name' placeholder='Your@gmail.com' required  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary' />
                            </div>
                            <div>
                                <label htmlFor="message" className='block text-sm font-mediam mb-2 text-start'>Message</label>
                                <textarea type="text" id='message' name='name' placeholder='Your Meassage...' required  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none' />
                            </div>

                            <button type='submit' className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                                Send Message <Send size={16} />
                            </button>
                            <span className='mt-1'>{result}</span>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Contact