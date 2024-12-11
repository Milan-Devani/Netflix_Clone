import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Movieswishlist from "./Wishlistpage/Movieswishlist";
import Tvshowswishlist from "./Wishlistpage/Tvshowswishlist";
import Preloader from "./Preloader";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function NetflixWishlistpage() {
  const [loading, setLoading] = useState(true);
  const wishlistitem = useSelector((state) => state.wishlistitem.items);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="main-preloader">
        <Preloader />
      </div>
    );
  }

  
  const moviewishlistitems = wishlistitem.filter(
    (item) => item.media_type === "movie"
  );

  const tvshowwishlistitems = wishlistitem.filter(
    (item) => item.media_type === "tv" || !item.media_type
  );

  const isEmpty = moviewishlistitems.length === 0 && tvshowwishlistitems.length === 0;


  return (
    <div className="pb-[80px] px-[15px]">
      <Navbar />
      <div className="px-16">
        <div className="pb-[35px] pt-[20px]">
          <h1 className="text-[24px] font-NetflixSans text-white underline">
            My Wishlist
          </h1>
        </div>
        {isEmpty ? (
          <div className="text-white text-center">
            <p></p>
            <Link to="/Homepage">No wishlist added</Link>
          </div>
        ) : (
          <>
            {moviewishlistitems.length > 0 && <Movieswishlist />}
            {tvshowwishlistitems.length > 0 && <Tvshowswishlist />}
          </>
        )}
      </div>
    </div>
  );
}

export default NetflixWishlistpage;


// import React, { useEffect, useState } from "react";
// import Navbar from "./Navbar";
// import Movieswishlist from "./Wishlistpage/Movieswishlist";
// import Tvshowswishlist from "./Wishlistpage/Tvshowswishlist";
// import Preloader from "./Preloader";

// function NetflixWishlistpage() {

//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 1500);

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return (
//       <div className="main-preloader">
//         <Preloader />
//       </div>
//     );
//   }

//   return (
//     <div className="pb-[30px] px-[15px]">
//       <Navbar />
//       <div className="px-16">
//         <div className="pb-[35px] pt-[20px]">
//           <h1 className="text-[24px] font-NetflixSans text-white underline">
//             My Wishlist
//           </h1>
//         </div>
//         <Movieswishlist />
//         <Tvshowswishlist />
//       </div>
//     </div>
//   );
// }

// export default NetflixWishlistpage;
