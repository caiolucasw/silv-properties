"use client";
import bookmarkProperty from "@/app/actions/bookmarkProperty";
import { Property } from "@/types/interfaces";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { FaBookmark } from "react-icons/fa";
import { toast } from "react-toastify";

const BookmarkButton = ({
  property,
  bookMarked: saved,
}: {
  property: Property;
  bookMarked: boolean;
}) => {
  const { data } = useSession();
  const userId = data?.user?.id;
  const [bookMarked, setBookMarked] = useState(saved);
  const [loading, setLoading] = useState(false);

  if (!userId) return <></>;
  return (
    <>
      <button
        className={`${
          bookMarked
            ? "bg-red-500 hover:bg-red-600"
            : "bg-black hover:opacity-80"
        } text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center`}
        disabled={loading}
        onClick={async () => {
          setLoading(true);
          const res = await bookmarkProperty(property._id as string);
          if (res?.error) {
            toast.error(res.msg);
          } else {
            setBookMarked((curr) => !curr);
            toast.success(res.msg);
          }

          setLoading(false);
        }}
      >
        <FaBookmark className="mr-2" />{" "}
        {bookMarked ? "Remover" : "Salvar Propriedade"}
      </button>
    </>
  );
};

export default BookmarkButton;
