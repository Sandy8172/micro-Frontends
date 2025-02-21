import React, { Suspense, useState, useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import PageNotFound404 from "../pages/PageNotFound404";
import MainWrapper from "../layouts/MainWrapper";
import Loading from "../ui/Loading";
import HomePage from "../pages/HomePage";

// Function to dynamically import remote apps with error handling
const loadRemoteComponent = (importFunc, fallbackMessage) => {
  return React.lazy(() =>
    importFunc().catch((error) => {
      console.error(`Failed to load remote component: ${fallbackMessage}`, error);
      return { default: () => <div className="text-red-500">{fallbackMessage}</div> };
    })
  );
};

// Safe dynamic imports with fallbacks
const ChatApp = loadRemoteComponent(() => import("chatApp/ChatComponent"), "Chat App is currently unavailable.");
const EmailApp = loadRemoteComponent(() => import("emailApp/EmailComponent"), "Email App is currently unavailable.");

const MainRoutes = {
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "chats",
      element: (
        <Suspense fallback={<Loading />}>
          <MainWrapper>
            <ChatApp />
          </MainWrapper>
        </Suspense>
      ),
    },
    {
      path: "mails",
      element: (
        <Suspense fallback={<Loading />}>
          <MainWrapper>
            <EmailApp />
          </MainWrapper>
        </Suspense>
      ),
    },
    {
      path: "*",
      element: <PageNotFound404 />,
    },
  ],
};

export default MainRoutes;
