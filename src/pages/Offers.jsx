import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";
import { db } from "../firebase.config";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import ListingItem from "../components/ListingItem/ListingItem";

const Offers = () => {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  // to Load more listings
  const [lastFetchedListing, setLastFetchedListing] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        // get the referece to the collection
        const listingsRef = collection(db, "listings");

        // Create a query
        const q = query(
          listingsRef,
          where("offer", "==", true),
          orderBy("timestamp", "desc"),
          limit(4)
        );

        // Implement the query
        const querySnap = await getDocs(q);

        //to load more properties in the page
        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchedListing(lastVisible);

        let listings = [];

        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setListings(listings);
        setLoading(false);
      } catch (error) {
        toast.error("Couldn't get any listings try again later");
      }
    };
    fetchListings();
  }, []);

  //To fetch more listing from the DB
  const onFetchMoreListings = async () => {
    try {
      // get the referece to the collection
      const listingsRef = collection(db, "listings");

      // Create a query
      const q = query(
        listingsRef,
        where("offer", "==", true),
        orderBy("timestamp", "desc"),
        startAfter(lastFetchedListing),
        limit(4)
      );

      // Implement the query
      const querySnap = await getDocs(q);

      //to load more properties in the page
      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchedListing(lastVisible);

      let listings = [];

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      // to add the more listings to the prev ones instead of replacing the prev list
      setListings((prevState) => [...prevState, ...listings]);
      setLoading(false);
    } catch (error) {
      toast.error("Couldn't get any listings try again later");
    }
  };

  //jsx
  return (
    <div className="category">
      <header>
        <p className="pageHeader">Offers</p>
      </header>

      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="categoryListings">
              {listings.map((listing) => (
                <ListingItem
                  listing={listing.data}
                  id={listing.id}
                  key={listing.id}
                ></ListingItem>
              ))}
            </ul>
          </main>
          <br />
          <br />
          {/* if there's more listing  */}
          {lastFetchedListing && (
            <p className="loadMore" onClick={onFetchMoreListings}>
              Load More Properties
            </p>
          )}
        </>
      ) : (
        <p>There are no offers at the moment</p>
      )}
    </div>
  );
};

export default Offers;
