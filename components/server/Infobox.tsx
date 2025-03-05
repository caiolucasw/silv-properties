import Link from "next/link";

interface InfoBoxProps {
  heading: string;
  children: string;
  backgroundColor?: string;
  textColor?: string;
  buttonInfo: {
    label: string;
    link: string;
    color?: string;
  };
}

const InfoBox = ({
  heading,
  children,
  backgroundColor = "bg-gray-100",
  textColor = "text-gray-800",
  buttonInfo: { label, link, color },
}: InfoBoxProps) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{children}</p>
      <Link
        href={link}
        className={`inline-block ${color} text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {label}
      </Link>
    </div>
  );
};

export default InfoBox;
