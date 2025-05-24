function ChatMessage(props) {
    const { message, username } = props.message

    return (
        <h2>{username}: {message}</h2>
    )
}

export default ChatMessage