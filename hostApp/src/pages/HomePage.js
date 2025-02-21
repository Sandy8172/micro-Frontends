import React from "react";

import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import ChatInputBox from "../components/ChatInputBox";

const HomePage = () => {
  return (
    <div className="relative isolate overflow-hidden  py-16 sm:py-24 lg:py-32 h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-800">
              Micro-Frontend Architecture
            </h2>
            <p className="mt-4 text-lg text-gray-400 mb-8">
              Micro-Frontend Architecture is an approach to building web
              applications by breaking them into smaller, independent modules
              that can be developed, deployed, and scaled separately. It enables
              teams to work on different parts of the frontend independently,
              promoting flexibility, maintainability, and seamless integration
              of diverse technologies within a single application.
            </p>
            <section className="max-w-md">
              <ChatInputBox
                buttonText={"Send Anonymously"}
                user={"Anonymous"}
                sender={"other"}
              />
            </section>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  aria-hidden="true"
                  className="size-6 text-gray-800"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-gray-600">
                Module Federation
              </dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                Module Federation enables micro frontends to share code
                dynamically, reducing duplication and improving scalability. It
                allows teams to build independent applications that seamlessly
                integrate at runtime.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon
                  aria-hidden="true"
                  className="size-6 text-gray-800"
                />
              </div>
              <dt className="mt-4 text-base font-semibold text-gray-600">
                Webpack 5
              </dt>
              <dd className="mt-2 text-base/7 text-gray-400">
                Webpack 5 introduces Module Federation, improved caching, and
                better tree shaking. It enhances build performance and enables
                seamless micro frontend integration across applications.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  );
};
export default HomePage;
