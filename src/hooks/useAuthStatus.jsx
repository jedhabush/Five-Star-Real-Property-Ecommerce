import { useEffect, useState, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useAuthStatus = () => {
  //
  const [loggedIn, setLoggedIn] = useState(false);
  // This to check if we are logged in then change setLoadingStatus to false but SetLoggedIn to true
  const [loadingStatus, setLoadingStatus] = useState(true);

  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        }
        setLoadingStatus(false);
      });
    }

    return () => {
      isMounted.current = false;
    };
  }, [isMounted]);

  return { loggedIn, loadingStatus };
};

/*
This is a custom hook to check if user is logged in, if so we setLoadingStatus to false and vice versa
This enable the site to get the user data before the component rerender the page and avoid crashing
*/
