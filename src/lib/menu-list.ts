import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  LayoutGrid,
  LucideIcon
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: LucideIcon
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          active: pathname.includes("/dashboard"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Contents",
      menus: [
        {
          href: "",
          label: "Products",
          active: pathname.includes("/products"),
          icon: Bookmark,
          submenus: [
            {
              href: "/product/create-product",
              label: "Create Product",
              active: pathname === "/product/create-product"
            },
            {
              href: "/product/product-list",
              label: "Product List",
              active: pathname === "/product/product-list"
            },
            {
              href: "/product/print-barcode",
              label: "Print Barcode",
              active: pathname === "/product/print-barcode"
            }
          ]
        },
        {
          href: "",
          label: "Adjustment",
          active: pathname.includes("/adjustment"),
          icon: Bookmark,
          submenus: [
            {
              href: "/adjustment/create-adjustment",
              label: "Create Adjustment",
              active: pathname === "/adjustment/create-adjustment"
            },
            {
              href: "/adjustment/adjustment-list",
              label: "Adjustment List",
              active: pathname === "/adjustment/adjustment-list"
            }
          ]
        },
        {
          href: "",
          label: "Transfer",
          active: pathname.includes("/transfer"),
          icon: Bookmark,
          submenus: [
            {
              href: "/transfer/create-transfer",
              label: "Create Transfer",
              active: pathname === "/transfer/create-transfer"
            },
            {
              href: "/transfer/transfer-list",
              label: "Transfer List",
              active: pathname === "/transfer/transfer-list"
            }
          ]
        },
        {
          href: "",
          label: "Expense",
          active: pathname.includes("/expense"),
          icon: Bookmark,
          submenus: [
            {
              href: "/expense/create-expense",
              label: "Create Expense",
              active: pathname === "/expense/create-expense"
            },
            {
              href: "/expense/list-expenses",
              label: "List Expenses",
              active: pathname === "/expense/list-expenses"
            },
            {
              href: "/expense/expense-category",
              label: "Expense Category",
              active: pathname === "/expense/expense-category"
            }
          ]
        },
        {
          href: "",
          label: "Quotations",
          active: pathname.includes("/quotations"),
          icon: Bookmark,
          submenus: [
            {
              href: "/quotations/create-quotations",
              label: "Create Quotations",
              active: pathname === "/quotations/create-quotations"
            },
            {
              href: "/quotations/list-quotations",
              label: "List Quotations",
              active: pathname === "/quotations/list-quotations"
            }
          ]
        },
        {
          href: "",
          label: "Purchases",
          active: pathname.includes("/purchases"),
          icon: Bookmark,
          submenus: [
            {
              href: "/purchases/create-purchases",
              label: "Create Purchases",
              active: pathname === "/purchases/create-purchases"
            },
            {
              href: "/purchases/purchases-list",
              label: "Purchases List",
              active: pathname === "/purchases/purchases-list"
            }
          ]
        },
        {
          href: "",
          label: "Sales",
          active: pathname.includes("/sales"),
          icon: Bookmark,
          submenus: [
            {
              href: "/sales/create-sales",
              label: "Create Sales",
              active: pathname === "/sales/create-sales"
            },
            {
              href: "/sales/sales-list",
              label: "Sales List",
              active: pathname === "/sales/sales-list"
            }
          ]
        },
        {
          href: "",
          label: "Sales Return",
          active: pathname.includes("/sales-return"),
          icon: Bookmark,
          submenus: [
            {
              href: "/sales-return/create-sales-return",
              label: "Create Sales Return",
              active: pathname === "/sales-return/create-sales-return"
            },
            {
              href: "/sales-return/sales-return-list",
              label: "Sales Return List",
              active: pathname === "/sales-return/sales-return-list"
            }
          ]
        },
        {
          href: "",
          label: "Purchases Return",
          active: pathname.includes("/purchases-return"),
          icon: Bookmark,
          submenus: [
            {
              href: "/purchases-return/create-purchases-return",
              label: "Create Purchases Return",
              active: pathname === "/purchases-return/create-purchases-return"
            },
            {
              href: "/purchases-return/purchases-return-list",
              label: "Purchases Return List",
              active: pathname === "/purchases-return/purchases-return-list"
            }
          ]
        },
        {
          href: "",
          label: "People",
          active: pathname.includes("/people"),
          icon: Bookmark,
          submenus: [
            {
              href: "/people/customer-list",
              label: "Customer List",
              active: pathname === "/people/customer-list"
            },
            {
              href: "/people/supplier-list",
              label: "Supplier List",
              active: pathname === "/people/supplier-list"
            },
            {
              href: "/people/user-list",
              label: "User List",
              active: pathname === "/people/user-list"
            }
          ]
        },
      ]
    },
    {
      groupLabel: "Settings",
      menus: [
        {
          href: "/settings",
          label: "Settings",
          active: pathname.includes("/settings"),
          icon: Users,
          submenus: [
            {
              href: "/setting/system-settings",
              label: "System Settings",
              active: pathname === "/system-settings"
            },
            {
              href: "/setting/group-permissions",
              label: "Group Permissions",
              active: pathname === "/group-permissions"
            },
            {
              href: "/setting/warehouse",
              label: "Warehouse",
              active: pathname === "/warehouse"
            },
            {
              href: "/setting/category",
              label: "Category",
              active: pathname === "/category"
            },
            {
              href: "/setting/brand",
              label: "Brand",
              active: pathname === "/brand"
            },
            {
              href: "/setting/currency",
              label: "Currency",
              active: pathname === "/currency"
            },
            {
              href: "/setting/unit",
              label: "Unit",
              active: pathname === "/unit"
            }
          ]
        },
        {
          href: "/backup",
          label: "Backup",
          active: pathname.includes("/backup"),
          icon: Settings,
          submenus: []
        }
      ]
    }
  ];
}
