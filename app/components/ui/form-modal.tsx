
import * as React from "react"

import { useMediaQuery } from "~/lib/hooks/use-media-query"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "./drawer"
import { Modal } from "./modal"
import { cn } from "~/lib/utils"


export const TallyForm = ({formId, className}: {formId: string; className?: string}) => {
  return <div className={cn("w-full h-[600px]", className)}>
          <iframe
            src={`https://tally.so/embed/${formId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
            width="100%"
            height="100%"
            title="Tally Form"
          />
        </div>
}

export function FormModal({ trigger, formId }: { trigger: React.ReactNode; formId: string }) {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Modal trigger={trigger}>
        <h2 className="text-2xl font-semibold mb-4">Partnership Inquiry</h2>
        <p className="">Fill out the form below and we'll get back to you as soon as possible.</p>
        <TallyForm formId={formId} />
      </Modal>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Partnership Inquiry</DrawerTitle>
          <DrawerDescription>
            Fill out the form below and we'll get back to you as soon as possible.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <TallyForm formId={formId} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
