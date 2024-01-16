const SIZES = {
    "lg" : "font-bold text-3xl",
    "md" : "font-bold text-2xl",
    "sm" : "font-bold text-xl"
}


export default function Heading({size,className,children}) {
  return (
    <>
        <div className={className + " " + SIZES[size] + " " + "font-mono" }>
            {children}
        </div>
    </>
  )
}
