import { ReactNode } from "react"

interface ContentCardProps {
    width: string,
    height:string,
    children: ReactNode
}


const ContentCard = ({width,height,children}:ContentCardProps) => {
  return (
    <article
          className="bg-gradient-to-b from-[#466869] to-[#1b4f52] rounded-[21px] flex flex-col space-y-4 items-center justify-center "
          style={{ width: width, height:height }}
      >
          {children}
    </article>
  );
}

export default ContentCard
