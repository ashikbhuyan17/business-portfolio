'use client';
import React, { useState } from 'react';

const FlyoutMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <ul className="flex flex-wrap items-center font-medium text-sm">
      <li
        className="p-4 lg:px-8 relative flex items-center space-x-1"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <a className=" font-medium text-md " href="#0" aria-expanded={open}>
          About Us
        </a>
        <button
          className="shrink-0 p-1"
          aria-expanded={open}
          onClick={(e) => {
            e.preventDefault();
            setOpen(!open);
          }}
        >
          <span className="sr-only">Show submenu for "Flyout Menu"</span>
          <svg
            className="w-3 h-3 fill-slate-500"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
          >
            <path d="M10 2.586 11.414 4 6 9.414.586 4 2 2.586l4 4z" />
          </svg>
        </button>

        {open && (
          <ul className="origin-top-right absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] bg-white border border-slate-200 p-2 rounded-lg shadow-xl">
            <li>
              <a
                className="text-slate-800 hover:bg-slate-50 flex items-center p-2"
                href="#"
              >
                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                  <svg
                    className="fill-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="12"
                  >
                    <path d="M8.724.053A.5.5 0 0 0 8.2.1L4.333 3H1.5A1.5 1.5 0 0 0 0 4.5v3A1.5 1.5 0 0 0 1.5 9h2.833L8.2 11.9a.5.5 0 0 0 .8-.4V.5a.5.5 0 0 0-.276-.447Z" />
                  </svg>
                </div>
                <span className="whitespace-nowrap">Priority Ratings</span>
              </a>
            </li>
            <li>
              <a
                className="text-slate-800 hover:bg-slate-50 flex items-center p-2"
                href="#"
              >
                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                  <svg
                    className="fill-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                  >
                    <path d="M11.953 4.29a.5.5 0 0 0-.454-.292H6.14L6.984.62A.5.5 0 0 0 6.12.173l-6 7a.5.5 0 0 0 .379.825h5.359l-.844 3.38a.5.5 0 0 0 .864.445l6-7a.5.5 0 0 0 .075-.534Z" />
                  </svg>
                </div>
                <span className="whitespace-nowrap">Insights</span>
              </a>
            </li>
            <li>
              <a
                className="text-slate-800 hover:bg-slate-50 flex items-center p-2"
                href="#"
              >
                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                  <svg
                    className="fill-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                  >
                    <path d="M6 0a6 6 0 1 0 0 12A6 6 0 0 0 6 0ZM2 6a4 4 0 0 1 4-4v8a4 4 0 0 1-4-4Z" />
                  </svg>
                </div>
                <span className="whitespace-nowrap">Item Mirror</span>
              </a>
            </li>
            <li>
              <a
                className="text-slate-800 hover:bg-slate-50 flex items-center p-2"
                href="#"
              >
                <div className="flex items-center justify-center bg-white border border-slate-200 rounded shadow-sm h-7 w-7 shrink-0 mr-3">
                  <svg
                    className="fill-indigo-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                  >
                    <path d="M10.866.134a.458.458 0 0 0-.481-.106L.302 3.695a.458.458 0 0 0-.014.856l4.4 1.76 1.76 4.4c.07.175.24.29.427.29h.007a.458.458 0 0 0 .424-.302L10.973.615a.458.458 0 0 0-.107-.48Z" />
                  </svg>
                </div>
                <span className="whitespace-nowrap">Support Center</span>
              </a>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
};

export default FlyoutMenu;

// 'use client';

// import * as React from 'react';
// import Link from 'next/link';

// import { cn } from '@/lib/utils';
// // import { Icons } from '@/components/icons';
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   navigationMenuTriggerStyle,
// } from '@/components/ui/navigation-menu';

// const components: { title: string; href: string; description: string }[] = [
//   {
//     title: 'Alert Dialog',
//     href: '/docs/primitives/alert-dialog',
//     description:
//       'A modal dialog that interrupts the user with important content and expects a response.',
//   },
//   {
//     title: 'Hover Card',
//     href: '/docs/primitives/hover-card',
//     description:
//       'For sighted users to preview content available behind a link.',
//   },
//   {
//     title: 'Progress',
//     href: '/docs/primitives/progress',
//     description:
//       'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
//   },
//   {
//     title: 'Scroll-area',
//     href: '/docs/primitives/scroll-area',
//     description: 'Visually or semantically separates content.',
//   },
//   {
//     title: 'Tabs',
//     href: '/docs/primitives/tabs',
//     description:
//       'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
//   },
//   {
//     title: 'Tooltip',
//     href: '/docs/primitives/tooltip',
//     description:
//       'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
//   },
// ];

// export function NavigationMenuDemo() {
//   return (
//     <NavigationMenu className="">
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger className="font-medium text-lg">
//             About Us
//           </NavigationMenuTrigger>
//           <NavigationMenuContent className="bg-gray-50 ">
//             <ul className="grid gap-3 p-5 md:w-[200px] ">
//               <li className="row-span-3">
//                 <NavigationMenuLink asChild>
//                   <a
//                     className="space-y-10 flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted  no-underline outline-none focus:shadow-md"
//                     href="/"
//                   >
//                     <div className="  font-medium">About Us</div>
//                     <div className="  font-medium">Our Team</div>
//                     <div className="  font-medium">Our History</div>
//                   </a>
//                 </NavigationMenuLink>
//               </li>
//             </ul>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   );
// }

// const ListItem = React.forwardRef<
//   React.ElementRef<'a'>,
//   React.ComponentPropsWithoutRef<'a'>
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <li>
//       <NavigationMenuLink asChild>
//         <a
//           ref={ref}
//           className={cn(
//             'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
//             className
//           )}
//           {...props}
//         >
//           <div className="text-sm font-medium leading-none">{title}</div>
//           <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
//             {children}
//           </p>
//         </a>
//       </NavigationMenuLink>
//     </li>
//   );
// });
// ListItem.displayName = 'ListItem';
