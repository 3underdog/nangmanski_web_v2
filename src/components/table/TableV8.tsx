import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import clsx from 'clsx';
import * as React from 'react';

type Rows = {
  operateTime: string;
  spacer: string;
  x1: string | null;
  x2: string | null;
  x3: string | null;
  x4: string | null;
  x5: string | null;
  x6: string | null;
  x7: string | null;
  x8: string | null;
  x9: string | null;
  x10: string | null;
};

type TableHeader = {
  id: string;
  headerName: string;
};

const columnHelper = createColumnHelper<Rows>();
export default function ReactTable_V8({
  tableHeader,
  tableData,
}: {
  tableHeader: Array<TableHeader>;
  tableData: [];
}) {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [data, setData] = React.useState(() => [...tableData]);
  // eslint-disable-next-line unused-imports/no-unused-vars
  const rerender = React.useReducer(() => ({}), {})[1];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const columns: any = [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tableHeader.map((value: any) => {
    columns.push(
      columnHelper.accessor(value.id, {
        id: value.id,
        cell: (info) => info.getValue(),
        header: () => <span>{value.headerName}</span>,
      })
    );
  });

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className='scrollbar-hide overflow-x-auto border-2 border-gray-100'>
      <table className='w-[130px] min-w-[130px] bg-white text-center'>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={clsx(
                    'boder-slate-200 w-[100px] min-w-[100px] border-r-2 bg-gray-600 py-[5px] text-center text-xxs text-white',
                    'border-b-2 first:absolute first:min-w-[100px] first:border-r-[1px] first:pl-2 first:text-left first:text-xxs',
                    'second:w-[100px] second:min-w-[100px]',
                    'font-md'
                  )}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className={clsx(
                    'boder-slate-200 w-[100px] min-w-[100px] border-r-2 bg-white py-[3px] text-center text-[10px]',
                    'first:absolute first:min-w-[100px] first:border-r-[1px] first:pl-4 first:text-left',
                    'second:w-[100px] second:min-w-[100px]'
                  )}
                >
                  {cell.getValue() === 'O' ? (
                    <div className='text-blue-600'>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </div>
                  ) : (
                    <div className='text-gray-600'>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
