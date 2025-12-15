import { useRef, useEffect } from "react";
import { createMessageChannel } from "src/adapters/broadcast-channel-adapter";

export const useMessageChannel = (channelName, onMessage) => {
    const channelRef = useRef(null);

    useEffect(() => {
        const channel = createMessageChannel(channelName)
        channel.onMessage(onMessage)
        channelRef.current = channel

        return () => channel.close()
    }, [channelName])

    return {
        send: (message) => channelRef.current?.send(message),
    }
}