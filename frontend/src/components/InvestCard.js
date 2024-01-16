import Image from "next/image";

export default function InvestCard({ position,content,image, style }) {
  const isLeftPosition = position === 'left';

  return (
      <div className="flex flex-row align-middle items-center py-20 px-52 justify-center">
        {isLeftPosition ? (
          <>
            <div className="w-[60%] font-curvy text-3xl">
             {content}
            </div>
            <div className="w-[40%] flex justify-end">
              <Image
                src={image}
                width={350}
                height={350}
                className={style}
              />
            </div>
          </>
        ) : (
          <>
            <div className="w-[40%] flex justify-start">
              <Image
                src={image}
                width={350}
                height={350}
                className={style}
              />
            </div>
            <div className="w-[60%] font-curvy text-3xl">
              {content}
            </div>
          </>
        )}
      </div>
  );
}
