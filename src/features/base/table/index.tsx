import { TableProps } from "./type";

export function Table(props: TableProps) {
  const { children, ...rest } = props;

  return (
    <table {...rest} className="w-full my-5">
      {children}
    </table>
  );
}

export function TableRow(props: TableProps) {
  const { label, data } = props;

  return (
    <tr className="py-3 hover:bg-slate-50">
      <th className="text-left align-top">{label}</th>
      <td>{data}</td>
    </tr>
  );
}
