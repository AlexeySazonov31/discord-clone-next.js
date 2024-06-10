import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function limitLengthFirstWord(str: string, limit: number, fullString = false){

  if(fullString){
    if( str.length > limit ){
      return str.slice(0, limit) + "...";
    }
  
    return str;
  } else {
    if( str.split(" ")[0].length > limit ){
      return str.slice(0, limit) + "...";
    }
  
    return str;
  }


}
