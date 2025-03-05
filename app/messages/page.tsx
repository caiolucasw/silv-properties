import connectDB from "@/config/database";
import Message from "@/models/Message";
import MessageCard from "@/components/client/MessageCard";
import "@/models/Property";
import convertToPlainObject from "@/utils/convert-plain-object";
import { getSessionUser } from "@/utils/getSessionUser";

const MessagePage = async () => {
  await connectDB();

  const user = await getSessionUser();

  const messagesRes = await Message.find({ recipient: user?.id })
    .sort({ read: 1, createdAt: -1 }) // Sort read messages in asc order
    .populate("sender", "username")
    .populate("property", "name")
    .lean();

  // Convert to serializable object so we can pass to client component.
  const messages = messagesRes.map((m) => {
    const message = convertToPlainObject(m);
    message.sender = convertToPlainObject(m.sender);
    message.property = convertToPlainObject(m.property);
    return message;
  });

  return (
    <section className="bg-blue-50">
      <div className="container m-auto py-24 max-w-6xl">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <h1 className="text-3xl font-bold mb-4">Suas Mensagens</h1>

          <div className="space-y-4">
            {messages.length === 0 ? (
              <p>Você não tem mensagens</p>
            ) : (
              messages.map((message) => (
                <MessageCard key={message._id} message={message} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default MessagePage;
