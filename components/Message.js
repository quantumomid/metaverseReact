import { useMoralis } from "react-moralis";

const Message = ({ message }) => {
    const { user } = useMoralis();
    
    return (
        <div>
            { message.attributes.message }
        </div>
    )
}

export default Message;