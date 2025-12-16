import { useState, useEffect, useRef } from "react";
import cx from "classnames";
import { useCurrentUser, useLocalStorage, useMessageChannel } from "src/hooks"
import styles from "./index.module.css"

/**
 * Компонент чата для совместного просмотра фильма
 * 
 * Props:
 *   - movieId: string | undefined
 *       Идентификатор фильма. Чат привязан к конкретному фильму.
 *       Если movieId нет, компонент не рендерится.
 */
export function Chat({ movieId }) {
    // Пока movieId undefined (например, данные ещё не загрузились), компонент не рендерится
    // Это также предотвращает ненужные вызовы useLocalStorage и useMessageChannel
    // и ненужное создание localStorage и BroadcastChannel с пустым movieId
    if (!movieId) {
        return null // TODO: использовать loader
    }

    const currentUser = useCurrentUser()

    // для работы с DOM через React необходимо использовать Refs
    const messagesEndRef = useRef(null) // для скролла к последнему сообщению
    const inputRef = useRef(null)       // для фокуса на поле ввода

    // Локальное состояние сообщений с синхронизацией в localStorage
    // Хук useLocalStorage создаёт реактивное состояние поверх адаптера, который работает с localStorage
    // Ключ в localStorage зависит от movieId, чтобы чат был привязан к конкретному фильму
    const { value: messages, setValue: setMessages } = useLocalStorage(`flickmate_chat_${movieId}`, [])

    // Локальное состояние поля ввода
    const [inputValue, setInputValue] = useState("")

    // Broadcast Channel для чата в реальном времени
    // useMessageChannel оборачивает адаптер BroadcastChannel в React-хук
    // callback onMessage вызывается при приходе нового сообщения от других вкладок
    const { send: sendChannelMessage } = useMessageChannel(`flickmate_channel_${movieId}`, (message) => {
        // Добавляем новое сообщение из другой вкладки в локальное состояние через localStorage
        setMessages(prev => [...prev, message]);
    })

    // Функция отправки сообщения при сабмите формы
    const sendMessage = (event) => {
        event.preventDefault()
        if (!inputValue.trim()) return // пустое сообщение не отправляем

        const message = {
            id: `${currentUser}_${Date.now()}`, // уникальный ID используется как key при рендеринге списка сообщений
            sender: currentUser,
            text: inputValue.trim(),
        };

        // Добавляем сообщение в текущую вкладку
        setMessages(prev => [...prev, message]);

        // Отправляем сообщение через BroadcastChannel в другие вкладки
        sendChannelMessage(message);

        // Очищаем поле ввода после отправки сообщения
        setInputValue("")
    }

    // Скролл к последнему сообщению и фокус на input при отправке/получении нового сообщения
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        inputRef.current?.focus();
    }, [messages])

    const isMyMessage = (sender) => sender === currentUser

    return (
        <div className={styles.chat}>
            <h2>Чат</h2>
            {/* Плейсхолдер для пустого чата */}
            {!messages?.length && (
                <div className={styles.emptyState}>
                    <button title="Пока никто не написал... щёлкни!">🍿</button>
                    <p>Тут пока тихо...</p>
                </div>
            )}
            {/* Список сообщений */}
            {!!messages?.length && (
                <div className={styles.list}>
                    {messages.map(({ sender, text, id }) => {
                        const cls = cx(styles.sender, {
                            [styles.author]: isMyMessage(sender)
                        })
                        return (
                            <div className={styles.item} key={id}>
                                <span className={cls}>{sender}:&nbsp;</span>
                                {text}
                            </div>
                        )
                    })}
                    {/* ref для скролла к последнему сообщению */}
                    <div ref={messagesEndRef} />
                </div>
            )}
            {/* Форма ввода нового сообщения */}
            <form className={styles.form} onSubmit={sendMessage}>
                <input
                    type="text"
                    placeholder="Написать сообщение..."
                    name="message"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    autoComplete="off"
                    ref={inputRef} // ref для фокуса на поле
                />
                <button className="primary-btn" type="submit">↑</button>
            </form>
        </div>
    )
}
