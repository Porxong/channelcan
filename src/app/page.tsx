"use client"
import Image from "next/image";
import Product1 from "../../public/assets/images/iphone-15.jpg";
import { useEffect, useState } from "react";
import { DiHtml5Connectivity } from "react-icons/di";


export default function Home() {
  const [text, setText] = useState('immediately');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (text === 'immediately') {
        setText('now');
      } else if (text === 'now') {
        setText('immediately');
      }
    }, 1000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [text]); // Re-run effect every time `text` changes

  return (
    <main className="min-h-[calc(100vh-28rem)]">
      <section className="bg-cust-bgSectionOne h-96 bg-cover bg-center ">
        <div className="w-full flex flex-col items-center justify-end px-10 gap-2 h-full py-10">
          <h1 className="text-6xl font-bold text-white">Lorem ipsum dolor sit amet </h1>
          <p className="text-xl text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti assumenda unde minus aut placeat iusto voluptatem non libero aliquam accusantium, laboriosam ipsa illo sed. Necessitatibus quae illum sint totam officiis.</p>
        </div>
      </section>


      <section className="bg-white">
        <div className="flex justify-around my-8">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">39651+</h1>
            <p className="text-gray-400">Total Orders</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">10084+</h1>
            <p className="text-gray-400">Number of members</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold">3347+</h1>
            <p className="text-gray-400">User Reviews</p>
          </div>
        </div>
        <div className="flex justify-center my-8">
          <button className="uppercase bg-red-500 px-2 text-xl text-white font-bold p-1 rounded-sm">3 seconds,apply</button>
        </div>
      </section>


      <section className="bg-cust-bgSectionTwo md:h-96 bg-cover bg-center py-8">
        <h1 className=" w-full  text-center py-8 text-black text-xl font-bold">Do you have any plus friends?</h1>
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 flex items-center justify-center ">
            <div className="bg-gray-500 w-48 h-48 rounded-md relative">

              <div className="bg-gray-200 w-48 h-48 rounded-md absolute -left-4 -bottom-4 shadow-md shadow-gray-500 flex justify-center items-center">
              <DiHtml5Connectivity className='text-9xl text-blue-400  font-bold' />
              </div>
            </div>
          </div>
          <div className="flex-1 px-8">
            <div className="py-10 md:py-0">
              <h1>Now, KakaoTalk Channel</h1>
              <p className="text-gray-400"><span className="text-gray-600 cursor-pointer hover:text-black hover:font-bold">(Old) Plus Friend</span> changed to &quot; KakaoTalk Channel &quot; in 2019.
                Marketing on the KakaoTalk Channel, which is used by 50 million people in Korea,</p>
              <p className="text-gray-400">means that my KakaoTalk Channel is far ahead of my competitors.</p>
            </div>
            <div className="">
              <h1>I need to become famous.</h1>
              <p className="text-gray-400">Your KakaoTalk channel is already great.
                It&apos;s just that people don&apos;t know about it. Become famous!
                Increase your KakaoTalk channel friends through marketing.</p>
              {/* <p>can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`. can be escaped with `&quot;`, `&ldquo;`, `&#34;`, `&rdquo;`.</p> */}
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="py-10">
          <h1 className="flex justify-center text-xl font-bold text-black">Why on earth would you need it?</h1>
          <div className="flex gap-4 py-10 px-20 flex-col md:flex-row">
            <div className="flex-1 rounded-md shadow-md shadow-red-gray-500">
              <div className="h-44 overflow-hidden">
                <Image
                  alt='img'
                  src={Product1}
                  width={100}
                  height={80}
                  className="w-full h-auto"
                />
              </div>
              <div className="py-8 px-4">
                <h1 className="flex justify-start text-xl font-bold text-black">Individual/Self-Employed</h1>
                <p>Is your KakaoTalk channel trustworthy to customers?
                  If the number of friends added to your Kakao channel is too low,
                  it is time to increase trustworthiness. Solve it by increasing your friends!</p>
              </div>
            </div>
            <div className="flex-1 rounded-md shadow-md shadow-red-gray-500">
              <div className="h-44 overflow-hidden">
                <Image
                  alt='img'
                  src={Product1}
                  width={100}
                  height={80}
                  className="w-full h-auto"
                />
              </div>
              <div className="py-8 px-4">
                <h1 className="flex justify-start text-xl font-bold text-black">Individual/Self-Employed</h1>
                <p>Is your KakaoTalk channel trustworthy to customers?
                  If the number of friends added to your Kakao channel is too low,
                  it is time to increase trustworthiness. Solve it by increasing your friends!</p>
              </div>
            </div>
            <div className="flex-1 rounded-md shadow-md shadow-red-gray-500">
              <div className="h-44 overflow-hidden">
                <Image
                  alt='img'
                  src={Product1}
                  width={100}
                  height={80}
                  className="w-full h-auto"
                />
              </div>
              <div className="py-8 px-4">
                <h1 className="flex justify-start text-xl font-bold text-black">Individual/Self-Employed</h1>
                <p>Is your KakaoTalk channel trustworthy to customers?
                  If the number of friends added to your Kakao channel is too low,
                  it is time to increase trustworthiness. Solve it by increasing your friends!</p>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className=" py-10">
        <h1 className="flex justify-center text-xl font-bold text-black">How does it work?</h1>
        <div className="flex px-20 gap-10 justify-center py-10 md:flex-wrap ">
          <div className=" w-48 flex flex-col justify-center items-center">
            <div className="h-44 w-44 rounded-full bg-red-200 shadow-md flex justify-center items-center">
              image
            </div>
            <div className="h-16 w-16 rotate-45 rounded-tl-full bg-gray-50 rounded-br-full flex justify-center items-center  shadow-sm">
              <div className="h-12 w-12  rounded-tl-full bg-gray-100 rounded-br-full flex justify-center items-center">
                <div className="h-8 w-8  rounded-tl-full bg-gray-200 rounded-br-full flex justify-center items-center">
                  <div className="h-4 w-4  rounded-tl-full bg-gray-300 rounded-br-full flex justify-center items-center">
                    <div className="h-1 w-1  rounded-tl-full bg-gray-400 rounded-br-full " />
                  </div>
                </div>
              </div>
            </div>
            <strong>1. Work progress</strong>
          </div>
          <div className=" w-48 flex flex-col justify-center items-center">
            <div className="h-44 w-44 rounded-full bg-red-200 shadow-md flex justify-center items-center">
              image
            </div>
            <div className="h-16 w-16 rotate-45 rounded-tl-full bg-gray-50 rounded-br-full flex justify-center items-center  shadow-sm">
              <div className="h-12 w-12  rounded-tl-full bg-gray-100 rounded-br-full flex justify-center items-center">
                <div className="h-8 w-8  rounded-tl-full bg-gray-200 rounded-br-full flex justify-center items-center">
                  <div className="h-4 w-4  rounded-tl-full bg-gray-300 rounded-br-full flex justify-center items-center">
                    <div className="h-1 w-1  rounded-tl-full bg-gray-400 rounded-br-full " />
                  </div>
                </div>
              </div>
            </div>
            <strong>1. Work progress</strong>
          </div>
          <div className=" w-48 flex flex-col justify-center items-center">
            <div className="h-44 w-44 rounded-full bg-red-200 shadow-md flex justify-center items-center">
              image
            </div>
            <div className="h-16 w-16 rotate-45 rounded-tl-full bg-gray-50 rounded-br-full flex justify-center items-center  shadow-sm">
              <div className="h-12 w-12  rounded-tl-full bg-gray-100 rounded-br-full flex justify-center items-center">
                <div className="h-8 w-8  rounded-tl-full bg-gray-200 rounded-br-full flex justify-center items-center">
                  <div className="h-4 w-4  rounded-tl-full bg-gray-300 rounded-br-full flex justify-center items-center">
                    <div className="h-1 w-1  rounded-tl-full bg-gray-400 rounded-br-full " />
                  </div>
                </div>
              </div>
            </div>
            <strong>1. Work progress</strong>
          </div>
          <div className=" w-96 flex flex-col justify-center items-center">
            <div className="h-80 w-80 rounded-full bg-red-200 shadow-md flex justify-center items-center">
              image
            </div>
            <div className="h-20 w-20 rotate-45 rounded-tl-full bg-gray-50 rounded-br-full flex justify-center items-center  shadow-sm">
              <div className="h-16 w-16  rounded-tl-full bg-gray-100 rounded-br-full flex justify-center items-center">
                <div className="h-12 w-12  rounded-tl-full bg-gray-200 rounded-br-full flex justify-center items-center">
                  <div className="h-8 w-8  rounded-tl-full bg-gray-300 rounded-br-full flex justify-center items-center">
                    <div className="h-4 w-4  rounded-tl-full bg-gray-300 rounded-br-full flex justify-center items-center">
                      <div className="h-1 w-1  rounded-tl-full bg-gray-400 rounded-br-full " />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <strong>1. Work progress</strong>
          </div>
        </div>
      </section>


      <section className=" py-10">
        <h1 className="flex justify-center text-xl font-bold text-black">While you're struggling, someone else is experiencing the effects.</h1>
        
        <div className="flex justify-center items-center md:px-20">
          <table className="table-auto mt-2  overflow-scroll">
            <thead className="text-nowrap ">
              <tr className=" text-black capitalize">
                {["Application date", "customer", "link", "Progress"].map((header, index) => (

                  <th key={index}>
                    <p className="bg-gray-400 text-center p-0.5 md:py-2 md:px-2  text-nowrap text-sm"> {header}</p>
                  </th>

                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <p className={`text-center p-0.5 md:py-2 bg-gray-200 md:px-2  text-nowrap text-xs`}>20/9/2024</p>
                </th>
                <th>
                  <p className={`text-center p-0.5 md:py-2 bg-gray-200 md:px-2  text-nowrap text-xs`}>MR somchit</p>
                </th>
                <th>
                  <p className={`text-center p-0.5 md:py-2 bg-gray-200 md:px-2  text-nowrap text-xs`}> https://example.com/reduce-friends</p>
                </th>
                <th>
                  <p className={`text-center p-0.5 md:py-2 bg-gray-200 md:px-2  text-nowrap text-xs`}>Currently up 55 people</p>
                </th>
                
              </tr>
              <tr>
                <th>
                  <p className={`text-center p-0.5 md:py-2 bg-gray-200 md:px-2  text-nowrap text-xs`}>20/9/2024</p>
                </th>
                <th>
                  <p className={`text-center p-0.5 md:py-2 bg-gray-200 md:px-2  text-nowrap text-xs`}>MR somchit</p>
                </th>
                <th>
                  <p className={`text-center p-0.5 md:py-2 bg-gray-200 md:px-2  text-nowrap text-xs`}> https://example.com/reduce-friends</p>
                </th>
                <th>
                  <p className={`text-center p-0.5 md:py-2 bg-gray-200 md:px-2  text-nowrap text-xs`}>Currently up 55 people</p>
                </th>
                
              </tr>
              <tr>
                <th>
                  <p className={`text-center p-0.5 md:py-2 bg-gray-200 md:px-2  text-nowrap text-xs`}>20/9/2024</p>
                </th>
                <th>
                  <p className={`text-center p-0.5 md:py-2 bg-gray-200 md:px-2  text-nowrap text-xs`}>MR somchit</p>
                </th>
                <th>
                  <p className={`text-center p-0.5 md:py-2 bg-gray-200 md:px-2  text-nowrap text-xs`}> https://example.com/reduce-friends</p>
                </th>
                <th>
                  <p className={`text-center p-0.5 md:py-2 bg-gray-200 md:px-2  text-nowrap text-xs`}>Currently up 55 people</p>
                </th>
                
              </tr>
            </tbody>
          </table>
        </div>

      </section>


      <section className="py-10">
        <div className="flex justify-center flex-col items-center">
          <h1 className="flex justify-center text-2xl font-bold text-black">The KakaoTalk channel you absolutely need,</h1>
          <p className="flex justify-center text-2xl font-bold text-black">
            <span className="bg-red-600 px-2 text-white uppercase">{text}</span>
            Become famous.</p>
          <p>Become famous in just 3 seconds! Kakao Channel Friend Addition Marketing.</p>
        </div>
        <div className="flex justify-center my-8">
          <button className="uppercase bg-red-500 px-2 text-xl text-white font-bold p-1 rounded-sm">3 seconds,apply</button>
        </div>
      </section>


    </main>
  );
}
