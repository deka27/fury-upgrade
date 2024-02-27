import Image from 'next/image';
import Link from 'next/link';

export function ItemCard({ title, description, image, link }) {
     return (
          <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
               <Link href={link}>
                    <div>
                         <Image class="object-cover w-full h-48" src={image} alt={title} />
                         <div className="py-5 text-center">
                              <div className="block text-md font-semibold text-gray-800 dark:text-white">{title}</div>
                              {/* <span class="text-sm text-gray-700 dark:text-gray-200">{description}</span> */}
                         </div>
                    </div>
               </Link>
          </div>
     );
}