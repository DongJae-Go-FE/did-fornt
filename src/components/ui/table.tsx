"use client";

import { type ComponentProps, createContext, useContext } from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

type TableContextType = {
  type: "common" | "description";
};

const TableContext = createContext<TableContextType>({ type: "common" });

function useTableContext() {
  const context = useContext(TableContext);

  return context;
}

const tableVariants = cva("w-full border-t border-gray-200", {
  variants: {
    type: {
      common: "",
      description: "table-fixed",
    },
  },
  defaultVariants: {
    type: "common",
  },
});

const tableHeadVariants = cva(
  "h-12 px-4 py-2.5 body02M align-middle whitespace-nowrap bg-gray-100 border-r border-gray-200 last:border-r-0",
  {
    variants: {
      type: {
        common: "text-center",
        description: "text-left",
      },
    },
    defaultVariants: {
      type: "common",
    },
  }
);

const tableCellVariants = cva(
  "h-12 px-4 py-2.5 body02R align-middle whitespace-nowrap bg-white border-r border-gray-200 last:border-r-0",
  {
    variants: {
      type: {
        common: "text-center",
        description: "text-left",
      },
    },
    defaultVariants: {
      type: "common",
    },
  }
);

type TableProps = ComponentProps<"table"> & VariantProps<typeof tableVariants>;

function Table({ type = "common", className, ...props }: TableProps) {
  return (
    <TableContext.Provider value={{ type: type ?? "common" }}>
      <div
        data-slot="table-container"
        className="relative w-full overflow-x-auto"
      >
        <table
          data-slot="table"
          className={cn(tableVariants({ type }), className)}
          {...props}
        />
      </div>
    </TableContext.Provider>
  );
}

function TableHeader({ className, ...props }: ComponentProps<"thead">) {
  return (
    <thead data-slot="table-header" className={cn(className)} {...props} />
  );
}

function TableBody({ className, ...props }: ComponentProps<"tbody">) {
  return <tbody data-slot="table-body" className={cn(className)} {...props} />;
}

function TableRow({ className, ...props }: ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn("border-b border-gray-200", className)}
      {...props}
    />
  );
}

function TableHead({ className, ...props }: ComponentProps<"th">) {
  const { type } = useTableContext();

  return (
    <th
      data-slot="table-head"
      className={cn(tableHeadVariants({ type }), className)}
      {...props}
    />
  );
}

function TableCell({ className, ...props }: ComponentProps<"td">) {
  const { type } = useTableContext();

  return (
    <td
      data-slot="table-cell"
      className={cn(tableCellVariants({ type }), className)}
      {...props}
    />
  );
}

function TableCaption({ className, ...props }: ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("sr-only", className)}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};

export type { TableProps, TableContextType };
