// app/services/page.tsx
"use strict";

import Templatex from "@/components/templatex";
import Template_x from "@/components/template-x";
import Link from "next/link";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import Template from "@/components/template";

function Services() {
  return (
    <div className="min-h-[calc(100vh-28rem)]">
      <div className="w-full h-14 bg-gray-200 flex justify-between px-4 items-center">
        <h1>Service Introduction</h1>
        <div className="flex gap-1 items-center"><Link href="/"><span className="hover:text-black hover:font-bold">Home</span></Link> <MdNavigateNext /> Service Introduction</div>
      </div>
      <section className="py-10 px-20">
        <div className="flex md:flex-row flex-col">
          <div className="flex-1">
            <Template>
              <h1 className="text-black text-2xl font-bold py-8">KakaoTalk Channel Friend Addition Marketing</h1>
              <p className="text-gray-400 my-8">Marketing is becoming more and more difficult.
                If it is effective, everyone rushes to do marketing.
                Blog marketing, Instagram marketing, etc. are becoming saturated.
                Now is the time to start with KakaoTalk marketing.
                The first domestic KakaoTalk channel friend addition marketing.
                We will proceed with care in the channel section.</p>
              <p className="text-sm py-8">Increasing the number of friends on your KakaoTalk channel increases your credibility.</p>
              <div className="my-8 flex border-t ">
                <div className=" flex flex-col justify-center w-full gap-3 items-center">
                  <button className="border w-64 p-1 bg-red-500 rounded-md uppercase font-bold text-white text-nowrap">apply now and get 5 free</button>
                  <button className="border w-64 p-1 bg-green-500 rounded-md uppercase font-bold text-white text-nowrap">service price/application</button>
                </div>
                <div className="my-8 text-sm">
                  <h1>Apply today, simply and easily.</h1>
                </div>
              </div>
            </Template>
          </div>
          <div className="flex-1 w-full flex-col justify-center items-center  flex py-8">
            <Template_x>
              <div className="img w-64 bg-gray-400 h-64 my-8 rounded-md"><p>imge</p></div>
            </Template_x>

            <Template_x>
              <h1 className="text-black text-2xl font-bold py-8 text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
            </Template_x>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="flex flex-wrap gap-4 px-4 justify-center">
          <Templatex>
            <div className="md:flex-1 w-60">
              <div className="icon">
                <IoIosPhonePortrait className="text-9xl" />
              </div>
              <h1 className="text-black text-xl font-bold">Simple application</h1>
              <p className="text-gray-400 my-2">It&apos;s very easy and simple to apply.
                It only takes 5 minutes.</p>
            </div>
          </Templatex>
          <Templatex>
          <div className="md:flex-1 w-60">
            <div className="icon">
              <IoIosPhonePortrait className="text-9xl" />
            </div>
            <h1 className="text-black text-xl font-bold">Simple application</h1>
            <p className="text-gray-400 my-2">It&apos;s very easy and simple to apply.
              It only takes 5 minutes.</p>
          </div>
          </Templatex>
            
          <Template_x>
            <div className="flex">
              <div className="md:flex-1 w-60">
                <div className="icon">
                  <IoIosPhonePortrait className="text-9xl" />
                </div>
                <h1 className="text-black text-xl font-bold">Simple application</h1>
                <p className="text-gray-400 my-2">It&apos;s very easy and simple to apply.
                  It only takes 5 minutes.</p>
              </div>
              <div className="md:flex-1 w-60">
                <div className="icon">
                  <IoIosPhonePortrait className="text-9xl" />
                </div>
                <h1 className="text-black text-xl font-bold">Simple application</h1>
                <p className="text-gray-400 my-2">It&apos;s very easy and simple to apply.
                  It only takes 5 minutes.</p>
              </div>
            </div>
          </Template_x>



        </div>
      </section>
    </div>
  );
}

export default Services;
