"use client";
import Image from "next/image"
import Link from "next/link"


import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/app/login/components/AuthForm"
import { auth } from "@/lib/firebase-config";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();


  return (
    <>
      <div className="container overflow-y-hidden relative flex h-[100vh] flex-col align-middle items-center justify-center md:grid lg:max-w-none lg:grid-col-1 lg:px-0 ">
      <Image
                src="/loginBG.svg"
                alt="Hero Logo"
                width={800}
                height={800}
                className="absolute translate-[-50%,-50%] left-[25%]"
              />
  
        <div className="lg:p-8 bg-white rounded-xl shadow-2xl" style={{zIndex:"99"}}>
          <div className="mx-auto py-8 flex w-full flex-col justify-around space-y-16 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-sm text-center text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
          </>
  );
}