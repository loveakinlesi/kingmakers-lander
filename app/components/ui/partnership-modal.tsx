
import * as React from "react"

import { useMediaQuery } from "~/lib/hooks/use-media-query"
import { Button } from "./button"
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "./drawer"
import { Modal } from "./modal"
import { PartnershipForm } from "./partnership-form"

export function PartnershipModal({ trigger }: { trigger: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Modal trigger={trigger}>
        <h2 className="text-2xl font-semibold mb-4">Partnership Inquiry</h2>
        <PartnershipForm />
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
          <PartnershipForm />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
