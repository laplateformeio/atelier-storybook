import { ArrowDownWideNarrow, ArrowUpWideNarrow, EllipsisVertical, EyeOff } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from "../../components/ui/dropdown-menu";


export interface TableProps<T extends Record<string, unknown>> {
  columns: {
    name: string;
    className?: string;
  }[];
  data: T[];
  legeng?: string;
}

export const TableComponent = <T extends Record<string, unknown>>({ data, columns, legeng }: TableProps<T>) => (
  <Table>
    {legeng && <TableCaption>{legeng}</TableCaption>}
    <TableHeader>
      <TableRow className="w-full overflow-scroll">
        {columns.map((column, i) => (
          <TableHead key={i} className={column.className}>
            <span className="flex items-center justify-between w-full">
              {column.name}
              {/* <Button color="#cacaca" variant='ghost' onClick={() => console.log("clicked")}>
                <EllipsisVertical color="#cacaca" />
              </Button> */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button color="#cacaca" variant='ghost' onClick={() => console.log("clicked")}>
                    <EllipsisVertical color="#cacaca" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className=""
                >

                  <DropdownMenuItem className="flex items-baseline gap-2 whitespace-nowrap" onClick={() => console.log("clicked, ascending")}>
                    <ArrowUpWideNarrow />
                    <span>Sort by {column.name} ascending</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem  onClick={() => console.log("clicked, ascending")}>
                    <ArrowDownWideNarrow />
                    <span>Sort by {column.name} descending</span>
                  </DropdownMenuItem>
                  <hr />
                  <DropdownMenuItem>
                    <EyeOff />
                    <span>Hide {column.name} column</span>
                  </DropdownMenuItem>

                </DropdownMenuContent>
              </DropdownMenu>

            </span>
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((item, i) => (
        <TableRow key={i}>
          {Object.keys(item).map((key, i) => (
            <TableCell key={i}>{String(item[key])}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

