'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '~/components/ui/accordion'
import { Link } from '~/components/ui/link'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What industries does Accelra specialize in?',
            answer: 'We specialize in creative sectors — including fashion, media, entertainment, design, and lifestyle — with a focus on businesses that shape culture and have the potential to scale globally.',
        },
        {
            id: 'item-2',
            question: 'How does Accelra support businesses beyond investment?',
            answer: 'In addition to providing capital, we bring discipline, hands-on partnership, and strategic networks to help companies grow sustainably and expand into new markets.',
        },
        {
            id: 'item-3',
            question: 'What makes Accelra different from other investment firms?',
            answer: 'Our unique focus on creative industries, combined with our local presence in Africa and Europe and global investor connections, allows us to bridge culture and capital in ways traditional firms often overlook.',
        },
        {
            id: 'item-4',
            question: 'Does Accelra only provide equity funding?',
            answer: "No. We provide both private equity and credit solutions, tailored to the needs of each business we partner with.",
        },
        {
            id: 'item-5',
            question: 'Who can work with Accelra?',
            answer: 'We work with two main groups: Businesses seeking growth capital to scale. Partners and investors who want to deploy capital into creative industry opportunities.',
        },
    ]

    return (
        <section className="bg-muted py-16 md:py-20" id='faqs'>
            <div className="section border-t px-6">
                <span className="text-caption -ml-6 -mt-3.5 block w-max bg-muted px-6">FAQs</span>
                <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                    <div className="sm:w-3/5">
                        <h2 className="text-3xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p>Discover quick and comprehensive answers to common questions about our platform, services, and features.</p>
                    </div>
                </div>


                <div className="mt-12">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-foreground/5 rounded-(--radius) w-full border border-transparent px-8 py-3 shadow ring-1">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dotted">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base text-muted-foreground">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6">
                        Can't find what you're looking for? Contact our{' '}
                        <Link
                            to="#contactus"
                            className="text-primary font-medium hover:underline">
                            support team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}