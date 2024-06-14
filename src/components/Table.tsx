/* eslint-disable @typescript-eslint/no-explicit-any */
interface TableProps {
  data: any[];
  columns: {
    text: string;
    accessor: string;
  }[];
}

export default function Table({ data, columns }: TableProps) {
  return (
    <table className="table-auto w-full -mt-2 rounded bg-black border-separate border-spacing-y-3 bg-transparent">
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              className="p-2 text-left text-zinc-400 font-normal"
              key={column.text}
            >
              {column.text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr className="bg-[#E5E5E5]" key={row.id}>
            {columns.map((column) => (
              <td className="p-4" key={column.accessor}>
                <span className="text-xs lg:text-base">{row[column.accessor]}</span>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
