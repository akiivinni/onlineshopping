import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase.config';

const useAuth = () => {
    const [currentuser, setCurrentuser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentuser(user);
            } else {
                setCurrentuser(null);
            }
        });
    }, []);

    return currentuser;
};

export default useAuth;
