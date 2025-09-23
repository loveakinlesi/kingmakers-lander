import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';
import { Link } from '../ui/link';

export default function StatsSection() {
    return (
        <section>
            <div className="bg-muted py-12">
                <div className="section px-6">
                    <h2 className="text-foreground max-w-lg text-balance text-3xl font-semibold lg:text-4xl">
                        <span className="text-primary">Your opportunity to partner</span> with the future of creativity and lifestyles.
                    </h2>
                    <p className="mt-4 md:text-lg">This is an open invitation to partner with us on our journey of growth and impact. As we scale with purpose and strategy towards 2030, we invite you to collaborate with us as we unlock new potentials and create lasting value for creative businesses. </p>
                    <div className="mt-8 flex gap-3">
                        {/* <FormModal formId="3xKJ0J" trigger={} /> */}
                        <Link target="_blank" to="https://tally.so/r/3xKJ0J">
                            <Button
                                className="pr-2" variant="dark">
                                Become a Partner
                                <ChevronRight
                                    strokeWidth={2.5}
                                    className="size-3.5! opacity-50"
                                />
                            </Button>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    )
}
