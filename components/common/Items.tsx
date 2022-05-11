interface ItemsProps {
  kind: string;
}

export default function Items({ kind }: ItemsProps) {
  return (
    <li className="text-xs font-semibold text-gray-300">
      <span className="hover:bg-gray-700 px-5 py-[0.6rem] rounded-lg cursor-pointer">
        {kind}
      </span>
    </li>
  );
}
