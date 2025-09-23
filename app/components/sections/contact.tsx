import { InstagramIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardTitle } from '~/components/ui/card'
import { TallyForm } from '~/components/ui/form-modal'
import { Link } from '~/components/ui/link'

export default function ContactUs() {
    return (
        <section className="bg-gray-50  py-15 sm:py-20 lg:py-32" id="contactus">
            <div className="section border-t px-6">
                <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">Contact Us</span>

                <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
                    <div className="sm:w-3/5">
                        <h2 className="text-3xl font-semibold sm:text-4xl">Help us route your inquiry</h2>
                    </div>
                    <div className="mt-6 sm:mt-0">
                        <p>We'll help you find the right plan and pricing for your business.</p>
                    </div>
                </div>
                <div className="mt-12 sm:grid sm:grid-cols-2">
                    <div className="grid grid-cols-2 lg:block lg:space-y-12 mb-4">
                        <div className="flex flex-col justify-between space-y-6">
                            <div>
                                <h2 className="mb-1 md:text-lg font-semibold">Collaborate</h2>
                                <Link
                                    to="mailto:info@accelragroup.com"
                                    className="text-primary hover:underline text-sm md:text-base">
                                    info@accelragroup.com
                                </Link>
                                {/* <p className="mt-3 text-sm">+243 000 000 000</p> */}
                            </div>
                        </div>
                        <div className="flex flex-col justify-between space-y-6">
                            <div>
                                <h3 className="mb-1 md:text-lg font-semibold">Socials</h3>
                                <p className="">
                                    <InstagramIcon className="inline mr-2 size-5" />
                                    <Link
                                        to="https://www.instagram.com/accelragroup"
                                        className="text-primary  hover:underline text-sm md:text-base">
                                        @accelragroup
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>

                    <form
                        action=""
                        className="@container">
                        <Card className="">
                          <CardContent>
                              <CardTitle className='mb-4'>Let's get you to the right place</CardTitle>
                            <CardDescription>Reach out to our sales team! We’re eager to learn more about how you plan to use our application.</CardDescription>
                            <TallyForm formId="nPKYg1" className='h-[450px]' />
                               </CardContent>
                        </Card>
                    </form>
                </div>
            </div>
        </section>
    )
}