import Link from "next/link";
import { elements } from "../../constants";

export default function Home() {
  return (
    <div className="font-bold">
      {elements.map((element, index) => (
        <div className=" flex flex-col items-center justify-center mx-40 my-20">
          <div className=" text-2xl font-bold text-blue-600">
            UI elements
          </div>
          <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-6  ">

            <Link href={element.link}>
              <div className=" font-bold items-center justify-center text-2xl text-gray-600">
                {element.name}
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
