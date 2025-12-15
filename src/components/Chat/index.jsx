import { useState, useEffect, useRef } from "react";
import cx from "classnames";
import { useCurrentUser, useLocalStorage, useMessageChannel } from "src/hooks"
import styles from "./index.module.css"

export function Chat({ movieId }) {
    if (!movieId) {
        return null // TODO: использовать loader
    }

    const currentUser = useCurrentUser()
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // история сообщений чата привязана к фильму
    const { value: messages, setValue: setMessages } = useLocalStorage(`flickmate_chat_${movieId}`, [])

    const [inputValue, setInputValue] = useState("")

    const { send: sendChannelMessage } = useMessageChannel(`flickmate_channel_${movieId}`, (message) => {
        setMessages(prev => [...prev, message]);
    })

    const sendMessage = (event) => {
        event.preventDefault()
        if (!inputValue.trim()) return

        const message = {
            id: `${currentUser}_${Date.now()}`,
            sender: currentUser,
            text: inputValue.trim(),
        };

        setMessages(prev => [...prev, message]);
        sendChannelMessage(message);

        setInputValue("")
    }

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        inputRef.current?.focus();
    }, [messages])

    const isMyMessage = (sender) => sender === currentUser

    return (
        <div className={styles.chat}>
            <h2>Чат</h2>
            {!messages?.length && (
                <div className={styles.emptyState}>
                    <button title="Пока никто не написал... щёлкни!">🍿</button>
                    <p>Тут пока тихо...</p>
                </div>
            )}
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
                </div>
            )}
            <form className={styles.form} onSubmit={sendMessage}>
                <input
                    type="text"
                    placeholder="Написать сообщение..."
                    name="message"
                    value={inputValue}
                    onChange={(event) => setInputValue(event.target.value)}
                    autoComplete="off"
                />
                <button className="primary-btn" type="submit">↑</button>
            </form>
        </div>
    )
}
