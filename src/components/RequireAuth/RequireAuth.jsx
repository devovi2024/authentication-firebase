import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase';

const RequireAuth = ({children}) => {
    const [user] = useAuthState(auth);

    if (!user) {
        return <Navigate to="/signin" />;
    }

    return children;
};

export default RequireAuth;
