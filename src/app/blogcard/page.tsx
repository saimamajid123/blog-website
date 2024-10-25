import Link from "next/link";

 const blogs = [
    { path: "blog1", title: "Blog post 1", description: " Morning Routine for a Productive Day" },
  { path: "blog2", title: "Blog post 2", description: " How to Save Money on a Tight Budget" },
  { path: "blog3", title: "Blog post 3", description: "Benefits of Yoga for Mind and Body" },
  { path: "blog4", title: "Blog post 4", description: "Simple Ways to Go Green at Home" },
  { path: "blog5", title: "Blog post 5", description: " Tips for Learning a New Language Faster" },
  { path: "blog6", title: "Blog post 6", description: " Healthy Snacking Ideas for Busy Days" },
   
    ];


const BlogCard = () => {
        return(
            <div className=" h-[600px] w-[700px]
            mx-auto grid grid-cols-3
              gap-4
             p-4 mb-[250px]">
            {blogs.map((blog)=>(
                <div key={blog.path} >
                <div className="bg-blue-200 rounded-lg mt-8
                text-black p-4 shadow-xl hover:border-4 hover:border-blue-900
                 hover:shadow-lg transition-shadow flex flex-col justify-center items-center">
                    <div className='h-[120px] w-[100%] bg-blue-900 rounded-lg'></div>
                    <h2 className="text-xl font-bold
                    mb-2 mt-2">{blog.title} </h2>
                    <p className="mb-4">{blog.description}</p>

                    <Link href={`/${blog.path}`}><button  className="bg-blue-900 text-white font-seibold px-4
                    py-2 rounded transition-colors
                    hover:bg-blue-700">
                        read more
                    </button></Link>
                </div>
                </div>
            ))}
            </div>
        );
    };

    export default BlogCard;
   



    