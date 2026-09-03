"use client";

import { motion, type Variants } from "framer-motion";
import { Check, Minus, X, Zap } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Status = "yes" | "partial" | "no";

type Cell = { status: Status; note?: string };

type Column = { name: string; detail: string; featured: boolean };

type Row = { feature: string; cells: [Cell, Cell, Cell] };

type Group = { title: string; rows: Row[] };

interface ComparisonSectionProps {
  headline?: string;
  subheadline?: string;
  columns?: Column[];
  groups?: Group[];
}

const defaultColumns: Column[] = [
  { name: "Astia Web", detail: "AI-managed, Astro-powered", featured: true },
  { name: "Web agency", detail: "Custom builds, retainers", featured: false },
  { name: "Wix / Squarespace", detail: "DIY website builders", featured: false },
];

const defaultGroups: Group[] = [
  {
    title: "Pricing",
    rows: [
      {
        feature: "Upfront cost",
        cells: [
          { status: "yes", note: "CHF 0" },
          { status: "no", note: "CHF 15k - 40k" },
          { status: "yes", note: "CHF 0" },
        ],
      },
      {
        feature: "Monthly cost",
        cells: [
          { status: "yes", note: "CHF 150 - 550" },
          { status: "no", note: "CHF 500 - 2,000" },
          { status: "partial", note: "CHF 30 - 50" },
        ],
      },
      {
        feature: "Annual total (year 1)",
        cells: [
          { status: "yes", note: "CHF 1,800 - 6,600" },
          { status: "no", note: "CHF 21k - 64k" },
          { status: "partial", note: "CHF 360 - 600" },
        ],
      },
    ],
  },
  {
    title: "Performance",
    rows: [
      {
        feature: "Sub-1s load (lean page)",
        cells: [
          { status: "yes", note: "Possible" },
          { status: "partial", note: "Sometimes" },
          { status: "partial", note: "Rarely" },
        ],
      },
      {
        feature: "Lighthouse score",
        cells: [
          { status: "yes", note: "High 90s possible" },
          { status: "partial", note: "60-85" },
          { status: "partial", note: "50-70" },
        ],
      },
      {
        feature: "Page weight",
        cells: [
          { status: "yes", note: "From ~80 KB lean" },
          { status: "partial", note: "~1.5 MB" },
          { status: "no", note: "~2.1 MB" },
        ],
      },
      {
        feature: "Time to deploy a change",
        cells: [
          { status: "yes", note: "< 2 minutes" },
          { status: "partial", note: "3 - 14 days" },
          { status: "partial", note: "Manual edits" },
        ],
      },
    ],
  },
  {
    title: "Features",
    rows: [
      {
        feature: "You own the code",
        cells: [
          { status: "yes", note: "Git repo + CMS" },
          { status: "partial", note: "Maybe" },
          { status: "no", note: "No" },
        ],
      },
      {
        feature: "AI-managed updates",
        cells: [
          { status: "yes", note: "Included" },
          { status: "no", note: "Extra cost" },
          { status: "no", note: "Manual only" },
        ],
      },
      {
        feature: "Direct booking integration",
        cells: [
          { status: "yes", note: "Built for it" },
          { status: "partial", note: "Custom build" },
          { status: "partial", note: "Limited add-ons" },
        ],
      },
      {
        feature: "Multi-language support",
        cells: [
          { status: "yes", note: "Included" },
          { status: "partial", note: "Extra cost" },
          { status: "partial", note: "Basic" },
        ],
      },
    ],
  },
];
