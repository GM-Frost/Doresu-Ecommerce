import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import SettingsInputCompositeIcon from "@mui/icons-material/SettingsInputComposite";
import BackupIcon from "@mui/icons-material/Backup";
import PivotTableChartIcon from "@mui/icons-material/PivotTableChart";
import ChecklistRtlIcon from "@mui/icons-material/ChecklistRtl";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
export const MenuList = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Homepage",
        url: "/admin/dashboard",
        icon: HomeIcon,
      },
      {
        id: 2,
        title: "Profile",
        url: "/admin/dashboard/users/1",
        icon: PersonIcon,
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/admin/dashboard/users",
        icon: PeopleIcon,
      },
      {
        id: 2,
        title: "Products",
        url: "/admin/dashboard/products",
        icon: ShoppingCartIcon,
      },
      {
        id: 3,
        title: "Orders",
        url: "/admin/dashboard/orders",
        icon: InventoryIcon,
      },
    ],
  },
  {
    id: 3,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/admin/dashboard/settings",
        icon: SettingsInputCompositeIcon,
      },
      {
        id: 2,
        title: "Backups",
        url: "/admin/dashboard/backups",
        icon: BackupIcon,
      },
    ],
  },
  {
    id: 4,
    title: "Analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/admin/dashboard/charts",
        icon: PivotTableChartIcon,
      },
      {
        id: 2,
        title: "Logs",
        url: "/admin/dashboard/logs",
        icon: ChecklistRtlIcon,
      },
    ],
  },
];
