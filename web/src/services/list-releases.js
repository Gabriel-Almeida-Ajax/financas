import {v4 as uuid} from "uuid";

const status = {
  pending: "pending",
  completed: "completed",
  late: "late",
};

const statusColor = {
  pending: "bg-yellow-500",
  completed: "bg-green-500",
  late: "bg-red-500",
};

export function getColorByStatus(status) {
  return statusColor[status];
}

const type = {
  cost: "cost",
  revenue: "revenue",
};

const typeColor = {
  cost: "text-red-500",
  revenue: "text-green-500",
};

export function getColorByType(type) {
  return typeColor[type];
}

export function getTypeFlag(type) {
  return type === "cost" ? "-" : "";
}

export function getReleases() {
  return [
    {
      id: uuid(),
      title: "Release 1",
      value: 1000,
      date: "2021-06-01",
      status: status.pending,
      type: type.cost,
    },
    {
      id: uuid(),
      title: "Release 2",
      value: 2000,
      date: "2021-06-02",
      status: status.completed,
      type: type.revenue,
    },
    {
      id: uuid(),
      title: "Release 3",
      value: 3000,
      date: "2021-06-03",
      status: status.late,
      type: type.cost,
    },
    {
      id: uuid(),
      title: "Release 4",
      value: 3000,
      date: "2021-06-03",
      status: status.pending,
      type: type.revenue,
    },
    {
      id: uuid(),
      title: "Release 5",
      value: 3000,
      date: "2021-06-03",
      status: status.pending,
      type: type.cost,
    },
    {
      id: uuid(),
      title: "Release 3",
      value: 3000,
      date: "2021-06-03",
      status: status.late,
      type: type.revenue,
    },
    {
      id: uuid(),
      title: "Release 4",
      value: 3000,
      date: "2021-06-03",
      status: status.completed,
      type: type.cost,
    },
    {
      id: uuid(),
      title: "Release 5",
      value: 3000,
      date: "2021-06-03",
      status: status.pending,
      type: type.revenue,
    },
  ];
}
