import { useState, useEffect } from "react";
import { UserService } from "src/services";

export function useCurrentUser() {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const user = UserService.getUsername();
        setCurrentUser(user)
    }, [])

    return currentUser
}