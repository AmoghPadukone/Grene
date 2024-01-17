import Image from "next/image";
{
}
export default function Footer2() {
  return (
    <div>
      <div className="spacer">
        <img src="/footerWave.svg" height="100px" />
      </div>
      <footer className=" absolute bg-[#E2F19E] w-[100%]  font-curvy  block z-1  ">
        <div className="flex md:justify-between px-[10%] flex-col md:flex-row  md:items-center">
          <div id="left_logo_text" className="font-curvy  text-7xl md:text-8xl">
            {" "}
            Grene
          </div>
          <div
            id="right_links"
            className="flex flex-col  text-2xl gap-6 md:gap-3 mt-5 md:mt-6 md:text-right underline"
          >
            <div className="hover:scale-105 transition-all">
              <a href="/">Join our renewable grid</a>
            </div>
            <div className="hover:scale-105 transition-all">
              <a href="/">Ongoing Projects</a>
            </div>
            <div className="hover:scale-105 transition-all">
              <a href="/">Blogs</a>
            </div>

            <div className=" md:mt-5 flex md:justify-end gap-8">
              <a href="tel:+91 88618 30388">
                <div className="social-icon hover:scale-125 transition-all">
                  <img src="/socialIcons/phone.svg"></img>
                </div>
              </a>
              <a href="mailto:someone@example.com">
                <div className="social-icon hover:scale-125 transition-all">
                  <img src="/socialIcons/email.svg"></img>
                </div>
              </a>
              <a href="https://www.instagram.com">
                <div className="social-icon hover:scale-125 transition-all">
                  <img src="/socialIcons/insta.svg"></img>
                </div>
              </a>
              <a href="/">
                <div className="social-icon hover:scale-125 transition-all">
                  <img src="/socialIcons/x.svg"></img>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="  text-center w-[100%] pt-[8%] sm:pt-[5%] sm:pb-2 bottom-5 text-xl font-curvy z-50">
          <p>©2024 Grene. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
