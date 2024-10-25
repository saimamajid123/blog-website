import Link from "next/link"

const Navbar = () => {
        return(
                <nav className="bg-blue-900 p-4">

                <div className="container h-[45px] mx-auto flex justify-between items-center">
                        <div className="text-white font-bold">
                                <Link href="/">Blog Website</Link>
                                </div>
                                <div className="flex space-x-4">
                                        <Link href="/"
                                        className="text-gray-300
                                         hover:text-white">Home
                                         </Link>
                                        <Link href="/about "                                 
                                         className="text-gray-300
                                         hover:text-white">
                                         About
                                         </Link>
                                        <Link href="/blogs"                                  

                                         className="text-gray-300
                                         hover:text-white">Blogs</Link>
                                        
                                </div>
                        </div>
                </nav>
                
        );
};


export default Navbar