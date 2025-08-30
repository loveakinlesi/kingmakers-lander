import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'
import { Link } from '../ui/link'

export default function WhoWeAre() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12" id='about'>
                <img
                    className="rounded-(--radius) grayscale"
                    src="https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="team image"
                    height=""
                    width=""
                    loading="lazy"
                />

                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-7xl font-medium">Who We Are</h2>
                    <div className="space-y-6">
                        <p>Accelra invest where culture and lifestyle meet capital. As a private equity and credit investment firm, we are dedicated to unlocking value in the music, photography, food, film, fashion, and other creative industries across African and Europe. </p>
                    </div>
                </div>
            </div>
        </section>
    )
}