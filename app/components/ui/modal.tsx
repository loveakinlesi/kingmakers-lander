
import React from "react";

export function Modal({ trigger, children }: { trigger: React.ReactNode, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {React.cloneElement(trigger as React.ReactElement, { onClick: () => setIsOpen(true) })}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-background p-6 rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)}>&times;</button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
