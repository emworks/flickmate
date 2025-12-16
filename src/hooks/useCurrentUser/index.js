import { useState, useEffect } from "react";
import { UserService } from "src/services";

/**
 * Хук useCurrentUser — возвращает текущего пользователя
 *
 * Использует UserService для получения имени пользователя и хранит его
 * в локальном состоянии через useState, чтобы React реагировал на изменения.
 *
 * @returns {string|null} — имя текущего пользователя или null, если ещё не получено
 */
export function useCurrentUser() {
    const [currentUser, setCurrentUser] = useState(null)

    // useEffect выполняется один раз при монтировании компонента
    useEffect(() => {
        const user = UserService.getUsername();
        setCurrentUser(user)
    }, []) // пустой массив зависимостей: выполняется только один раз

    return currentUser
}
