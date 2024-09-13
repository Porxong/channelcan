// app/services/page.tsx
"use strict";

import Link from "next/link";
import { MdNavigateNext } from "react-icons/md";

function Services() {
  return (
    <div className="min-h-[calc(100vh-28rem)]">
      <div className="w-full h-14 bg-gray-200 flex justify-between px-4 items-center">
        <h1>Service Introduction</h1>
        <div className="flex gap-1 items-center"><Link  href="/"><span className="hover:text-black hover:font-bold">Home</span></Link> <MdNavigateNext /> Service Introduction</div>
      </div>
      <section className="py-10 px-20">
        <div className="flex md:flex-row flex-col">
          <div className="flex-1">
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
          </div>
          <div className="flex-1">
            <div className="img"></div>
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="">
          <div className="">
            <div className="icon">
              icon
            </div>
            <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint tenetur, non maiores perferendis iusto placeat hic fugit, alias in corrupti veniam praesentium autem, dolor sed ex inventore nam aperiam assumenda!</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
