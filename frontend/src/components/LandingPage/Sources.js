import Image from "next/image";
import "./LandingPageStyles.css";

export default function Sources() {
  // imprort components here
  return (
    <section className=" overflow-hidden	">
      <div className="relative ml-[5vw]  py-2 text-5xl lg:text-7xl	font-medium font-curvy">
        Investment <br />
        Sources
      </div>
      <div className=" mt-[10%] lg:mt-14 xl:mt-0">
        <div class="orange-wave">
          <Image
            draggable="false"
            src="/solar.svg"
            alt="solar curve banner"
            // width={1000}
            fill={true}
            // sizes="(max-width: 768px) 100%, (max-width: 1200px) 50vw, 33vw"
            // height={350}
            // className="pl-12"
          />
        </div>
        <div class="blue-wave">
          <Image
            draggable="false"
            src="/wind.svg"
            alt="solar curve banner"
            // width={1000}
            fill={true}
            // sizes="(max-width: 768px) 100%, (max-width: 1200px) 50vw, 33vw"
            // height={350}
            // className="pl-12"
          />
        </div>
        <div class="turquoise-wave">
          <Image
            draggable="false"
            src="/hydro.svg"
            alt="solar curve banner"
            // width={1000}
            fill={true}
            // sizes="(max-width: 768px) 100%, (max-width: 1200px) 50vw, 33vw"
            // height={350}
            // className="pl-12"
          />
        </div>
      </div>
    </section>
  );
}
