import OrbitingCircles from '@/components/magicui/orbiting-circles';
import React from 'react'
import { USPFeatures } from './usp-features';

function USP() {
  return (
    <div className='p-8 grid grid-cols-2'>
      <div>
        <h2 className='text-5xl text-center font-semibold '>
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-r from-indigo-400 to-purple-800 dark:from-indigo-500 dark:to-purple-500 bg-clip-text text-center font-semibold leading-none text-transparent ">
            Why Choose us ?
          </span>
        </h2>
        <USPFeatures />
      </div>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
        <span className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-indigo-600 to-purple-900 bg-clip-text text-center font-semibold leading-none text-transparent dark:from-white dark:to-black text-3xl'>EquiSol</span>
        {/* Inner Circles */}
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={20}
          delay={20}
          radius={80}
        >
          <Icons.solana />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[30px] border-none bg-transparent"
          duration={20}
          delay={10}
          radius={80}
        >
          <Icons.saber />
        </OrbitingCircles>

        {/* Outer Circles (reverse) */}
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          reverse
        >
          <Icons.raydium />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={190}
          duration={20}
          delay={20}
          reverse
        >
          <Icons.serum />
        </OrbitingCircles>
      </div>
    </div>
  )
}

export default USP


const Icons = {
  serum: () => (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 251 283.9"
      style={{ background: "new 0 0 251 283.9" }}
      xmlSpace="preserve"
    >
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n\t.st0{fill:url(#SVGID_1_);}\n\t.st1{fill:url(#SVGID_2_);}\n\t.st2{fill:url(#SVGID_3_);}\n"
        }}
      />
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="125.5"
        y1="52.0877"
        x2="125.5"
        y2="253.0878"
        gradientTransform="matrix(1 0 0 -1 0 285.9755)"
      >
        <stop offset={0} style={{ stopColor: "#05AAC5" }} />
        <stop offset={1} style={{ stopColor: "#71E0EC" }} />
      </linearGradient>
      <path
        className="st0"
        d="M125.5,233.9c-43.1,0-78.1-35-78.1-78.1c0-41.9,70.7-115.9,73.7-119l3.7-3.9l3.8,3.8c3.1,3.1,75,77.1,75,119
	C203.6,198.9,168.6,233.9,125.5,233.9L125.5,233.9z M124.9,48c-6.2,6.7-19.2,21.2-32.1,38.2c-22.9,30.2-35,54.2-35,69.5
	c0,37.3,30.4,67.7,67.7,67.7s67.7-30.4,67.7-67.7c0-15.3-12.3-39.3-35.6-69.5C144.5,69.3,131.2,54.7,124.9,48z"
      />
      <linearGradient
        id="SVGID_2_"
        gradientUnits="userSpaceOnUse"
        x1="125.6"
        y1="27.0877"
        x2="125.6"
        y2="269.3627"
        gradientTransform="matrix(1 0 0 -1 0 285.9755)"
      >
        <stop offset={0} style={{ stopColor: "#05AAC5" }} />
        <stop offset={1} style={{ stopColor: "#71E0EC" }} />
      </linearGradient>
      <path
        className="st1"
        d="M125.5,258.9c-56.9,0-103.1-46.3-103.1-103.1c0-55.6,77.6-133.2,80.9-136.4c2-2,5.4-2,7.4,0s2,5.4,0,7.4
	c-0.8,0.8-77.8,77.8-77.8,129c0,51.1,41.6,92.7,92.7,92.7s92.7-41.6,92.7-92.7c0-21-13.6-50-39.4-84.1
	c-19.8-26.1-39.7-45.9-39.9-46.1c-2.1-2-2.1-5.3,0-7.4c2-2.1,5.3-2.1,7.4,0c3.4,3.3,82.4,81.9,82.4,137.6
	C228.6,212.6,182.4,258.9,125.5,258.9L125.5,258.9z"
      />
      <linearGradient
        id="SVGID_3_"
        gradientUnits="userSpaceOnUse"
        x1="125.5"
        y1="2.0877"
        x2="125.5"
        y2="285.9755"
        gradientTransform="matrix(1 0 0 -1 0 285.9755)"
      >
        <stop offset={0} style={{ stopColor: "#05AAC5" }} />
        <stop offset={1} style={{ stopColor: "#71E0EC" }} />
      </linearGradient>
      <path
        className="st2"
        d="M125.5,283.9C56.3,283.9,0,227.6,0,158.4c0-28.6,14.4-63.8,42.7-104.5C63.6,23.9,84.1,2.5,85,1.6
	c2-2.1,5.3-2.1,7.4-0.1s2.1,5.3,0.1,7.4C92.3,9.1,71.6,30.7,51.2,60c-26.7,38.3-40.8,72.3-40.8,98.4c0,63.4,51.6,115.1,115.1,115.1
	s115.1-51.6,115.1-115.1c0-26.1-14.2-60.1-41.1-98.4C178.9,30.7,158,9.1,157.8,8.9c-2-2.1-2-5.4,0.1-7.4s5.4-2,7.4,0.1
	c3.5,3.6,85.7,89,85.7,156.8C251,227.6,194.7,283.9,125.5,283.9z"
      />
    </svg>
  ),
  saber: () => (
    <svg width="21" height="22" viewBox="0 0 21 22" fill="currentcolor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M20.8861 1.54432C20.8861 0.967563 20.4185 0.500012 19.8418 0.500012L4.13862 0.5C3.45243 0.5 2.85201 0.599529 2.33736 0.798589C1.82272 1.01296 1.39384 1.29624 1.05075 1.64843C0.693353 2.01592 0.428883 2.42936 0.257335 2.88873C0.0857855 3.36341 8.50456e-06 3.85341 8.50456e-06 4.35872V6.76582C8.50456e-06 7.91933 0.93511 8.85443 2.08862 8.85443H14.6203L8.35446 4.67722H19.8418C20.4185 4.67722 20.8861 4.20966 20.8861 3.63291V1.54432ZM0 20.3417C0 20.9185 0.46755 21.3861 1.0443 21.3861L16.7475 21.3861C17.4337 21.3861 18.0341 21.2865 18.5487 21.0875C19.0634 20.8731 19.4922 20.5898 19.8353 20.2376C20.1927 19.8701 20.4572 19.4567 20.6288 18.9973C20.8003 18.5226 20.8861 18.0327 20.8861 17.5273V15.1202C20.8861 13.9667 19.951 13.0316 18.7975 13.0316H6.26581L12.5316 17.2088H1.0443C0.46755 17.2088 0 17.6764 0 18.2532V20.3417Z"></path></svg>

  ),

  solana: () => (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 397.7 311.7"
      style={{ "background": "new 0 0 397.7 311.7" }}
      xmlSpace="preserve"
    >
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n        .st0{fill:url(#SVGID_1_);}\n        .st1{fill:url(#SVGID_2_);}\n        .st2{fill:url(#SVGID_3_);}\n      "
        }}
      />
      <linearGradient
        id="SVGID_1_"
        gradientUnits="userSpaceOnUse"
        x1="360.8791"
        y1="351.4553"
        x2="141.213"
        y2="-69.2936"
        gradientTransform="matrix(1 0 0 -1 0 314)"
      >
        <stop offset={0} style={{ stopColor: "#00FFA3" }} />
        <stop offset={1} style={{ stopColor: "#DC1FFF" }} />
      </linearGradient>
      <path
        className="st0"
        d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5
	c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z"
      />
      <linearGradient
        id="SVGID_2_"
        gradientUnits="userSpaceOnUse"
        x1="264.8291"
        y1="401.6014"
        x2="45.163"
        y2="-19.1475"
        gradientTransform="matrix(1 0 0 -1 0 314)"
      >
        <stop offset={0} style={{ stopColor: "#00FFA3" }} />
        <stop offset={1} style={{ stopColor: "#DC1FFF" }} />
      </linearGradient>
      <path
        className="st1"
        d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5
	c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z"
      />
      <linearGradient
        id="SVGID_3_"
        gradientUnits="userSpaceOnUse"
        x1="312.5484"
        y1="376.688"
        x2="92.8822"
        y2="-44.061"
        gradientTransform="matrix(1 0 0 -1 0 314)"
      >
        <stop offset={0} style={{ stopColor: "#00FFA3" }} />
        <stop offset={1} style={{ stopColor: "#DC1FFF" }} />
      </linearGradient>
      <path
        className="st2"
        d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4
	c5.8,0,8.7-7,4.6-11.1L333.1,120.1z"
      />
    </svg>
  ),
  raydium: () => (
    <svg
      fill="none"
      height={33}
      viewBox="0 0 29 33"
      width={29}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <linearGradient
        id="a"
        gradientUnits="userSpaceOnUse"
        x1="28.3168"
        x2="-1.73336"
        y1="8.19162"
        y2="20.2086"
      >
        <stop offset={0} stopColor="#c200fb" />
        <stop offset=".489658" stopColor="#3772ff" />
        <stop offset=".489758" stopColor="#3773fe" />
        <stop offset={1} stopColor="#5ac4be" />
      </linearGradient>
      <g fill="url(#a)">
        <path d="m26.8625 12.281v11.4104l-12.6916 7.3261-12.69859-7.3261v-14.65937l12.69859-7.33322 9.7541 5.63441 1.4723-.84941-11.2264-6.48381-14.1709 8.18262v16.35818l14.1709 8.1826 14.171-8.1826v-13.1092z" />
        <path d="m10.6176 23.6985h-2.12353v-7.1209h7.07843c.6697-.0074 1.3095-.2782 1.7811-.7538.4716-.4755.737-1.1176.7388-1.7874.0038-.3311-.0601-.6596-.1879-.9651-.1279-.3056-.3168-.5817-.5554-.8115-.2308-.2372-.5071-.4253-.8124-.553-.3053-.1278-.6333-.1925-.9642-.1903h-7.07843v-2.16595h7.08543c1.2405.00743 2.4281.50351 3.3053 1.38065.8771.8772 1.3732 2.0648 1.3806 3.3052.0076.9496-.2819 1.8777-.8281 2.6544-.5027.7432-1.2111 1.3237-2.0386 1.6705-.8194.2599-1.6745.3889-2.5341.3823h-4.247z" />
        <path d="m20.2159 23.5215h-2.4775l-1.9111-3.3339c.7561-.0463 1.5019-.1988 2.2155-.453z" />
        <path d="m25.3831 9.90975 1.4652.81405 1.4653-.81405v-1.72005l-1.4653-.84941-1.4652.84941z" />
      </g>
    </svg>

  )
};
