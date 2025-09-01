
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'
import { Bold, Calendar1, Ellipsis, Italic, Strikethrough, Underline } from 'lucide-react'
import { Button } from '../ui/button'
import { cn } from '~/lib/utils'

export default function DidYouKnoW() {
    return (
        <section>
            <div className="bg-muted/50 py-20">
                <div className="section px-6">
                    <div>
                        {/* <span className="text-primary font-semibold">Did you know?</span> */}
                        <h2 className="text-primary mt-4 text-4xl font-semibold">Did you know?</h2>
                        <p className="text-foreground/65 mb-4 mt-4 md:text-lg">The creative industries in Africa generate approximately <b className="text-primary">$4.2 billion</b> annually, with projections to reach <b className="text-primary">$20 billion</b> and create <b className="text-secondary">20 million</b> jobs in the coming years.</p>
                        <p className="text-foreground/65 mb-12 mt-4 md:text-lg">
                        With our disciplined and multi-faceted investment strategy, we back emerging creative businesses, helping them reach their full potential and deliver strong returns for our partners. Our goal is to transform and scale creative businesses to drive long-term sustainable profitability and superior investment returns.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
type IllustrationProps = {
    className?: string
    variant?: 'elevated' | 'outlined' | 'mixed'
}

export const ScheduleIllustation = ({ className, variant = 'elevated' }: IllustrationProps) => {
    return (
        <div className={cn('relative', className)}>
            <div
                className={cn('bg-background -translate-x-1/8 absolute flex -translate-y-[110%] items-center gap-2 rounded-lg p-1', {
                    'shadow-black-950/10 shadow-lg': variant === 'elevated',
                    'border-foreground/10 border': variant === 'outlined',
                    'border-foreground/10 border shadow-md shadow-black/5': variant === 'mixed',
                })}>
                <Button
                    size="sm"
                    className="rounded-sm">
                    <Calendar1 className="size-3" />
                    <span className="text-sm font-medium">Schedule</span>
                </Button>
                <span className="bg-border block h-4 w-px"></span>
                <ToggleGroup
                    type="multiple"
                    size="sm"
                    className="gap-0.5 *:rounded-md">
                    <ToggleGroupItem
                        value="bold"
                        aria-label="Toggle bold">
                        <Bold className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="italic"
                        aria-label="Toggle italic">
                        <Italic className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="underline"
                        aria-label="Toggle underline">
                        <Underline className="size-4" />
                    </ToggleGroupItem>
                    <ToggleGroupItem
                        value="strikethrough"
                        aria-label="Toggle strikethrough">
                        <Strikethrough className="size-4" />
                    </ToggleGroupItem>
                </ToggleGroup>
                <span className="bg-border block h-4 w-px"></span>
                <Button
                    size="icon"
                    className="size-8"
                    variant="ghost">
                    <Ellipsis className="size-3" />
                </Button>
            </div>
            <span>
                <span className="bg-secondary text-secondary-foreground py-1">Tomorrow 8:30 pm</span> is our priority.
            </span>
        </div>
    )
}

export const CodeIllustration = ({ className }: { className?: string }) => {
    return (
        <div className={cn('[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]', className)}>
            <ul className="text-muted-foreground mx-auto w-fit font-mono text-2xl font-medium">
                {['Images', 'Variables', 'Pages', 'Components', 'Styles'].map((item, index) => (
                    <li
                        key={index}
                        className={cn(index == 2 && "text-foreground before:absolute before:-translate-x-[110%] before:text-orange-500 before:content-['Import']")}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}