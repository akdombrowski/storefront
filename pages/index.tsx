import React, { Component, useEffect } from "react";
import Router from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import LandingPage from "./landing";
import Link from "next/link";

const Index = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session) {
      Router.push("/components");
    }
  });

  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
      <LandingPage></LandingPage>
    </>
  );
};

export default Index;
