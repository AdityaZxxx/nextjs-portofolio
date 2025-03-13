// "use client";

// import blogPosts from "@/data/blog";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";

// interface BlogPostProps {
//   params: {
//     id: string;
//   };
// }

// const SingleBlogPost: React.FC<BlogPostProps> = ({ params }) => {
//   const router = useRouter();
//   interface BlogPost {
//     id: string;
//     title: string;
//     date: string;
//     image: string;
//     excerpt: string;
//     content?: string;
//   }

//   const [post, setPost] = useState<BlogPost | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Find the blog post with the matching ID
//     const foundPost = blogPosts.find((p) => p.id === params.id);

//     if (foundPost) {
//       setPost({ ...foundPost, id: foundPost.id.toString() });
//     } else {
//       // Redirect to blog page if post not found
//       router.push("/blog");
//     }

//     setIsLoading(false);
//   }, [params.id, router]);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="neo-brutalist-box p-6">Loading...</div>
//       </div>
//     );
//   }

//   if (!post) return null;

//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="min-h-screen py-20 px-6 md:px-12"
//     >
//       <div className="max-w-3xl mx-auto">
//         <motion.div
//           initial={{ y: -30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           className="mb-8"
//         >
//           <button
//             onClick={() => router.push("/blog")}
//             className="neo-button px-4 py-2 mb-6 inline-flex items-center"
//           >
//             <span className="mr-2">←</span> Back to Blog
//           </button>
//         </motion.div>

//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.1 }}
//           className="neo-brutalist-box overflow-hidden"
//         >
//           <div className="relative w-full h-64 md:h-96">
//             <Image
//               src={post.image}
//               alt={post.title}
//               fill
//               className="object-cover"
//               priority
//             />
//           </div>

//           <div className="p-8">
//             <span
//               className="text-sm inline-block neo-brutalist-box-accent2 px-3 py-1"
//               style={{ color: "var(--primary)" }}
//             >
//               {post.date}
//             </span>

//             <h1 className="text-3xl md:text-4xl font-bold my-4">
//               {post.title}
//             </h1>

//             <div className="neo-brutalist-box-secondary p-4 my-6">
//               <p className="text-lg italic">{post.excerpt}</p>
//             </div>

//             <div className="blog-content space-y-6">
//               {/* This would be your actual blog content, potentially from a CMS or markdown */}
//               {post.content && (
//                 <div dangerouslySetInnerHTML={{ __html: post.content }} />
//               )}

//               {/* Fallback content if no content field exists in your data */}
//               {!post.content && (
//                 <>
//                   <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                     Vivamus lacinia odio vitae vestibulum vestibulum. Cras
//                     porttitor metus justo, ut fringilla felis iaculis in.
//                   </p>
//                   <p>
//                     Fusce gravida felis nec erat pulvinar, at rutrum sem
//                     lacinia. Integer nec velit vel risus gravida aliquam. Donec
//                     non diam eu odio sagittis lobortis.
//                   </p>

//                   <h2 className="text-2xl font-bold mt-8 mb-4 inline-block neo-brutalist-box-accent1 py-2 px-4">
//                     Section Title
//                   </h2>

//                   <p>
//                     Phasellus auctor, nunc id ultricies hendrerit, ipsum neque
//                     ultricies erat, at hendrerit urna nisi a magna. Maecenas
//                     lobortis nisi eget augue lobortis varius.
//                   </p>

//                   <div className="neo-brutalist-box p-4 my-6">
//                     <blockquote className="text-lg italic pl-4 border-l-4 border-current">
//                       &quot;This is a powerful quote from the blog post that
//                       deserves special attention and visual treatment.&quot;
//                     </blockquote>
//                   </div>

//                   <p>
//                     Sed imperdiet urna in quam facilisis, eu commodo enim
//                     tempus. Proin a nunc ac quam ultrices pharetra in in ligula.
//                   </p>
//                 </>
//               )}
//             </div>

