import { useRef, useEffect } from "react";
import { createMessageChannel } from "src/adapters/broadcast-channel-adapter";

/**
 * useMessageChannel — хук для работы с BroadcastChannel
 *
 * Предназначен для обмена сообщениями между вкладками или окнами браузера
 *
 * @param {string} channelName - имя канала
 * @param {function} onMessage - callback для обработки входящих сообщений
 * @returns { send } - функция отправки сообщений
 */
export const useMessageChannel = (channelName, onMessage) => {
    // useRef для хранения канала
    // Ref нужен, чтобы один и тот же объект канала использовался между рендерами
    const channelRef = useRef(null);

    // useEffect для создания и подписки на канал
    useEffect(() => {
        const channel = createMessageChannel(channelName)
        channel.onMessage(onMessage) // подписка на входящие сообщения
        channelRef.current = channel

        // Очистка при размонтировании, чтобы избежать утечек памяти
        // React вызовет return функцию, когда компонент удаляется
        return () => channel.close()
    }, [channelName])

    return {
        send: (message) => channelRef.current?.send(message),
    }
}