"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import setRead from "@/app/actions/setRead";
// import deleteMessage from '@/app/actions/deleteMessage';
import { useGlobalContext } from "@/context/GlobalContext";
import { Message, Property } from "@/types/interfaces";

const MessageCard = ({ message }: { message: Message }) => {
  const [isRead, setIsRead] = useState(message.read);
  const [isDeleted, setIsDeleted] = useState(false);

  const { setUnreadCount } = useGlobalContext();

  const handleRead = async () => {
    if (!message._id) return;
    try {
      const { status } = await setRead(message?._id);
      setIsRead(status === 200);
      if (setUnreadCount) {
        setUnreadCount((curr) => (curr > 1 ? curr - 1 : 0));
      }
      toast.success("Notificação marcada como lida");
    } catch (err) {
      toast.error("Ops! Houve um erro.");
    }
  };

  // const handleDeleteClick = async () => {
  //   await deleteMessage(message._id);
  //   setIsDeleted(true);
  //   setUnreadCount((prevCount) => (isRead ? prevCount : prevCount - 1));
  //   toast.success('Message Deleted');
  // };

  return (
    <div className="relative bg-white p-4 rounded-md shadow-md border border-gray-200">
      {!isRead && (
        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md">
          Nova
        </div>
      )}
      <h2 className="text-xl mb-4">
        <span className="font-bold">Property Inquiry:</span>{" "}
        {(message.property as Property)?.name}
      </h2>
      <p className="text-gray-700">{message.message}</p>

      <ul className="mt-4">
        <li>
          <strong>Recebida:</strong>{" "}
          {new Date(message.createdAt).toLocaleString("pt-BR")}
        </li>
      </ul>
      <button
        onClick={handleRead}
        className={`mt-4 mr-3 ${
          isRead ? "bg-gray-300" : "bg-blue-500 text-white"
        } py-1 px-3 rounded-md`}
      >
        {isRead ? "Read" : "Mark As Read"}
      </button>
      {/* <button
        onClick={handleDeleteClick}
        className='mt-4 bg-red-500 text-white py-1 px-3 rounded-md'
      >
        Delete
      </button> */}
    </div>
  );
};

export default MessageCard;