//             <div className="mt-12 pt-8 border-t border-gray-700">
//               <h3 className="text-xl font-bold mb-4">Share this post</h3>
//               <div className="flex space-x-4">
//                 <button className="neo-button px-4 py-2">Twitter</button>
//                 <button className="neo-button px-4 py-2">Facebook</button>
//                 <button className="neo-button px-4 py-2">LinkedIn</button>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="mt-16"
//         >
//           <h2 className="text-2xl font-bold mb-6 inline-block neo-brutalist-box py-2 px-4">
//             Related Posts
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {blogPosts
//               .filter((relatedPost) => relatedPost.id !== post.id)
//               .slice(0, 2)
//               .map((relatedPost, index) => (
//                 <div
//                   key={relatedPost.id}
//                   className={`neo-brutalist-box p-4 cursor-pointer ${
//                     index % 2 === 0
//                       ? "neo-brutalist-box-accent1"
//                       : "neo-brutalist-box-accent2"
//                   }`}
//                   onClick={() => router.push(`/blog/${relatedPost.id}`)}
//                 >
//                   <div className="h-40 relative mb-4">
//                     <Image
//                       src={relatedPost.image}
//                       alt={relatedPost.title}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <h3 className="text-lg font-bold mb-2">
//                     {relatedPost.title}
//                   </h3>
//                   <p className="text-sm">
//                     {relatedPost.excerpt.substring(0, 80)}...
//                   </p>
//                 </div>
//               ))}
//           </div>
//         </motion.div>
//       </div>
//     </motion.section>
//   );
// };

// export default SingleBlogPost;
"use client";

import blogPosts from "@/data/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface BlogPostProps {
  params: {
    id: string;
  };
}

const SingleBlogPost: React.FC<BlogPostProps> = () => {
  const router = useRouter();
  const Params = useParams();

  const { id } = Params;

  interface BlogPost {
    id: string;
    title: string;
    date: string;
    image: string;
    excerpt: string;
    content?: string;
  }

  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.id === id);

    if (foundPost) {
      setPost({ ...foundPost, id: foundPost.id.toString() });
    } else {
      router.push("/blog");
    }
    setIsLoading(false);
  }, [id, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="neo-brutalist-box p-6">Loading...</div>
      </div>
    );
  }

  if (!post) return null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-20 px-6 md:px-12"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8"
        >
          <button
            onClick={() => router.push("/blog")}
            className="neo-button px-4 py-2 mb-6 inline-flex items-center"
          >
            <span className="mr-2">←</span> Back to Blog
          </button>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="neo-brutalist-box overflow-hidden"
        >
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-8">
            <span
              className="text-sm inline-block neo-brutalist-box-accent2 px-3 py-1"
              style={{ color: "var(--primary)" }}
            >
              {post.date}
            </span>

            <h1 className="text-3xl md:text-4xl font-bold my-4">
              {post.title}
            </h1>

            <div className="neo-brutalist-box-secondary p-4 my-6">
              <p className="text-lg italic">{post.excerpt}</p>
            </div>

            <div className="blog-content space-y-6">
              {/* This would be your actual blog content, potentially from a CMS or markdown */}
              {post.content && (
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              )}

              {/* Fallback content if no content field exists in your data */}
              {!post.content && (
                <>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum vestibulum. Cras
                    porttitor metus justo, ut fringilla felis iaculis in.
                  </p>
                  <p>
                    Fusce gravida felis nec erat pulvinar, at rutrum sem
                    lacinia. Integer nec velit vel risus gravida aliquam. Donec
                    non diam eu odio sagittis lobortis.
                  </p>

                  <h2 className="text-2xl font-bold mt-8 mb-4 inline-block neo-brutalist-box-accent1 py-2 px-4">
                    Section Title
                  </h2>

                  <p>
                    Phasellus auctor, nunc id ultricies hendrerit, ipsum neque
                    ultricies erat, at hendrerit urna nisi a magna. Maecenas
                    lobortis nisi eget augue lobortis varius.
                  </p>

                  <div className="neo-brutalist-box p-4 my-6">
                    <blockquote className="text-lg italic pl-4 border-l-4 border-current">
                      &quot;This is a powerful quote from the blog post that
                      deserves special attention and visual treatment.&quot;
                    </blockquote>
                  </div>

                  <p>
                    Sed imperdiet urna in quam facilisis, eu commodo enim
                    tempus. Proin a nunc ac quam ultrices pharetra in in ligula.
                  </p>
                </>
              )}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <h3 className="text-xl font-bold mb-4">Share this post</h3>
              <div className="flex space-x-4">
                <button className="neo-button px-4 py-2">Twitter</button>
                <button className="neo-button px-4 py-2">Facebook</button>
                <button className="neo-button px-4 py-2">LinkedIn</button>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold mb-6 inline-block neo-brutalist-box py-2 px-4">
            Related Posts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter((relatedPost) => relatedPost.id !== post.id)
              .slice(0, 2)
              .map((relatedPost, index) => (
                <div
                  key={relatedPost.id}
                  className={`neo-brutalist-box p-4 cursor-pointer ${
                    index % 2 === 0
                      ? "neo-brutalist-box-accent1"
                      : "neo-brutalist-box-accent2"
                  }`}
                  onClick={() => router.push(`/blog/${relatedPost.id}`)}
                >
                  <div className="h-40 relative mb-4">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm">
                    {relatedPost.excerpt.substring(0, 80)}...
                  </p>
                </div>
              ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SingleBlogPost;
