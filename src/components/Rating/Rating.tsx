import { FC } from "react"
import { FaStar, FaStarHalf } from "react-icons/fa";

type Props = {
   rating: number
}

const Rating: FC<Props> = ({ rating }) => {

   const fullStart = Math.floor(rating);
   const decimalPart = rating - fullStart
   const fullStarElements = Array(fullStart).fill(<FaStar />)

   let halfStarElement = null;

   if (decimalPart > 0) {
      halfStarElement = <FaStarHalf />
   }

   return <>
      {fullStarElements}{halfStarElement}
   </>
}

export default Rating