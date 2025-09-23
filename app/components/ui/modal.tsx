
import React, { Fragment } from "react";

export function Modal({ trigger, children }: { trigger: React.ReactNode, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Fragment>
      {React.cloneElement(trigger as React.ReactElement, { onClick: () => setIsOpen(true) } as React.HTMLAttributes<HTMLElement>)}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-background p-6 pr-0 rounded-lg shadow-lg w-full max-w-lg relative">
            <div className="flex flex-col items-center justify-center absolute top-2 right-2 p-2 bg-background rounded-full">
              <button className="w-fit h-fit aspect-square leading-0" onClick={() => setIsOpen(false)}>&times;</button>
            </div>
            {children}
          </div>
        </div>
      )}
    </Fragment>
  );
}
